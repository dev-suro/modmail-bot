export async function GET(event) {

 if (!event.locals.userData?.manager)
  return resolve({
   status: 401,
   body: {
    error: "Unauthorized"
   }
  });

 let result = await fetch(`https://discord.com/api/v10/guilds/${process.env.GUILD_ID}/roles`, {
  headers: {
   Authorization: `Bot ${process.env.DISCORD_TOKEN}`
  }
 });

 let roles = [];

 if (result.status === 200)
  roles = (await result.json()).map(r => {
   return {
    id: r.id,
    name: r.name,
    color: r.color ? `#${r.color.toString(16).padStart(6, "0")}` : null
   }
  });

 return {
  status: 200,
  body: roles
 }

}
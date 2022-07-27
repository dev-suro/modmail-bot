import { d as db } from "../../../../_app/immutable/chunks/db-90aa6d88.js";
import "mysql2";
async function GET(event) {
  if (!event.locals.userData)
    return {
      status: 401,
      body: {
        error: "Unauthorized"
      }
    };
  let start = event.url.searchParams.get("start") || 0, limit = event.url.searchParams.get("limit") || 50, userId = event.url.searchParams.get("userId") || null;
  try {
    let result = await new Promise((resolve, reject) => db.query(`SELECT * FROM blocked${userId ? ` WHERE id = ?` : ""} LIMIT ${parseInt(start)}, ${parseInt(limit)}`, [userId], (err, result2) => err ? reject(err) : resolve(result2)));
    return {
      status: 200,
      body: result
    };
  } catch (err) {
    return {
      status: 409,
      body: {
        error: err.message
      }
    };
  }
}
async function DEL(event) {
  if (!event.locals.userData)
    return {
      status: 401,
      body: {
        error: "Unauthorized"
      }
    };
  let body = await event.request.json();
  try {
    await new Promise((resolve, reject) => db.query(`DELETE FROM blocked WHERE id = ?`, [body.userId], (err, result) => err ? reject(err) : resolve(result)));
    return {
      status: 204
    };
  } catch (err) {
    return {
      status: 409,
      body: {
        error: err.message
      }
    };
  }
}
export {
  DEL,
  GET
};

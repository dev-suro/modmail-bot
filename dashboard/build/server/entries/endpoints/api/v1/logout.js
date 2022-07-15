import { d as db } from "../../../../immutable/chunks/db-8f3108ad.js";
import cookie from "cookie";
import "mysql2";
import "../../../../immutable/chunks/config-40b67dc0.js";
import "fs";
async function get(event) {
  if (event.locals.userData)
    await new Promise((resolve) => db.query("DELETE FROM sessions WHERE id = ?", [event.locals.sessionId], () => resolve()));
  return {
    status: 307,
    headers: {
      "Set-Cookie": cookie.serialize("session_id", "_", {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 5,
        sameSite: "lax",
        path: "/"
      }),
      Location: "/"
    }
  };
}
export {
  get
};

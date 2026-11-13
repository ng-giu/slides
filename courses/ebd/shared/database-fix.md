---
layout: default
icon: tools
dense: true
class: giu-fix
routeAlias: fix-env
# Shared by Labs 8 and 9. Every message here was reproduced; the links go to
# shared/database.md, which the same decks import.
---

# The back end won't start

| You see | Cause | Fix |
|---|---|---|
| `node: .env: not found` | No `.env` in `backend`, or it has another name (`.env.txt`, `atlas-credentials.env`) | <Link to="db-copy">**Put your .env in backend**</Link>, named exactly `.env` |
| `` The `uri` parameter to `openUri()` must be a string, got "undefined" `` | `.env` has no line starting `MONGODB_URI=` | <Link to="db-make">**Make your .env**</Link>: one line, `MONGODB_URI="mongodb+srv://..."` |
| `Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"` | Nothing between the quotes, or a space before `mongodb` | Paste the string again, right after the first `"` |

---
layout: default
icon: tools
dense: true
class: giu-fix
routeAlias: fix-db
---

# The back end won't connect

| You see | Cause | Fix |
|---|---|---|
| `querySrv ENOTFOUND` | The address in the string is wrong, or cut short | Copy it again from **Connect → Drivers** |
| `querySrv ECONNREFUSED` | Your network cannot look up Atlas | Switch to a **phone hotspot** |
| Stuck on `Connecting to MongoDB...`, then `MongooseServerSelectionError` | Atlas does not allow your IP, **or** the network blocks MongoDB | In Atlas, check **IP Access List** has `0.0.0.0/0`, **Active**; then try a hotspot |
| `bad auth : authentication failed` | The password is wrong: `<db_password>` still in the string, edited, or reset since | <Link to="db-user">**New password**</Link>, then put it in `.env` |

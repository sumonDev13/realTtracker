import { Server } from "socket.io";
import express from "express";
import { createServer } from "http";

import path from "path";
import { fileURLToPath } from "url";

const app = express();
const server = createServer(app);
const io = new Server(server);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));

io.on("connection", function (socket) {
  console.log("connected to socket");
});

app.get("/", function (req, res) {
  res.render("index");
});

const port = 3000;
server.listen(port, () => console.log(`Listening on port ${port}`));

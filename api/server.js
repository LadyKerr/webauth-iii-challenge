const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router");
const userRouter = require("../users/user-router");
// const serverMiddleware = require("./server-middleware");

const server = express();

// serverMiddleware(server);

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.send("server is up and running!");
});

module.exports = server;

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});
global._io = io;
const socketIo = require("./app/config/socket.js");
const userRouter = require("./app/routers/user.js");
const examRouter = require("./app/routers/exam.js");
dotenv.config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization,token"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(cookieParser());
app.use(express.json());

//router
app.use("/api/user", userRouter);
app.use("/api/exam", examRouter);
//socketIo
// global._io.use((socket, next) => {
//   const username = socket.handshake.auth?.username; //Dấu?: Nếu có data thì trả về user, nếu k có thì trả về underfind
//   if (!username) return next(new Error("Invalid username or no fill username"));
//   socket.username = username;
//   next();
// });
global._io.on("connection", socketIo.connection);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

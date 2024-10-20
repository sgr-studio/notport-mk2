// サーバーの設定
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 3002;

// アクセス権等のユーザー識別するやつ
let dialog_comment = [];
let dialog_userid = [];
let userID_4set   = [];
let AlluserID = [...new Set(userID_4set)];
let cnt_comments = 0;
let banList = [];

const adminID = [];
const batchID = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", (socket) => {
  // ==> Connections
  console.log("ユーザーが接続しました");

  // Login ==> [category  _admin]
  io.emit("admin login", adminID);
  socket.on("admin ban", (targetID, authTrue, userID,adminAuth) => {
    if(authTrue && userID==adminAuth) io.emit("admin ban", targetID);
  });

  // [category _system]
  // _ban
  socket.on("system ban", (banAccount) => {
    banList.push(banAccount);
    io.emit("system ban", banAccount);
  });

  // [category  _timeline]
  // _send
  socket.on("timeline send", (msg, username, userID) => {
    userID_4set.push(userID);
    AlluserID = [...new Set(userID_4set)];
    if(AlluserID.indexOf(userID) != -1) {
      dialog_comment.push(msg);
      dialog_userid.push(userID);
      console.log("[Dialog] | "+username+":"+msg);
      io.emit("timeline send", msg, username, cnt_comments, dialog_userid);
      io.emit("timeline batch",userID, adminID, cnt_comments, batchID);
      cnt_comments++;
    } else {
      console.log("[ERROR] Failed 'timeline send' socket.on")
    }
  });

  // _del
  socket.on("timeline del", (delID, userID) => {
    let commentID = null;
    if(dialog_userid[delID] == userID) {
      // dialog_comment.splice(delID,1);
      // dialog_userid.splice(delID,1);
      console.log("「"+dialog_comment[delID]+'」の項目を削除しました');
      commentID = delID;
    }
    io.emit("timeline del", commentID);
  });

  // _edit
  socket.on("timeline edited", (editedComment,cnt_comments) => {
    io.emit("timeline edited", editedComment, cnt_comments);
  });
});

server.listen(PORT, () => {
  console.log("Listening on "+PORT);
});

app.use(express.static('public'));
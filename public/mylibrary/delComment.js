function delComment(delID, userID) {
  // console.log(delID,userID);
  socket.emit("timeline del", delID, userID);
}
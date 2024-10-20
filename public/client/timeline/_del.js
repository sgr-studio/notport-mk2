socket.on("timeline del", function (commentID) {
  // console.log(commentID);
  if(commentID !== null) {
    document.getElementById("c"+commentID).remove();
  }
});

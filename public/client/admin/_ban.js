socket.on("admin ban", function(targetID) {
    console.log("running")
    if(userID == targetID) io.emit("system ban", banned.push(userID));
});

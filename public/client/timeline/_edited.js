socket.on("timeline edited", function (commentText, cnt_comments) {
    document.querySelector("#UserInfo-"+cnt_comments+" span#msgComment").innerText = commentText + "(編集済み)";
});
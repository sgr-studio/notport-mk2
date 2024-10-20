_form.addEventListener("submit", function (e) {
  e.preventDefault();
  if(_input.value.trim() && _username.value.trim()) {
    socket.emit("timeline send", _input.value.trim(), username.value.trim(), result);
    _input.value = "";
  }
});


socket.on("timeline send", function (msg, username, cnt_comments, dialog_userid, id) {
  createMessage(username,msg,_timeline,cnt_comments,dialog_userid[cnt_comments], id);
  createAvator(dialog_userid[cnt_comments],cnt_comments);
  
  if(result !== dialog_userid[cnt_comments]) {
    console.log(cnt_comments);
    hideDelIcon(cnt_comments);
    hideEditIcon(cnt_comments);
    hideActionPanel(cnt_comments);
  }
  // save
  localStorage.setItem("datalist_history_comments_cnt",history_comments_cnt);
  localStorage.setItem("datalist_history_comments",history_comments);
  localStorage.setItem("datalist_history_username",history_username);
});

socket.on("timeline batch", function (userID,id,cnt_comments,batchID) {
  for(let i = 0; i < id.length; i++) {
    if(id[i] == userID) {
      let adminRank = document.createElement("i");
      adminRank.setAttribute("class",batchID[i]);
      if(batchID[i] == "bx bxl-twitter") adminRank.setAttribute("title","Twitter認証済み");
      else if(batchID[i] == "bx bx-code-alt") adminRank.setAttribute("title","notPortデベロッパー")
      else if(batchID[i] == "bx bxs-badge-check") adminRank.setAttribute("title","公式マーク")
      document.querySelector("#UserInfo-"+cnt_comments+" div").prepend(adminRank);
    }
  }
});
function createMessage(username, msg, where,cnt_comments, userID, id) {
  // Today宣言
  var today = new Date();
  var year = today.getFullYear();
  var month = ("0" + String(today.getMonth() + 1)).slice(-2);
  var day = ("0" + String(today.getDate())).slice(-2);
  var hour = ("0" + String(today.getHours())).slice(-2);
  var minute = ("0" + String(today.getMinutes())).slice(-2);


  let messagePanel = document.createElement("li");
  messagePanel.setAttribute("id","c"+cnt_comments);
  where.appendChild(messagePanel);
  let UserInfo = document.createElement("div");
  UserInfo.setAttribute("id","UserInfo-"+cnt_comments);
  document.getElementById("c"+cnt_comments).appendChild(UserInfo);
  let Name = document.createElement("div");
  Name.textContent = username+"@"+userID; // @マークあり
  // Name.textContent = username; // @マークなし
  document.getElementById("UserInfo-"+cnt_comments).appendChild(Name);
  
  let todayDate = document.createElement("span");
  todayDate.textContent = (year + "/" + month + "/" + day + " "+hour+":"+minute);
  document.querySelector("#UserInfo-"+cnt_comments+" div").appendChild(todayDate);

  let Comment = document.createElement("span");
  Comment.textContent = msg;
  Comment.setAttribute("id","msgComment");
  document.getElementById("UserInfo-"+cnt_comments).appendChild(Comment);
  let commentActionPanel = document.createElement("span");
  commentActionPanel.setAttribute("id","actionPanel");
  document.getElementById("UserInfo-"+cnt_comments).appendChild(commentActionPanel);
  let delIcon = document.createElement("i");
  delIcon.setAttribute("class","bx bxs-trash-alt");
  delIcon.setAttribute("id","CommentAction");
  delIcon.setAttribute("onclick","delComment("+cnt_comments+",'"+result+"')");
  document.querySelector("#UserInfo-"+cnt_comments+" span#actionPanel").appendChild(delIcon);

  // Edit Actions
  let EditIcon = document.createElement("i");
  EditIcon.setAttribute("class","bx bxs-edit-alt");
  EditIcon.setAttribute("id","CommentAction");
  EditIcon.setAttribute("onclick","editComment("+cnt_comments+",'"+result+"')");
  document.querySelector("#UserInfo-"+cnt_comments+" span#actionPanel").prepend(EditIcon);

  smapLastestComment();
  filter4Text(msg,username,cnt_comments);
}

// function hideDelIcon(cnt_comments) {
//   let qS = document.querySelector("#UserInfo-"+cnt_comments+" i");
//   qS.remove();
// }

// function createAvator(userID,cnt_comments) {
//   let avator = document.createElement("img");
//   avator.setAttribute("src","image.png");
//   document.querySelector("#UserInfo-"+cnt_comments).appendChild(avator);
// }
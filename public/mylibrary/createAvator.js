function createAvator(userID,cnt_comments) {
  let avator = document.createElement("img");
  avator.setAttribute("src","assets/image/image.png");
  document.querySelector("#c"+cnt_comments).prepend(avator);
}
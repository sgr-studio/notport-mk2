function hideDelIcon(cnt_comments) {
  let qS = document.querySelector("#UserInfo-"+cnt_comments+" i");
  qS.remove();
}
function hideEditIcon(cnt_comments) {
  let qS = document.querySelector("#UserInfo-"+cnt_comments+" i");
  qS.remove();
}
function hideActionPanel(cnt_comments) {
  let qS = document.querySelector("#UserInfo-"+cnt_comments+" span#actionPanel");
  qS.remove();
}
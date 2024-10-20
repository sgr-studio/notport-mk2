function editComment(cnt_comments,userID) {
    editComment_selected = cnt_comments;
    console.log("link:"+editComment_selected);
    if(msgSave == null) {
        let comment = document.querySelector("#UserInfo-"+cnt_comments+" span#msgComment");
        msgSave = comment.innerText;
        // comment.innerHTML = "<form id='editForm'><input id='edit' type='text' autocomplete='off' spellcheck='off' submit='sendEdited(" + cnt_comments + ")'></form>";
        comment.innerHTML = "<input id='edit' class='inputEdit' type='text' autocomplete='off' spellcheck='off'>";
        document.querySelector("#UserInfo-"+cnt_comments+" span#msgComment input#edit").value = msgSave;
    } 
    document.querySelector("#UserInfo-"+cnt_comments+" span#msgComment input#edit").focus();

    const _edit = document.querySelector("#edit");
    _edit.addEventListener("keydown", function(e) {
        if(e.key == "Enter") {
            let editedComment = _edit;
            socket.emit("timeline edited", editedComment.value,cnt_comments);
            // console.log("works")
            msgSave = null;
        }
    });
}

// document.getElementById("edit").addEventListener("keydown", function (e) {
//     if(e.key == "Enter") {
//         let output_comment = document.getElementById("edit").value;
//         document.querySelector("#UserInfo-"+editComment_selected+" span#msgComment").innerHTML = "";
//         document.querySelector("#UserInfo-"+editComment_selected+" span#msgComment").textContent = output_comment;
//     }
// });

// function sendEdited(cnt_comments) {
//     if(sendEdited.key == "Enter") {
//         let editedComment = document.querySelector("#UserInfo-"+cnt_comments+" span#msgComment input#edit");
//         io.emit("timeline edited", editedComment.value,cnt_comments);
//     }
// }



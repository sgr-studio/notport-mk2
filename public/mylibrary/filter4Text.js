function filter4Text(text,username,cnt_comments) {
    // console.log("text:"+text,"username:"+username,"cnt_comments:"+cnt_comments)
    let text1 = document.querySelector("#UserInfo-"+cnt_comments+" span");
    let text2 = document.querySelector("#UserInfo-"+cnt_comments+" div");
    // console.log(filter_text,block_text);
    for(let i = 0; i < filter_text.length; i++) {
        if (text1) {
            text1.textContent = text1.textContent.replaceAll(filter_text[i], block_text);
        }
        // text2のテキストを取得し、置換
        if (text2) {
            text2.textContent = text2.textContent.replaceAll(filter_text[i], block_text);
        }
    }
}
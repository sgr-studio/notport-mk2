let socket = io();

// edit
let editComment_selected = null;

// filter機能用
let filter_text = [];
let block_text = "";

// history（ローカルストレージ）用
let history_comments_cnt = [];
let history_comments = [];
let history_username = [];

// ローカルストレージがあれば取得
// 機能設定用
const storedFilterText = localStorage.getItem("datalist_filter_text");
if (storedFilterText) {
    try {
        filter_text = JSON.parse(storedFilterText) || []; // 配列に変換
    } catch (e) {
        console.error("Error parsing filter_text:", e);
        filter_text = []; // エラーが発生した場合は空の配列に設定
    }
}

const storedBlockText = localStorage.getItem("datalist_block_text");
if (storedBlockText) {
    block_text = storedBlockText;
}

// アカウント設定用
const storedUsingUsername = localStorage.getItem("datalist_using_username");
if (storedUsingUsername) {
    using_username = storedUsingUsername;
}

// 履歴設定用
const storedHistoryCommentsCnt = localStorage.getItem("datalist_history_comments_cnt");
if (storedHistoryCommentsCnt) {
    try {
        history_comments_cnt = JSON.parse(storedHistoryCommentsCnt) || []; // 配列に変換
    } catch (e) {
        console.error("Error parsing history_comments_cnt:", e);
        history_comments_cnt = []; // エラーが発生した場合は空の配列に設定
    }
}

const storedHistoryComments = localStorage.getItem("datalist_history_comments");
if (storedHistoryComments) {
    try {
        history_comments = JSON.parse(storedHistoryComments) || []; // 配列に変換
    } catch (e) {
        console.error("Error parsing history_comments:", e);
        history_comments = []; // エラーが発生した場合は空の配列に設定
    }
}

const storedHistoryUsername = localStorage.getItem("datalist_history_username");
if (storedHistoryUsername) {
    try {
        history_username = JSON.parse(storedHistoryUsername) || []; // 配列に変換
    } catch (e) {
        console.error("Error parsing history_username:", e);
        history_username = []; // エラーが発生した場合は空の配列に設定
    }
}

// 履歴をロードする
for (let i = 0; i < history_comments_cnt.length; i++) { // 修正: lengthのスペル
    LoadMessage(history_username[i], history_comments[i], "timeline", history_comments_cnt);
}

// filter_text
document.getElementById("filtering_input").addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        // inputの値を取得し、配列に追加
        const inputValue = document.getElementById("filtering_input").value;
        filter_text.push(inputValue);
        let uniqueFilterText = filter_text.filter((element, index) => {
            return filter_text.indexOf(element) == index;
        }) 
        // 直接valueをpushする
        // filter_textを文字列に変換して表示
        document.getElementById("view_filtering").textContent = uniqueFilterText;
        // localStorageに保存
        localStorage.setItem("datalist_filter_text", JSON.stringify(uniqueFilterText));
        // 入力フィールドをクリア
        document.getElementById("filtering_input").value = '';
    }
});

document.getElementById("blocked_input").addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        block_text = document.getElementById("blocked_input").value;
        localStorage.setItem("datalist_block_text", block_text);
    }
});

// userName
document.getElementById("username").addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        localStorage.setItem("datalist_using_username", document.getElementById("username").value);
    }
});

// userID
if (localStorage.getItem("userID")) {
    var result = localStorage.getItem("userID");
} else {
    var len = 8;
    var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var strLen = str.length;
    var result = "";

    for (var i = 0; i < len; i++) {
        result += str[Math.floor(Math.random() * strLen)];
    }
    localStorage.setItem("userID", result);
}

// 表示系
document.getElementById("username").value = using_username;
document.getElementById("userID").textContent = "ID:"+result;

// 保存系
let msgSave = null;
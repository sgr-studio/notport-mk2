function delFilter(){
    document.getElementById("view_filtering").innerHTML = "<em>なし</em>";
    uniqueFilterText = [];
    filter_text = [];
    // localStorageに保存
    localStorage.setItem("datalist_filter_text", "");
    // 入力フィールドをクリア
    document.getElementById("filtering_input").value = '';
}
socket.on("admin login", function (adminID) {
    if(adminID == userID) {
        let ban_command = document.createElement("input");
        ban_command.setAttribute("type","text");
        ban_command.setAttribute("id","banAccountName");
        ban_command.setAttribute("onclick","ban("+document.getElementById("banAccountName").value+","+ adminID +")");
        document.querySelector(".main header").appendChild(ban_command);
    }
});
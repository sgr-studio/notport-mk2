function ban(targetID, id) {
    let adminAuth = 0;
    for(let i = 0; i < id.length; i++) {
        if(id[i] == userID) {
            adminAuth = id[i];
        }
    }
    if(adminAuth == userID) {
        socket.emit("admin ban",targetID, adminAuth == userID, userID,adminAuth);
    }
}

function unban(targetID) {
    
}
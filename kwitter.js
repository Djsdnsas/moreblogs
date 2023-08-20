function addUser(){
    user_name = document.getElementById("user_name").value ;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html"
}
function updateLike(message_id){
    console.log("click on the like button-"+message_id);
    button_id = message_id ;
    like = document.getElementById(button_id).value ;
    update_like = Number(like)+1 ;
    console.log(update_like);

    firebase.database().ref(room_name).child(message_id).update({
        like: updated_Like
    });
}

const firebaseConfig = {
      apiKey: "AIzaSyAMZJLIPgRDAZZxq9PcexXjbdhbgP19VEQ",
      authDomain: "kwitter-b87cb.firebaseapp.com",
      projectId: "kwitter-b87cb",
      storageBucket: "kwitter-b87cb.appspot.com",
      messagingSenderId: "666726291711",
      appId: "1:666726291711:web:6d1d6e1e9409b776e594ca",
      measurementId: "G-C3WFV5D73P"
    };
firebase.intializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "welcome"+user_name+"!";

function addRoom(){
room_name = document.getElementById("room_name").value ;

firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_room.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name"+Room_names);
      row = "<div class='room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Roomnames+"</div><hr>";

document.getElementById("output").innerHTML = row ;

console.log(firebase_message_id);
console.log(message.data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+name+"<img class='user_tick' src = 'tick.png'></h4>";
messgae_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>";
like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+like+" onclick = 'updateLike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>like-"+like+"</span></button><hr>";

row = name_with_tag+messgae_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+= row ;


      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
localStorage.setItem("room_name",room_name);
window.location = "kwitter_room.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace = "index.html"
}
function send(){
      msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,message:msg,like:0
});
document.getElementById("msg").value = "";
}
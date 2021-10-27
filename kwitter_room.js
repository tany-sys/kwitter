
   // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCxN3KysubnSwg5PIyHs_f3-oPHUYNmmno",
    authDomain: "kwitter-a2d30.firebaseapp.com",
    databaseURL: "https://kwitter-a2d30-default-rtdb.firebaseio.com",
    projectId: "kwitter-a2d30",
    storageBucket: "kwitter-a2d30.appspot.com",
    messagingSenderId: "770793509958",
    appId: "1:770793509958:web:4d5410767b32f7e099a647"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
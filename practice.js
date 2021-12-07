var firebaseConfig = {
    apiKey: "AIzaSyCarncXTmdbC8K60r0Ctxy43iLDUef3uEY",
    authDomain: "kwitter-8e443.firebaseapp.com",
    databaseURL: "https://kwitter-8e443-default-rtdb.firebaseio.com",
    projectId: "kwitter-8e443",
    storageBucket: "kwitter-8e443.appspot.com",
    messagingSenderId: "740247853699",
    appId: "1:740247853699:web:833caf3a07fab23ef0d9b6",
    measurementId: "G-S1XQZR5R8P"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS

function addusername(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update(
        {
            purpose:"adding user"
        }
    );
}
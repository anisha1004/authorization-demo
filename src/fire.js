import firebase from "firebase";

 var firebaseConfig = {
    apiKey: "AIzaSyDd1g13m-O9ISca0kcBkajhMygS9e5NLzA",
    authDomain: "login-d483d.firebaseapp.com",
    projectId: "login-d483d",
    storageBucket: "login-d483d.appspot.com",
    messagingSenderId: "377409010662",
    appId: "1:377409010662:web:dc76623056abafc6077427"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;
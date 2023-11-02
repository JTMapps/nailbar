var firebase= require("firebase/app");

const firebaseConfig = {
    apiKey: "AIzaSyAi7vWrdz6NCnFlnuY3KT77lB3Xw8Lg1Hc",
    authDomain: "nailbar-bc5e8.firebaseapp.com",
    projectId: "nailbar-bc5e8",
    storageBucket: "nailbar-bc5e8.appspot.com",
    messagingSenderId: "672707669091",
    appId: "1:672707669091:web:c770672694748a01f75c56",
    databaseURL: "https://nailbar-bc5e8-default-rtdb.asia-southeast1.firebasedatabase.app/"
}; //"https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.getAuth(app);
const db = firebase.getDatabase(app);



const checkAuthState = async() => {
    firebase.onAuthStateChanged(auth, user => {
    if(user) {
        alert("you are already signed in");
        location.href("main.html");
    }

    else {
        /*$("#userfirstName").show(); 
        $("#userlastName").show(); 
        $("#userPhoneNumber").show();*/
    }
})
}

checkAuthState();

const userSignIn = async() => {
let signInEmail = $("#userEmail").val();
let signInPassword = $("#userPassword").val();
firebase.signInWithEmailAndPassword(auth, signInEmail, signInPassword)
.then((userCredential) => {
const user = userCredential.user;

console.log("New User: "+ user + signInEmail + signInPassword);
alert("You have signed in successfully!");
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
console.log(errorCode + errorMessage)
})
};

$("#signInButton").click(userSignIn);
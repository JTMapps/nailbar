import{initializeApp} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import{getAuth, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import{ getDatabase, set, get, update, remove, ref, child}from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAi7vWrdz6NCnFlnuY3KT77lB3Xw8Lg1Hc",
    authDomain: "nailbar-bc5e8.firebaseapp.com",
    projectId: "nailbar-bc5e8",
    storageBucket: "nailbar-bc5e8.appspot.com",
    messagingSenderId: "672707669091",
    appId: "1:672707669091:web:c770672694748a01f75c56"
}; //"https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();

const checkAuthState = async() => {
    onAuthStateChanged(auth, user => {
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
signInWithEmailAndPassword(auth, signInEmail, signInPassword)
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
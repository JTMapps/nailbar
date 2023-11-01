// Import the functions you need from the SDKs you need
import{initializeApp} from"https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import{getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";


// FIREBASE OBJECT CONFIGURATION;
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi7vWrdz6NCnFlnuY3KT77lB3Xw8Lg1Hc",
  authDomain: "nailbar-bc5e8.firebaseapp.com",
  projectId: "nailbar-bc5e8",
  storageBucket: "nailbar-bc5e8.appspot.com",
  messagingSenderId: "672707669091",
  appId: "1:672707669091:web:c770672694748a01f75c56"
}; //from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userSignOut = async() => {
await signOut(auth);
}

const checkAuthState = async() => {
  onAuthStateChanged(auth, user => {
  if(user) {
    $("#signOutButton").show();
    $("#business").show();

  }

  else{
    $("#signOutButton").hide();
    $("#business").hide();
  }
})
}

checkAuthState();

$("#signOutButton").click(userSignOut); 

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
 
  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdownBtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}


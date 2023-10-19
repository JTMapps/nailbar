		 // Import the functions you need from the SDKs you need
		  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
		  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
		  import {
			getAuth,
			createUserWithEmailAndPassword,
			signInWithEmailAndPassword,
			onAuthStateChanged,
			signOut
		  } from  "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
		 		  // TODO: Add SDKs for Firebase products that you want to use

		  // Your web app's Firebase configuration
		  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
		  const firebaseConfig = {
			apiKey: "AIzaSyA4xMNCyjxbhux_hBDe-nO9pF4uDsiipaI",
			authDomain: "salon-be3a1.firebaseapp.com",
			projectId: "salon-be3a1",
			storageBucket: "salon-be3a1.appspot.com",
			messagingSenderId: "425524125484",
			appId: "1:425524125484:web:64dbba0782b46ec4d29689",
			measurementId: "G-FHGB2XZM6D"
		  } //from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
	   
		  
		import{ getDatabase, set, get, update, remove, ref, child}from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js"
  
		// FIREBASE OBJECT CONFIGURATION;
		document.addEventListener("DOMContentLoaded", event => { 

		const app = initializeApp(firebaseConfig);
		const auth = getAuth(app);

		

        const db = getDatabase();

	
	
		const authForm = document.querySelector("#authForm");
		const userEmail = document.querySelector("#userEmail");
		const userPassword = document.querySelector("#userPassword");
		const signUpContent = document.querySelector("signUpContent");

		const signUpButton = document.querySelector("#signUpButton");
		const signInButton = document.querySelector("#signInButton");
		const signOutButton = document.querySelector("#signOutButton");
		//content to be hidden for signUp
		const userfirstName = document.querySelector("#userfirstName");
		const userlastName = document.querySelector("#userlastName");
		const userPhoneNumber = document.querySelector("#userPhoneNumber");

		//secretContent.style.display = 'none';

		const userSignUp = async() => {
			const signUpEmail = userEmail.value;
			const signUpPassword = userPassword.value;
			createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				InsertData();
				alert("Your account has been created!");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode + errorMessage)
			})
		}

		const userSignIn = async() => {
			const signInEmail = userEmail.value;
			const signInPassword = userPassword.value;
			signInWithEmailAndPassword(auth, signInEmail, signInPassword)
			.then((userCredential) => {
				const user = userCredential.user;
				InsertData();
				alert("You have signed in successfully!");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode + errorMessage)
			})
		}
	});


		const checkAuthState = async() => {
			onAuthStateChanged(auth, user => {
				if(user) {
					location.href="../nailbar/main.html";
				}

				else {

					userfirstName.style.display= "block";
					userLastName.style.display= "block";
					userPhoneNumber.style.display= "block";	
				}
			})
		}
		

		const userSignOut = async() => {
			await signOut(auth);
		}

		checkAuthState();

		signUpButton.addEventListener('click', userSignUp);
		signInButton.addEventListener('click', userSignIn);
		signOutButton.addEventListener('click', userSignOut);

		function InsertData(){
            set(ref(db, "People/" + firebase.auth().currentUser.uid + "person/", {
                name: userfirstName.value,
				email: userEmail.value,
				phoneNumber: userPhoneNumber.value,
            })
            .then(()=>{
                alert("Data Added Successfully");
            })
            .catch((errpr)=>{
                alert(error);
        	})
		)};
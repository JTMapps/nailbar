const authForm = document.querySelector("#authForm");
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const signUpContent = document.querySelector("signUpContent");

const signUpButton = document.querySelector("#signUpButton");
const signInButton = document.querySelector("#signInButton");
const signOutButton = document.getElementById("#signOutButton");
//content to be hidden for signUp
const userfirstName = document.querySelector("#userfirstName");
const userlastName = document.querySelector("#userlastName");
const userPhoneNumber = document.querySelector("#userPhoneNumber");

const business = document.querySelector("#business");

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

		const userSignOut = async() => {
			await signOut(auth);
		}

		const checkAuthState = async() => {
			onAuthStateChanged(auth, user => {
				if(user) {
					location.href="../nailbar/main.html";
					signOutButton.style.display="block";
					business.style.display= "flex";

				}

				else {

					userfirstName.style.display= "block";
					userLastName.style.display= "block";
					userPhoneNumber.style.display= "block";
					signOutButton.style.display="none";
					business.style.display= "none";

				}
			})
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
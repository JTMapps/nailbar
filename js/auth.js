const userSignUp = async() => {

	let signUpEmail = $("#userEmail").val();
	let signUpPassword = $("#userPassword").val();
	firebase.auth().createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
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
	signInEmail = $("#userEmail").val();
	signInPassword = $("#userPassword").val();
	firebase.auth().signInWithEmailAndPassword(auth, signInEmail, signInPassword)
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
			$("#signOutButton").style.display="block";
			$("#business").style.display= "flex";

		}

		else {

			userfirstName.style.display= "block";
			userLastName.style.display= "block";
			userPhoneNumber.style.display= "block";
			$("#signOutButton").style.display="none";
			$("#business").style.display= "none";

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
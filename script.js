/** @format */

// select needed items
const mainSection = document.querySelector(".main-section");
const ratingsForm = document.getElementById("ratings-form");
const ratingsCard = document.querySelector(".ratings-card");
const formErrorMessage = document.querySelector(".form-error");

// add the form submit event listener
ratingsForm.addEventListener("submit", (event) => {
	let ratedValue;
	handleSubmit(event);
});

// functions
// handle submit event handler
function handleSubmit(event) {
	// prevent the browsers default submit action, so that form data can be submitted using AJAX
	event.preventDefault();

	// check if the form is valid
	if (checkFormValidity()) {
		// hide the ratings card and display Appreciation card
		ratingsCard.classList.add("hidden-card");
		displayAppreciation(ratedValue);
	} else {
		// display error
		formErrorMessage.classList.add("active");
	}
}

// Display the Appreciation card function
function displayAppreciation(ratedValue) {
	console.log(ratedValue);
	// setUp the appreciation card to add to DOM
	const appreciationCard = document.createElement("div");
	appreciationCard.className = "appreciation-card card";
	appreciationCard.innerHTML = `<div class="success-image-container">
					<img
						src="./images/illustration-thank-you.svg"
						alt="thank you image" />
				</div>
				<p class="submitted-form-info">You selected ${ratedValue} out of 5</p>

				<div class="appreciation-message">
					<h1>Thank you!</h1>
					<p
						>We appreciate you taking the time to give a rating. If
						you ever need more support, don’t hesitate to get in
						touch!</p
					>
				</div>`;
	mainSection.appendChild(appreciationCard);
}

// Check validity of the form function
function checkFormValidity() {
	// get the radio inputs
	const radioInputs = document.querySelectorAll(".radio-input");
	// use the some() method to check if any of the radio inputs are checked, then store the boolean return value to a variable.
	const isValid = Array.from(radioInputs).some((radioInput) => {
		if (radioInput.checked) {
			ratedValue = radioInput.value;
			return true;
		} else {
			return false;
		}
	});

	return isValid;
}

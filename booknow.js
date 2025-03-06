// Simulating OTP generation for testing purposes
let generatedOTP = '';

function getOTP() {
    // Generate a random 6-digit OTP
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated OTP:", generatedOTP);  // For debugging

    // Ensure OTP is being generated
    if (generatedOTP) {
        alert("OTP Generated: " + generatedOTP);  // Show the OTP in an alert box for testing
    } else {
        alert("Error generating OTP.");
    }

    // Show OTP input section
    const otpSection = document.querySelector(".otp-section");
    if (otpSection) {
        otpSection.style.display = "block";
    } else {
        console.error("OTP section not found.");
    }

    // Disable the "Get OTP" button to prevent multiple OTP generation
    const getOtpBtn = document.getElementById("get-otp-btn");
    if (getOtpBtn) {
        getOtpBtn.disabled = true;
        getOtpBtn.textContent = "OTP Sent";
    } else {
        console.error("Get OTP button not found.");
    }
}

function verifyOTP() {
    const enteredOTP = document.getElementById("otp").value;
    const otpMessage = document.getElementById("otp-message");

    // OTP verification logic
    if (enteredOTP === generatedOTP) {
        otpMessage.textContent = "OTP Verified Successfully!";
        otpMessage.style.color = "green";
        document.getElementById("pay-btn").style.display = "inline-block";  // Show Pay button
    } else {
        otpMessage.textContent = "OTP entered is incorrect.";
        otpMessage.style.color = "red";
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const busNumber = document.getElementById("bus-number").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const seats = document.getElementById("seats").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const bookingDetails = {
        name,
        gender,
        busNumber,
        from,
        to,
        date,
        time,
        seats,
        email,
        phone
    };

    console.log("Booking Details:", bookingDetails);

    // Redirect to the next page (Payment)
    window.location.href = "pay.html";  // Redirect to pay.html
}

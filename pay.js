// Function to Show Selected Payment Section
function showPaymentOption(method) {
    document.getElementById("upi-section").style.display = "none";
    document.getElementById("card-section").style.display = "none";
    document.getElementById("netbanking-section").style.display = "none";

    document.getElementById(method + "-section").style.display = "block";

    // Hide bank details section when switching payment methods
    if (method === "netbanking") {
        document.getElementById("bank-details").style.display = "none";
    }
}

// Function to Show Bank Login Fields After Selecting a Bank
function showBankDetails() {
    const bankList = document.getElementById("bank-list").value;
    if (bankList) {
        document.getElementById("bank-details").style.display = "block";
    } else {
        document.getElementById("bank-details").style.display = "none";
    }
}

// Function to Simulate Payment Process
function processPayment() {
    setTimeout(() => {
        document.getElementById("payment-message").textContent = "✅ Payment Successful!";
        document.getElementById("payment-message").style.color = "#27ae60";

        // Show "Show Ticket" button
        document.getElementById("show-ticket-btn").style.display = "block";
    }, 2000);
}

// Function to Redirect to Ticket Page
function redirectToTicket() {
    window.location.href = "ticket.html";
}

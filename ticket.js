// Fetch Booking Details from Local Storage
window.onload = function() {
    document.getElementById("ticket-name").textContent = localStorage.getItem("name") || "N/A";
    document.getElementById("ticket-gender").textContent = localStorage.getItem("gender") || "N/A";
    document.getElementById("ticket-bus-number").textContent = localStorage.getItem("busNumber") || "N/A";
    document.getElementById("ticket-from").textContent = localStorage.getItem("from") || "N/A";
    document.getElementById("ticket-to").textContent = localStorage.getItem("to") || "N/A";
    document.getElementById("ticket-date").textContent = localStorage.getItem("date") || "N/A";
    document.getElementById("ticket-time").textContent = localStorage.getItem("time") || "N/A";
    document.getElementById("ticket-seats").textContent = localStorage.getItem("seats") || "N/A";
    document.getElementById("ticket-email").textContent = localStorage.getItem("email") || "N/A";
    document.getElementById("ticket-phone").textContent = localStorage.getItem("phone") || "N/A";
};

// Function to Download Ticket
function downloadTicket() {
    setTimeout(() => {
        document.getElementById("download-message").textContent = "✅ Your ticket has been downloaded!";
    }, 1000);
}

// Function to Go to Home Page
function goToHome() {
    window.location.href = "book.html";
}

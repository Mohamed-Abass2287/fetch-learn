 
      document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("patient-visit-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById("name").value.trim();
        const age = document.getElementById("age").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const symptoms = document.getElementById("symptoms").value.trim();
        const visitDate = document.getElementById("visit-date").value.trim();
        const timeSlot = document.getElementById("time-slot").value;

        // Simple validation
        if (!name || !age || !email || !phone || !symptoms || !visitDate || !timeSlot) {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        // Process the form submission (this could be sending data to a server)
        alert("Appointment request submitted successfully!");

        // Optionally, clear the form
        form.reset();
    });

    // Validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validate phone number format//
    function validatePhone(phone) {
        const phoneRegex = /^[0-9]{10}$/; // Assumes a 10-digit phone number format
        return phoneRegex.test(phone);
    }
});

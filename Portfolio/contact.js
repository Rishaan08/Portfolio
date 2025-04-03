function sendMail() {
    // Get form elements
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    
    // Show loading indicator
    const loadingDiv = document.querySelector(".loading");
    const errorDiv = document.querySelector(".error-message");
    const sentDiv = document.querySelector(".sent-message");
    
    if (loadingDiv) loadingDiv.style.display = "block";
    if (errorDiv) errorDiv.style.display = "none";
    if (sentDiv) sentDiv.style.display = "none";
    
    // Prepare parameters for EmailJS
    let params = {
        name: nameInput.value,
        email: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
    }
    
    // Send email using EmailJS
    emailjs.send("service_k3v3b4i", "template_qrls4am", params)
        .then(function(response) {
            // Hide loading indicator
            if (loadingDiv) loadingDiv.style.display = "none";
            
            // Show success message
            if (sentDiv) {
                sentDiv.style.display = "block";
                sentDiv.textContent = "Your message has been sent. Thank you!";
            } else {
                alert("Email sent successfully!");
            }
            
            // Clear form fields
            nameInput.value = "";
            emailInput.value = "";
            subjectInput.value = "";
            messageInput.value = "";
        })
        .catch(function(error) {
            // Hide loading indicator
            if (loadingDiv) loadingDiv.style.display = "none";
            
            // Show error message
            if (errorDiv) {
                errorDiv.style.display = "block";
                errorDiv.textContent = "There was an error sending your message. Please try again.";
            } else {
                alert("Error sending email: " + error.text);
            }
        });
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const emailParams = {
    to_name: "Recipient Name",
    from_name: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  // Use EmailJS or another method to send the email
  emailjs.send("default_service", "template_6le5ttk", emailParams)
    .then(function(response) {
      alert("Email sent successfully!");
      // Clear form fields
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    }, function(error) {
      alert("Failed to send email. Please try again later.");
    });
});

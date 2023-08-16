document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const fromName = document.getElementById("from_name").value;
  const recipientName = document.getElementById("recipient_name").value; // Capture recipient's name
  const userEmail = document.getElementById("email").value;
  const emailSubject = document.getElementById("subject").value;
  const userMessage = document.getElementById("message").value;

  const emailParams = {
    to_name: recipientName, // Use recipient's name from the form
    from_name: fromName,
    subject: emailSubject,
    message: userMessage
  };

  emailjs.send("default_service", "template_6le5ttk", emailParams)
    .then(function(response) {
      alert("Email sent successfully!");
      // Clear form fields
      document.getElementById("from_name").value = "";
      document.getElementById("recipient_name").value = ""; // Clear recipient's name field
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    })
    .catch(function(error) {
      alert("Failed to send email. Please try again later.");
      console.error("Email Error:", error);
    });
});

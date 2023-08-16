// Initialize EmailJS with your user ID
emailjs.init("YOUR_USER_ID");

// Constants for EmailJS
const SERVICE_ID = "your_service_id"; // Replace with your service ID
const TEMPLATE_ID = "your_template_id"; // Replace with your template ID

// Function to send the email using EmailJS
function sendEmail(emailParams) {
  emailjs.send(SERVICE_ID, TEMPLATE_ID, emailParams)
    .then(function(response) {
      // Email sent successfully
      alert("Email sent successfully!");
      // Clear the form inputs
      document.getElementById("from_name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch(function(error) {
      // Email sending failed
      alert("Failed to send email. Please try again later.");
      console.error("Email Error:", error);
    });
}

// Event listener for the form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form input values
  const fromName = document.getElementById("from_name").value;
  const userEmail = document.getElementById("email").value;
  const userMessage = document.getElementById("message").value;

  // Create an object with email parameters
  const emailParams = {
    to_name: "Recipient Name", // You can customize this
    from_name: fromName,
    subject: "Subject", // You can customize this
    message: userMessage,
    user_email: userEmail // Additional dynamic data from form
  };

  // Call the function to send the email
  sendEmail(emailParams);
});

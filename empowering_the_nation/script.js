// Handle login form submission
var modal = document.getElementById("myModal");
var joinUsBtn = document.getElementById("joinUsBtn");
var span = document.getElementsByClassName("close")[0];

// Profile and logout elements
var profileImage = document.getElementById("profileImage");
var profileEmail = document.getElementById("profileEmail");
var imageUpload = document.getElementById("imageUpload");
var logoutBtn = document.getElementById("logoutBtn");

// When the user clicks the Join Us button, open the modal
joinUsBtn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal if clicked outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form submission to store email and display profile
document.querySelector('form').onsubmit = function(event) {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    modal.style.display = 'none'; // Close modal
    profileEmail.textContent = email; // Update profile with email
    localStorage.setItem('userEmail', email); // Save email in localStorage
    logoutBtn.style.display = "inline"; // Show logout button
  }
}

// On page load, load stored data
window.onload = function() {
  const storedEmail = localStorage.getItem('userEmail');
  const storedImage = localStorage.getItem('profileImage');

  if (storedEmail) {
    profileEmail.textContent = storedEmail; // Set profile email
    logoutBtn.style.display = "inline"; // Show logout button if logged in
  }

  if (storedImage) {
    profileImage.src = storedImage; // Set profile image
  }
}

// Allow profile image upload and store it
profileImage.onclick = function() {
  imageUpload.click(); // Open file dialog when clicking on the image
}

imageUpload.onchange = function(event) {
  const reader = new FileReader();
  reader.onload = function(e) {
    profileImage.src = e.target.result; // Set the image
    localStorage.setItem('profileImage', e.target.result); // Save image to localStorage
  }
  reader.readAsDataURL(event.target.files[0]); // Read uploaded image
}

// Logout button clears the user data
logoutBtn.onclick = function() {
  localStorage.removeItem('userEmail'); // Remove stored email
  localStorage.removeItem('profileImage'); // Remove stored profile image
  profileEmail.textContent = 'Not signed in'; // Reset email display
  profileImage.src = 'https://via.placeholder.com/40'; // Reset image to default
  logoutBtn.style.display = "none"; // Hide logout button
}

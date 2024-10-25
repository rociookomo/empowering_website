document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting by default

    // Retrieve input values
    const fullName = document.getElementById('fullName').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const expiryDate = document.getElementById('expiryDate').value.trim();

    const errorMessage = document.getElementById('error-message');
    const cardNumberRegex = /^\d{16}$/; // Regex for 16 digits card number
    const cvvRegex = /^\d{3}$/; // Regex for 3 digits CVV
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // Regex for MM/YY format

    // Validation
    if (fullName === "" || !cardNumberRegex.test(cardNumber) || !cvvRegex.test(cvv) || !expiryDateRegex.test(expiryDate)) {
        errorMessage.style.display = 'block'; // Show error message
    } else {
        errorMessage.style.display = 'none'; // Hide error message

        // Simulate a successful payment with a pop-up message
        setTimeout(function() {
            alert('Congratulations, you are part of our community!');
        }, 500); // 500ms delay to simulate processing

        // Optionally clear the form after success
        document.getElementById('paymentForm').reset();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const discountElement = document.getElementById('discount');
    const totalPayableElement = document.getElementById('totalPayable');

    function calculateCartSummary() {
        let totalPrice = 0;
        let discount = 0;

        cart.forEach(item => {
            totalPrice += item.price;
        });

        const numberOfCourses = cart.length;

        // Calculate discount based on number of courses
        if (numberOfCourses === 2) {
            discount = 0.05; // 5% discount
        } else if (numberOfCourses === 3) {
            discount = 0.10; // 10% discount
        } else if (numberOfCourses >= 4) {
            discount = 0.15; // 15% discount
        }

        const discountAmount = totalPrice * discount;
        const totalPayable = totalPrice - discountAmount;

        totalPriceElement.textContent = `R${totalPrice.toFixed(2)}`;
        discountElement.textContent = `${(discount * 100).toFixed(0)}%`;
        totalPayableElement.textContent = `R${totalPayable.toFixed(2)}`;
    }

    function displayCartItems() {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        } else {
            cart.forEach((item, index) => {
                const cartItemHTML = `
                    <div class="cart-item">
                        <h4>${item.name}</h4>
                        <p>Price: R${item.price}</p>
                        <button class="remove-item-btn" data-index="${index}">Remove</button>
                    </div>
                `;
                cartItemsContainer.innerHTML += cartItemHTML;
            });
        }
    }

    function removeItemFromCart(index) {
        cart.splice(index, 1);  // Remove the item from cart
        localStorage.setItem('cart', JSON.stringify(cart));  // Update localStorage
        displayCartItems();  // Update the cart display
        calculateCartSummary();  // Recalculate totals
    }

    cartItemsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-item-btn')) {
            const index = event.target.dataset.index;
            removeItemFromCart(index);
        }
    });

    displayCartItems();  // Show cart items when the page loads
    calculateCartSummary();  // Calculate totals
});


// Existing code for cart functionality (if any)

// Process Order Button Functionality
document.getElementById('processOrderBtn').addEventListener('click', function() {
    // Display a loading message or spinner (optional)
    document.getElementById('processOrderBtn').innerHTML = 'Processing...';

    // Set a 2-second delay before redirecting to payment.html
    setTimeout(function() {
        window.location.href = 'payment.html'; // Redirect to payment.html after 2 seconds
    }, 2000); // 2000 milliseconds = 2 seconds
});

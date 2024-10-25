document.addEventListener('DOMContentLoaded', function() {
    // The array of courses, divided into six weeks and six months
    const sixWeeksCourses = [
        { name: 'Child Minding', price: 750 },
        { name: 'Cooking', price: 750 },
        { name: 'Garden Maintenance', price: 750 }
    ];

    const sixMonthsCourses = [
        { name: 'First Aid', price: 1500 },
        { name: 'Sewing', price: 1500 },
        { name: 'Landscaping', price: 1500 },
        { name: 'Life Skills', price: 1500 }
    ];

    // Get or initialize the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Helper function to generate course HTML
    function generateCourseHTML(course) {
        return `
            <div class="course-box ${course.name.toLowerCase().replace(/ /g, '-')}">
                <h3>${course.name}</h3>
                <p>Fees: R${course.price}</p>
                <div class="course-actions">
                    <button class="add-course-btn" data-course-name="${course.name}" data-course-price="${course.price}">Add Course</button>
                </div>
            </div>
        `;
    }

    // Insert the generated HTML into the containers
    const sixWeeksCourseContainer = document.getElementById('six-weeks-course-container');
    const sixMonthsCourseContainer = document.getElementById('six-month-course-container');

    sixWeeksCourses.forEach(course => {
        sixWeeksCourseContainer.innerHTML += generateCourseHTML(course);
    });

    sixMonthsCourses.forEach(course => {
        sixMonthsCourseContainer.innerHTML += generateCourseHTML(course);
    });

    // Update the cart icon quantity
    function updateCartQuantity() {
        const cartQuantity = cart.length;
        const cartQuantityElement = document.getElementById('cartQuantity');
        cartQuantityElement.textContent = cartQuantity;
    }

    // Add event listeners to each "Add Course" button
    const addCourseButtons = document.querySelectorAll('.add-course-btn');
    addCourseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const courseName = button.dataset.courseName;
            const coursePrice = button.dataset.coursePrice;

            // Check if the course is already in the cart
            let courseInCart = cart.find(item => item.name === courseName);

            if (!courseInCart) {
                // Add course to the cart if it's not already there
                cart.push({ name: courseName, price: parseFloat(coursePrice), quantity: 1 });
                localStorage.setItem('cart', JSON.stringify(cart));  // Save the updated cart to localStorage

                // Update the cart icon
                updateCartQuantity();
            } else {
                alert('This course is already in your cart.');
            }

            console.log(cart);  // Output the cart to check the added courses
        });
    });

    // Initialize the cart quantity on page load
    updateCartQuantity();
});

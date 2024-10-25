document.addEventListener('DOMContentLoaded', function () {
    const servicesLink = document.getElementById('servicesLink');
    const dropdownCourses = document.getElementById('dropdownCourses');
  
    // Toggle the dropdown on click
    servicesLink.addEventListener('click', function (event) {
      event.preventDefault();  // Prevent default link behavior
      dropdownCourses.style.display = dropdownCourses.style.display === 'block' ? 'none' : 'block';
    });
  
    // Close dropdown if clicked outside
    document.addEventListener('click', function (event) {
      if (!servicesLink.contains(event.target) && !dropdownCourses.contains(event.target)) {
        dropdownCourses.style.display = 'none';
      }
    });
  });
  
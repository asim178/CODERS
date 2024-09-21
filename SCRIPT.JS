// document.getElementById('hamburger').addEventListener('click', function() {
//   var menu = document.getElementById('navbarMenu');
//   menu.classList.toggle('active'); // Toggle the menu visibility
// });

// // Add click event listeners to dropdown toggles
// const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// dropdownToggles.forEach(toggle => {
//   toggle.addEventListener('click', function(event) {
//       event.preventDefault(); // Prevent default link behavior

//       const dropdown = this.nextElementSibling;
//       if (dropdown) {
//           dropdown.classList.toggle('show');
//       }
//   });
// });

// // Close dropdowns when clicking outside
// document.addEventListener('click', function(event) {
//   if (!event.target.closest('.navbar-menu')) {
//       dropdownToggles.forEach(toggle => {
//           const dropdown = toggle.nextElementSibling;
//           if (dropdown) {
//               dropdown.classList.remove('show'); // Hide all dropdowns
//           }
//       });
//   }
// });

// // Hover functionality for main dropdowns (only for larger screens)
// const menuItems = document.querySelectorAll('.navbar-menu li');

// menuItems.forEach(item => {
//   item.addEventListener('mouseenter', function() {
//       const dropdown = this.querySelector('.dropdown');
//       if (dropdown) {
//           dropdown.classList.add('show');
//       }
//   });

//   item.addEventListener('mouseleave', function() {
//       const dropdown = this.querySelector('.dropdown');
//       if (dropdown) {
//           dropdown.classList.remove('show');
//       }
//   });
// });

document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('navbarMenu').classList.toggle('active');
});

// Get the current URL
const currentUrl = window.location.pathname;

// Get all navbar links
const navbarLinks = document.querySelectorAll('.navbar-menu a');

// Loop through each link and check if its href matches the current URL
navbarLinks.forEach(link => {
    if (link.getAttribute('href') === currentUrl) {
        link.classList.add('active');
    }
});


function toggleMenu() {
  var sidebar = document.getElementById('sidebar');
  if (sidebar.style.width === '250px') {
      sidebar.style.width = '0';
  } else {
      sidebar.style.width = '250px';
  }
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
var dropdowns = document.getElementsByClassName("dropdown-content");
var i;
for (i = 0; i < dropdowns.length; i++) {
var openDropdown = dropdowns[i];
if (openDropdown.classList.contains('show')) {
openDropdown.classList.remove('show');
}
}
}
}
function showForm(event) {
    event.preventDefault(); // Prevents link default behavior
    const form = document.getElementById('flightForm');
    form.style.display = 'block';
}

// navbar dropdown
document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener("mouseenter", function() {
        const content = this.querySelector(".dropdown-content");
        if (content) content.style.display = "block";
      });

      dropdown.addEventListener("mouseleave", function() {
        const content = this.querySelector(".dropdown-content");
        if (content) content.style.display = "none";
      });
    });
  });

  // Form Validation
document.addEventListener('DOMContentLoaded', function () {
    const flightForm = document.getElementById('flightForm');

    flightForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        const emailValid = email.includes('@');
        const passwordHasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (!emailValid) {
            alert("Email must contain '@'.");
            return;
        }

        if (!passwordHasSpecial) {
            alert("Password must include at least one special character.");
            return;
        }

        alert("Flight search initiated for " + email);
        
    });
});
/*parallax*/
window.addEventListener("scroll", function() {
    let parallax = document.querySelector(".parallax");
    let scrollPosition = window.scrollY;
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + "px";   
});

 
window.onload = function() {
    const servicesData = [
        { icon: 'fas fa-hotel', title: 'Hotel Booking', description: 'Find the best hotels at affordable prices.' },
        { icon: 'fas fa-car', title: 'Car Rentals', description: 'Rent cars for a smooth travel experience.' },
        { icon: 'fas fa-map-marked-alt', title: 'Tour Packages', description: 'Customized travel packages for you.' }
    ];

    const servicesSection = document.createElement('section');
    servicesSection.classList.add('services');

    const heading = document.createElement('h2');
    heading.textContent = 'Our Services';
    servicesSection.appendChild(heading);

    const serviceContainer = document.createElement('div');
    serviceContainer.classList.add('service-container');
    servicesSection.appendChild(serviceContainer);

    servicesData.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');

        const icon = document.createElement('i');
        icon.className = service.icon;

        const title = document.createElement('h3');
        title.textContent = service.title;

        const description = document.createElement('p');
        description.textContent = service.description;

        serviceCard.appendChild(icon);
        serviceCard.appendChild(title);
        serviceCard.appendChild(description);
        serviceContainer.appendChild(serviceCard);
    });

    // Append Services Section First
    document.body.appendChild(servicesSection);

    // Then Call createContactForm
    createContactForm();
};

function createContactForm() {
    const section = document.createElement('section');
    section.classList.add('contact');

    const heading = document.createElement('h2');
    heading.textContent = 'Contact Us';
    section.appendChild(heading);

    const form = document.createElement('form');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.placeholder = 'Your Name';
    nameInput.required = true;

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Your Email';
    emailInput.required = true;

    const messageTextarea = document.createElement('textarea');
    messageTextarea.name = 'message';
    messageTextarea.placeholder = 'Your Message';
    messageTextarea.required = true;

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Send';

    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(messageTextarea);
    form.appendChild(submitButton);
    section.appendChild(form);

    // Append Contact Section After Services
    document.body.appendChild(section);
}





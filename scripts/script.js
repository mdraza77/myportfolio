// Get the current year
function getCurrentYear() {
  const currentYear = new Date().getFullYear(); // Set
  document.getElementById("year").textContent = currentYear;
}

document.getElementById("emailLink").addEventListener("click", function () {
  const email = "mdraza8397@gmail.com";
  // const subject = "Hello, Md Raza!";
  // const body = "I wanted to reach out to you.";
  //   const subject = "Inquiry Regarding Collaboration Opportunities";
  //   const body =
  //     "Dear Md Raza,\n\nI hope this message finds you well. I am reaching out to discuss potential collaboration opportunities and to explore how we can work together effectively. Please let me know a convenient time for us to connect.\n\nLooking forward to your response.\n\nBest regards,\n[Your Name]";

  const subject = "Collaboration/Opportunity Inquiry";
  const body = `
Dear Md Raza,

I came across your portfolio and was impressed by your work and expertise. I would like to discuss a potential collaboration or opportunity that aligns with your skills and experience.

Please let me know a convenient time for us to connect and discuss this further. I look forward to your response.

Best regards,
[Your Name]
[Your Designation/Role]
[Your Company/Organization (if applicable)]
[Your Contact Information]
`;

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
});
document.getElementById("phoneLink").addEventListener("click", function () {
  const phoneNumber = "+91 74776 50108";

  window.location.href = `tel:${phoneNumber}`;
});


document.getElementById("email-link2").addEventListener("click", function () {
  const email = "mdraza8397@gmail.com";
  // const subject = "Hello, Md Raza!";
  // const body = "I wanted to reach out to you.";
  //   const subject = "Inquiry Regarding Collaboration Opportunities";
  //   const body =
  //     "Dear Md Raza,\n\nI hope this message finds you well. I am reaching out to discuss potential collaboration opportunities and to explore how we can work together effectively. Please let me know a convenient time for us to connect.\n\nLooking forward to your response.\n\nBest regards,\n[Your Name]";

  const subject = "Collaboration/Opportunity Inquiry";
  const body = `
Dear Md Raza,

I came across your portfolio and was impressed by your work and expertise. I would like to discuss a potential collaboration or opportunity that aligns with your skills and experience.

Please let me know a convenient time for us to connect and discuss this further. I look forward to your response.

Best regards,
[Your Name]
[Your Designation/Role]
[Your Company/Organization (if applicable)]
[Your Contact Information]
`;

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
});
document.getElementById("phoneLink").addEventListener("click", function () {
  const phoneNumber = "+91 74776 50108";

  window.location.href = `tel:${phoneNumber}`;
});

// document.addEventListener('DOMContentLoaded', function() {
//   // Get all filter buttons and projects
//   const filterButtons = document.querySelectorAll('.filter-tab');
//   const projects = document.querySelectorAll('.project-card');

//   // Add click event to each filter button
//   filterButtons.forEach(button => {
//       button.addEventListener('click', () => {
//           // Remove active class from all buttons
//           filterButtons.forEach(btn => btn.classList.remove('active'));

//           // Add active class to clicked button
//           button.classList.add('active');

//           // Get the category to filter by
//           const filterCategory = button.textContent.toLowerCase().replace(' ', '');
//           // const filterCategory = button.textContent.toLowerCase();

//           // Filter projects
//           projects.forEach(project => {
//               // Show all projects if "All" is selected
//               if (filterCategory === 'all') {
//                   project.style.opacity = '1';
//                   project.style.display = 'block';
//                   setTimeout(() => {
//                       project.style.transform = 'scale(1)';
//                   }, 10);
//               } else {
//                   // Check if project matches the selected category
//                   if (project.dataset.category === filterCategory) {
//                       project.style.display = 'block';
//                       setTimeout(() => {
//                           project.style.opacity = '1';
//                           project.style.transform = 'scale(1)';
//                       }, 10);
//                   } else {
//                       project.style.opacity = '0';
//                       project.style.transform = 'scale(0.8)';
//                       setTimeout(() => {
//                           project.style.display = 'none';
//                       }, 300); // Match this with the CSS transition duration
//                   }
//               }
//           });
//       });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // Get all filter buttons and projects
  const filterButtons = document.querySelectorAll(".filter-tab");
  const projects = document.querySelectorAll(".project-card");

  // Add click event to each filter button
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      // Get the category to filter by
      const filterCategory = button.textContent.toLowerCase().replace(" ", "");

      // Filter projects
      projects.forEach((project) => {
        // Show all projects if "All" is selected
        if (filterCategory === "all") {
          project.style.opacity = "1";
          project.style.display = "block";
          setTimeout(() => {
            project.style.transform = "scale(1)";
          }, 10);
        } else {
          // Check if project matches the selected category
          if (project.dataset.category === filterCategory) {
            project.style.display = "block";
            setTimeout(() => {
              project.style.opacity = "1";
              project.style.transform = "scale(1)";
            }, 10);
          } else {
            project.style.opacity = "0";
            project.style.transform = "scale(0.8)";
            setTimeout(() => {
              project.style.display = "none";
            }, 300); // Match this with the CSS transition duration
          }
        }
      });
    });
  });
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyqbb0xRxeJjsgI6zbt_0KTpwYlebdsJAr4r2zIkaeqgcS25beOlk0lBNkG65q8lUMp/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "post", body: new FormData(form) })
    .then((response) => alert("Thank you! Form is submitted"))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

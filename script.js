// Smooth Scrolling and Active Link Handling
document.querySelectorAll(".navbar-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove 'active' class from all links
    document.querySelectorAll(".navbar-links a").forEach((link) => {
      link.classList.remove("active");
    });

    // Add 'active' class to the clicked link
    this.classList.add("active");

    // Smooth Scroll to the target section
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
    });

    // Close menu on small screens
    if (window.innerWidth <= 768) {
      navbarLinks.classList.remove("show");
      menuIcon.innerHTML = "&#9776;";
    }
  });
});
// Toggle Navbar Links and Change Icon
const menuIcon = document.querySelector(".menu-icon");
const navbarLinks = document.querySelector(".navbar-links");

menuIcon.addEventListener("click", () => {
  navbarLinks.classList.toggle("show");
  menuIcon.innerHTML = navbarLinks.classList.contains("show")
    ? "&times;"
    : "&#9776;";
});
// Get all sections and navbar links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-links li a");

// Create an intersection observer to detect visible sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const link = document.querySelector(`.navbar-links li a[href="#${id}"]`);

      if (entry.isIntersecting) {
        // Add active class to the link when the section is in the viewport
        link.classList.add("active");
      } else {
        // Remove active class from the link when the section is not in the viewport
        link.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the section is visible
  }
);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});

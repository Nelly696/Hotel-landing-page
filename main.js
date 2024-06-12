// Get references to HTML elements
const menuBtn = document.getElementById("menu-btn"); // Get the menu button element
const navLinks = document.getElementById("nav-links"); // Get the navigation links element
const menuBtnIcon = menuBtn.querySelector("i"); // Get the icon element inside the menu button

// Add event listener to menu button
menuBtn.addEventListener("click", () => {
  // Toggle the "open" class on the navigation links element
  navLinks.classList.toggle("open");

  // Check if the navigation links element has the "open" class
  const isOpen = navLinks.classList.contains("open");

  // Update the menu button icon based on the state of the navigation links
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Add event listener to navigation links
navLinks.addEventListener("click", () => {
  // Remove the "open" class from the navigation links element
  navLinks.classList.remove("open");

  // Reset the menu button icon to the default state
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Define options for ScrollReveal animations
const scrollRevealOption = {
  distance: "50px", // Distance from the viewport to trigger the animation
  origin: "bottom", // Direction of the animation (from bottom to top)
  duration: 1000, // Duration of the animation in milliseconds
};

// Header container animations
ScrollReveal().reveal(".header__container p", {
  // Animate paragraph elements
  ...scrollRevealOption, // Use the default animation options
});

ScrollReveal().reveal(".header__container h1", {
  // Animate h1 elements
  ...scrollRevealOption, // Use the default animation options
  delay: 500, // Add a 500ms delay to the animation
});

// About container animations
ScrollReveal().reveal(".about__image img", {
  // Animate image elements
  ...scrollRevealOption, // Use the default animation options
  origin: "left", // Change the animation direction to from left to right
});

ScrollReveal().reveal(".about__content .section__subheader", {
  // Animate subheader elements
  ...scrollRevealOption, // Use the default animation options
  delay: 500, // Add a 500ms delay to the animation
});

ScrollReveal().reveal(".about__content .section__header", {
  // Animate header elements
  ...scrollRevealOption, // Use the default animation options
  delay: 1000, // Add a 1000ms delay to the animation
});

ScrollReveal().reveal(".about__content .section__description", {
  // Animate description elements
  ...scrollRevealOption, // Use the default animation options
  delay: 1500, // Add a 1500ms delay to the animation
});

ScrollReveal().reveal(".about__btn", {
  // Animate button elements
  ...scrollRevealOption, // Use the default animation options
  delay: 2000, // Add a 2000ms delay to the animation
});

// Room container animations
ScrollReveal().reveal(".room__card", {
  // Animate card elements
  ...scrollRevealOption, // Use the default animation options
  interval: 500, // Add a 500ms interval between animations
});

// Service container animations
ScrollReveal().reveal(".service__list li", {
  // Animate list item elements
  ...scrollRevealOption, // Use the default animation options
  interval: 500, // Add a 500ms interval between animations
  origin: "right", // Change the animation direction to from right to left
});

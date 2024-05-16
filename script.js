function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-250px";
  }
}

function remove() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-250px";
  }
}
document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

let menulist = document.getElementById("menuList");
menulist.style.maxHeight = "355";
function toggleMenu() {
  if (menulist.style.maxHeight == "0px") {
    menulist.style.maxHeight = "355px";
  } else {
    toggle();
  }
}
function toggle() {
  menulist.style.maxHeight = "0px";
}
// Initialize the Swiper plugin for the slide content
var swiper = new Swiper(".slide-content", {
  // Set the number of slides to be displayed at once
  slidesPerView: 4,

  // Set the space between slides
  spaceBetween: 30,

  // Define breakpoints for different screen sizes
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 4,
    },
  },

  // Enable looping of slides
  loop: true,

  // Enable grab cursor
  grabCursor: true,

  // Enable keyboard navigation
  keyboard: {
    enabled: true,
  },

  // Enable free mode
  freeMode: true,

  // Enable pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Enable navigation buttons
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Get the slide content container
const swiperContainer = document.querySelector(".slide-content");

// Add event listener for mouse enter event
swiperContainer.addEventListener("mouseenter", () => {
  // Stop the autoplay when mouse enters the container
  swiper.autoplay.stop();
});

// Add event listener for mouse leave event
swiperContainer.addEventListener("mouseleave", () => {
  // Start the autoplay when mouse leaves the container
  swiper.autoplay.start();
});

// count up animation code below
// Create a new Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Check if the target element is intersecting with the viewport
    if (entry.isIntersecting) {
      // Perform actions when the target element becomes visible
      const counters = document.querySelectorAll(".count");
      const speed = 200; // Adjust speed as needed

      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-count"));
        let count = 0;

        const updateCount = () => {
          const increment = target / speed;

          count += increment;
          if (count < target) {
            counter.textContent = Math.ceil(count);
            setTimeout(updateCount, 10);
          } else {
            counter.textContent = target;
          }
        };

        updateCount();
      });
      // Unobserve the target element to prevent multiple executions
      observer.unobserve(entry.target);
    }
  });
});

// Select the target element you want to observe
const targetElement = document.querySelector(".banner-card");

// Start observing the target element
observer.observe(targetElement);

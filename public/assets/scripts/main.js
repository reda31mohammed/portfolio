// DOM Elements
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".btn");
const navLinks = document.querySelectorAll(".navbar-nav a");
const sections = document.querySelectorAll("section");
const header = document.querySelector("header");
const contactForm = document.querySelector(".contact-form");
const skillSpans = document.querySelectorAll(".skills span");

// Mobile Menu Toggle
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
    navbar.classList.remove("active");
    menuBtn.classList.remove("active");
  }
});

// Smooth scrolling for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    navbar.classList.remove("active");
    menuBtn.classList.remove("active");

    window.scrollTo({
      top: targetSection.offsetTop - header.offsetHeight,
      behavior: "smooth",
    });
  });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
    // Scroll Down
    header.classList.remove("scroll-up");
    header.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    header.classList.contains("scroll-down")
  ) {
    // Scroll Up
    header.classList.remove("scroll-down");
    header.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

// Intersection Observer for animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe sections for animation
sections.forEach((section) => {
  observer.observe(section);
});

// Animate skills on scroll
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      skillSpans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add("animate");
        }, index * 200);
      });
      skillsObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

const skillsSection = document.querySelector(".skills");
if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

// Form submission handling
if (contactForm) {
  // Initialize EmailJS
  emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); // You'll need to replace this with your actual EmailJS public key

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const formProps = Object.fromEntries(formData);

    // Add loading state
    const submitBtn = contactForm.querySelector(".submit-btn");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        "YOUR_EMAILJS_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_EMAILJS_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          to_email: "redamohammed19988@gmail.com",
          from_name: formProps.name,
          from_email: formProps.email,
          message: formProps.message,
        }
      );

      // Show success message
      const successMessage = document.createElement("div");
      successMessage.className = "success-message";
      successMessage.textContent = "Message sent successfully!";
      contactForm.appendChild(successMessage);

      // Reset form
      contactForm.reset();

      // Remove success message after 3 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      // Show error message
      const errorMessage = document.createElement("div");
      errorMessage.className = "error-message";
      errorMessage.textContent = "Failed to send message. Please try again.";
      contactForm.appendChild(errorMessage);

      // Remove error message after 3 seconds
      setTimeout(() => {
        errorMessage.remove();
      }, 3000);
    } finally {
      // Reset button state
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Typing effect for hero section
const heroTitle = document.querySelector(".hero h1");
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = "";

  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };

  // Start typing effect when section is in view
  const heroObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      typeWriter();
      heroObserver.unobserve(entries[0].target);
    }
  }, observerOptions);

  heroObserver.observe(heroTitle);
}

// Add CSS classes for animations
document.head.insertAdjacentHTML(
  "beforeend",
  `
    <style>
        .scroll-down {
            transform: translateY(-100%);
            transition: transform 0.3s ease-in-out;
        }
        
        .scroll-up {
            transform: translateY(0);
            transition: transform 0.3s ease-in-out;
        }
        
        .success-message {
            background-color: #4CAF50;
            color: white;
            padding: 1rem;
            border-radius: 4px;
            margin-top: 1rem;
        }
        
        .error-message {
            background-color: #f44336;
            color: white;
            padding: 1rem;
            border-radius: 4px;
            margin-top: 1rem;
        }
        
        .skills span {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
        }
        
        .skills span.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        section {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }
        
        section.animate {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
`
);

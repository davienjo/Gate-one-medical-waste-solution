document.addEventListener("DOMContentLoaded", () => {
  // -------- TESTIMONIALS SLIDER --------
  const testimonialTrack = document.querySelector(".testimonial-list");
  const testimonialSlides = document.querySelectorAll(".testimonial-item");
  let testimonialIndex = 0;

  if (testimonialTrack && testimonialSlides.length > 0) {
    setInterval(() => {
      testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
      testimonialTrack.style.transform = `translateX(-${testimonialIndex * 100}%)`;
    }, 4000);
  }

  // -------- PRODUCTS SLIDER --------
  const productTrack = document.querySelector(".product-track");
  const productSlides = document.querySelectorAll(".product-item");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");
  let productIndex = 0;

  if (productTrack && productSlides.length > 0 && prevBtn && nextBtn) {
    function showProductSlide(i) {
      if (i < 0) productIndex = productSlides.length - 1;
      else if (i >= productSlides.length) productIndex = 0;
      else productIndex = i;

      productTrack.style.transform = `translateX(-${productIndex * 100}%)`;
    }

    prevBtn.addEventListener("click", () => showProductSlide(productIndex - 1));
    nextBtn.addEventListener("click", () => showProductSlide(productIndex + 1));

    setInterval(() => showProductSlide(productIndex + 1), 5000);
  }

  // -------- HAMBURGER MENU --------
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".nav-overlay");

  if (hamburger && navLinks && overlay) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
    });
  }
});

// form submit
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        // Show success message with fade-in effect
        successMsg.classList.add("show");
        form.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
          successMsg.classList.remove("show");
        }, 5000);
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    })
    .catch((error) => {
      alert("There was an error submitting the form. Please try again.");
      console.error(error);
    });
});

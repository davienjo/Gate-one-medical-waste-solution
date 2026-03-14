document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------
  // GSAP + LENIS SMOOTH SCROLL
  // ------------------------------
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // ------------------------------
  // HERO SECTION ANIMATION
  // ------------------------------
  const hero = gsap.timeline();

  hero.from(".hero-section h1", {
    x: 400,
    duration: 2,
    opacity: 0,
    ease: "power3.out",
  });

  hero.from(
    ".hero-section p",
    {
      x: -400,
      duration: 2,
      opacity: 0,
      ease: "power3.out",
    },
    "<",
  );

  hero.from(".hero-links", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    ease: "power3.out",
  });

  hero.from(
    ".navbar",
    {
      y: -30,
      duration: 1,
      opacity: 0,
      ease: "power3.out",
    },
    "-=1",
  );

  // ------------------------------
  // REUSABLE SLIDER FUNCTION
  // ------------------------------
  function createSlider(track, slides, prevBtn, nextBtn, intervalTime) {
    if (!track || slides.length === 0) return;

    let index = 0;

    function showSlide(i) {
      const total = slides.length;

      if (i < 0) index = total - 1;
      else if (i >= total) index = 0;
      else index = i;

      track.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn?.addEventListener("click", () => showSlide(index - 1));
    nextBtn?.addEventListener("click", () => showSlide(index + 1));

    let interval = setInterval(() => showSlide(index + 1), intervalTime);

    const sliderContainer = track.parentElement;

    sliderContainer.addEventListener("mouseenter", () => {
      clearInterval(interval);
    });

    sliderContainer.addEventListener("mouseleave", () => {
      interval = setInterval(() => showSlide(index + 1), intervalTime);
    });
  }

  // ------------------------------
  // TESTIMONIAL SLIDER
  // ------------------------------
  createSlider(
    document.querySelector(".testimonial-list"),
    document.querySelectorAll(".testimonial-item"),
    document.querySelector(".testimonial-arrow.prev"),
    document.querySelector(".testimonial-arrow.next"),
    3000,
  );

  // ------------------------------
  // PRODUCT SLIDER
  // ------------------------------
  createSlider(
    document.querySelector(".product-track"),
    document.querySelectorAll(".product-item"),
    document.querySelector(".slider-btn.prev"),
    document.querySelector(".slider-btn.next"),
    5000,
  );

  // ------------------------------
  // HAMBURGER MENU
  // ------------------------------
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".nav-overlay");

  if (hamburger && navLinks && overlay) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("no-scroll");
    });

    overlay.addEventListener("click", () => {
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  }

  // ------------------------------
  // CONTACT FORM SUBMISSION
  // ------------------------------
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  if (form && successMsg) {
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
            successMsg.classList.add("show");
            form.reset();

            setTimeout(() => {
              successMsg.classList.remove("show");
            }, 5000);
          } else {
            alert("There was an error submitting the form. Please try again.");
          }
        })

        .catch((error) => {
          console.error(error);
          alert("There was an error submitting the form. Please try again.");
        });
    });
  }
});

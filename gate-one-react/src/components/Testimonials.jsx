import "./Testimonials.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import Physician from "../assets/Physician.webp";
import aidDoctor from "../assets/africa-humanitarian-aid-doctor.webp";
import Nurse from "../assets/nurse.webp";

function Testimonials() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(1); // start at 1 (important for clone system)
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      img: Nurse,
      name: "Mr. Peter Otieno",
      role: "Nurse",
      text: "We no longer worry about sharps or pharmaceutical waste.",
    },
    {
      img: Physician,
      name: "Dr. Jane Mwangi",
      role: "Physician",
      text: "Gate One has made our hospital's waste management completely safe.",
    },
    {
      img: aidDoctor,
      name: "Mr. Hassan",
      role: "Aid Doctor",
      text: "Their eco-friendly disposal methods give us peace of mind.",
    },
  ];

  // CLONES for infinite effect
  const slides = [
    testimonials[testimonials.length - 1], // last clone (0 index)
    ...testimonials,
    testimonials[0], // first clone (last index)
  ];

  // =========================
  // GSAP SLIDE ANIMATION
  // =========================
  useEffect(() => {
    gsap.to(trackRef.current, {
      xPercent: -index * 100,
      duration: 0.8,
      ease: "power3.out",
      onComplete: handleLoopFix,
    });
  }, [index]);

  // =========================
  // LOOP RESET LOGIC
  // =========================
  const handleLoopFix = () => {
    setIsAnimating(false);

    // if at last clone → jump to real first
    if (index === slides.length - 1) {
      gsap.set(trackRef.current, { xPercent: -100 });
      setIndex(1);
    }

    // if at first clone → jump to real last
    if (index === 0) {
      gsap.set(trackRef.current, {
        xPercent: -(slides.length - 2) * 100,
      });
      setIndex(slides.length - 2);
    }
  };

  // =========================
  // NAVIGATION
  // =========================
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => prev - 1);
  };

  // =========================
  // AUTO PLAY
  // =========================
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>

      <div className="slider">
        <button className="testimonial-arrow prev" onClick={prevSlide}>
          &lt;
        </button>

        <div className="testimonial-list" ref={trackRef}>
          {slides.map((t, i) => (
            <div className="testimonial-item" key={i}>
              <div className="testimonial-img">
                <img src={t.img} alt={t.name} />
              </div>

              <p>{t.text}</p>
              <h4>{t.name}</h4>
              <p>{t.role}</p>
            </div>
          ))}
        </div>

        <button className="testimonial-arrow next" onClick={nextSlide}>
          &gt;
        </button>
      </div>

      {/* DOTS (real slides only) */}
      <div className="dots">
        {testimonials.map((_, i) => {
          const realIndex =
            index === 0
              ? testimonials.length - 1
              : index === slides.length - 1
                ? 0
                : index - 1;

          return (
            <span
              key={i}
              className={realIndex === i ? "dot active" : "dot"}
              onClick={() => setIndex(i + 1)}
            />
          );
        })}
      </div>

      <p className="testimonial-end">
        Trusted by healthcare facilities across Kenya.
      </p>

      <div id="testimonial-btn">
        <Link to="/contact" className="testimonial-btn">
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default Testimonials;

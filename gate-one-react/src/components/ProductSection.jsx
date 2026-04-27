import "./ProductSection.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import Sharps from "../assets/sharps.webp";
import wasteBags from "../assets/coded-waste-bags.webp";
import wasteContainers from "../assets/pharmaceutical-waste-containers.webp";
import chemicalWaste from "../assets/Chemical-waste-1.webp";
import Others from "../assets/other-waste-tools.webp";

function ProductsSection() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(1); // start at 1 (important)

  const products = [
    {
      img: Sharps,
      title: "Sharp Safety Boxes",
      desc: "Safe, durable containers for needles and sharps.",
    },
    {
      img: wasteBags,
      title: "Color-Coded Waste Bags",
      desc: "Segregate medical waste safely and efficiently.",
    },
    {
      img: wasteContainers,
      title: "Pharmaceutical Waste Containers",
      desc: "Secure disposal for expired medicines.",
    },
    {
      img: chemicalWaste,
      title: "Chemical Waste Kits",
      desc: "Safe handling of hazardous chemical waste.",
    },
    {
      img: Others,
      title: "Other Medical Waste Tools",
      desc: "Full compliance waste solutions.",
    },
  ];

  // =========================
  // CLONES (infinite loop trick)
  // =========================
  const slides = [
    products[products.length - 1], // clone last
    ...products,
    products[0], // clone first
  ];

  // =========================
  // GSAP SLIDE
  // =========================
  useEffect(() => {
    gsap.to(trackRef.current, {
      xPercent: -index * 100,
      duration: 0.9,
      ease: "power3.out",
      onComplete: handleLoopFix,
    });
  }, [index]);

  // =========================
  // LOOP RESET LOGIC
  // =========================
  const handleLoopFix = () => {
    // If at last clone → jump to real first
    if (index === slides.length - 1) {
      gsap.set(trackRef.current, { xPercent: -100 });
      setIndex(1);
    }

    // If at first clone → jump to real last
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
  const nextSlide = () => setIndex((prev) => prev + 1);
  const prevSlide = () => setIndex((prev) => prev - 1);

  // =========================
  // AUTO PLAY (optional but Netflix-like)
  // =========================
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="products">
      <div className="products-info">
        <h2>Quality Medical Waste Products</h2>
        <p>
          Safe, compliant medical waste solutions for healthcare facilities.
        </p>
      </div>

      <div className="product-slider">
        <button className="slider-btn prev" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="product-track" ref={trackRef}>
          {slides.map((product, i) => (
            <div className="product-item" key={i}>
              <img src={product.img} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
            </div>
          ))}
        </div>

        <button className="slider-btn next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default ProductsSection;

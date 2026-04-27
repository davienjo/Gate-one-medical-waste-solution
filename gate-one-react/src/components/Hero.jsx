import "./Hero.css";
import heroBg from "../assets/hero-bg.webp";
import { useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

function Hero() {
 useEffect(() => {
   const ctx = gsap.context(() => {
     const hero = gsap.timeline();

     hero.from(".hero-title", {
       x: 400,
       opacity: 0,
       duration: 1.5,
       ease: "power4.out",
     });

     hero.from(
       ".hero-section p",
       {
         x: -200,
         opacity: 0,
         duration: 1.5,
         ease: "power4.out",
       },
       "-=0.5",
     );

     hero.from(
       ".hero-links ",
       {
         y: 15,
         opacity: 0,
         duration: 0.8,
         stagger: 0.2,
         ease: "power3.out",
       },
       "-=0.4",
     );
   });

   return () => ctx.revert();
 }, []);

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(31,41,55,0.7), rgba(31,41,55,0.7)), url(${heroBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="hero-title">Gate One Medical Waste Solution</h1>

      <p>
        Reliable medical waste management solutions designed to meet strict
        healthcare regulations. From collection to final disposal, we ensure
        safety, compliance, and efficiency at every step.
      </p>

      <div className="hero-links">
        <a href="#process-section">How it works</a>
        <Link to="/Contact">Request a service</Link>
      </div>
    </section>
  );
}

export default Hero;

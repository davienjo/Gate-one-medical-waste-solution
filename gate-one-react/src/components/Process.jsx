import "./Process.css";
import step1 from "../assets/numbers/01.svg";
import step2 from "../assets/numbers/02.svg";
import step3 from "../assets/numbers/03.svg";
import step4 from "../assets/numbers/04.svg";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Process() {
  useEffect(() => {
    const timeline = document.querySelector(".timeline");

    if (!timeline) return;

    
    gsap.to(timeline, {
      "--line-scale": 1,
      ease: "none",
      scrollTrigger: {
        trigger: timeline,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

  
    ScrollTrigger.create({
      trigger: timeline,
      start: "top 80%",
      end: "bottom 50%",
      scrub: true,

      onUpdate: (self) => {
        const progress = self.progress;

        const items = gsap.utils.toArray(".container");

        items.forEach((el, i) => {
          const stepPoint = i / (items.length - 1);

          if (progress >= stepPoint) {
            el.classList.add("active");
          } else {
            el.classList.remove("active");
          }
        });
      },
    });

 
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  
  return (
    <section className="process-section" id="process-section">
      <h2>How our process works</h2>
      <p className="process-intro">
        Our process is simple, safe, and fully compliant
      </p>

      <div className="timeline">
        <div className="container left-container">
          <img src={step1} alt="step 1" />
          <div className="process-step">
            <span className="process-icon">
              <i className="fa-solid fa-phone"></i>
            </span>
            <div>
              <h3>Request Pickup</h3>
              <p>Contact us to schedule a medical waste pickup</p>
            </div>
            <span className="left-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <img src={step2} alt="step 2" />
          <div className="process-step">
            <span className="process-icon">
              <i className="fa-solid fa-calendar-check"></i>
            </span>
            <div>
              <h3>Schedule Time</h3>
              <p>We schedule a convenient time for collection</p>
            </div>
            <span className="right-arrow"></span>
          </div>
        </div>

        <div className="container left-container">
          <img src={step3} alt="step 3" />
          <div className="process-step">
            <span className="process-icon">
              <i className="fa-solid fa-truck-medical"></i>
            </span>
            <div>
              <h3>Safe Collection</h3>
              <p>Our trained team collects and transports waste safely.</p>
            </div>
            <span className="left-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <img src={step4} alt="step 4" />
          <div className="process-step">
            <span className="process-icon">
              <i className="fa-solid fa-recycle"></i>
            </span>
            <div>
              <h3>Proper Disposal</h3>
              <p>Waste is treated and disposed according to regulations.</p>
            </div>
            <span className="right-arrow"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;

import safeRemoval from "../assets/Safe-removal.webp";
import Pharmaceuticals from "../assets/Pharmaceutical.webp";
import chemicalWaste from "../assets/chemical-waste.webp";
import Pickup from "../assets/gate-one-pickup.webp";
import { Link } from "react-router-dom";

import "./Services.css";

const servicesData = [
  {
    img: safeRemoval,
    title: "Healthcare Waste Collection",
    desc: "Safe removal of all types of medical waste from clinics, hospitals, and labs.",
  },
  {
    img: Pharmaceuticals,
    title: "Pharmaceutical Waste Management",
    desc: "Secure disposal of expired or unused medicines.",
  },
  {
    img: chemicalWaste,
    title: "Chemical Waste Disposal",
    desc: "Secure disposal of expired or unused chemicals and hazardous materials.",
  },
  {
    img: Pickup,
    title: "Transportation",
    desc: "Safe and compliant transport of medical waste from your facility to our disposal sites.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <p>
        Gate One’s dedicated team is committed to providing safe, reliable, and
        eco-friendly medical waste solutions for healthcare facilities. Our
        services include:
      </p>

      <div className="services-list">
        {servicesData.map((service, index) => (
          <div className="services-item" key={index}>
            <img
              src={service.img}
              alt={service.title}
              className="service-img"
              loading="lazy"
            />

            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

      {/* More Info */}
      <div className="more-info">
        <p>
          We also provide a range of high-quality medical waste products, from
          sharps boxes to color-coded waste bags, designed to make safe disposal
          simple, reliable, and compliant.
        </p>

        <div className="service-btn">
          <Link className="view-btn" to="/products">
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;

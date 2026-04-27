
import "./About.css";
import {Link} from "react-router-dom";

function About() {
  return(
<section className="about-us">
        <h2>About Us</h2>
        <p>
          We are Nairobi-based medical waste experts, providing safe, reliable,
          and eco-friendly collection, transportation, and disposal of
          healthcare waste. From sharps to pharmaceuticals and chemicals, we
          ensure every step follows strict safety and environmental standards.
        </p>

        <p>
          <strong>Mission:</strong> Protecting people, communities, and the
          environment through safe and compliant medical waste solutions.
        </p>

        <p className="values">
          <strong>Values:</strong> Safety • Compliance • Eco-Responsibility •
          Reliability • Integrity
        </p>
        <Link to ="/about">Learn More</Link>
      </section>

  );
}
      
    export default About;
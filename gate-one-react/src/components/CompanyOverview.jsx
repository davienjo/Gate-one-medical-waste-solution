
import "./CompanyOverview.css";
import aboutImg from "../assets/gate-one-img.webp";

function CompanyOverview(){
  return(
<section className="company-overview">
  <div className="company-info">
    <h2>About Gate One Medical Waste Solutions</h2>
    <p>
      Based in Nairobi, Gate One has been providing safe, reliable, and
      eco-friendly medical waste management services to healthcare facilities.
      From clinics to large hospitals, we handle sharps, pharmaceutical,
      chemical, and other hazardous waste with professionalism and care
    </p>

    <h2>Company Background</h2>
    <p>
      Gate One was created to address the growing need for safe and compliant
      medical waste disposal in Kenya. Our team is trained to handle all types
      of regulated waste while minimizing environmental impact.
    </p>

    <h2>Our Mission, Vision and Values</h2>
    <p>
      <strong>Mission:</strong> To provide safe, reliable, and eco-friendly
      medical waste management services that protect people, communities, and
      the environment.
    </p>
    <p>
      <strong>Vision:</strong> To be the leading provider of medical waste
      solutions in Kenya and beyond.
    </p>
    <p>
      <strong>Values:</strong> Safety • Compliance • Eco-Responsibility •
      Reliability • Integrity
    </p>
  </div>
  <div className="about-img">
    <img src={aboutImg} alt="Gate-One-banner" loading="lazy" />
  </div>
</section>
  );
}

export default CompanyOverview;
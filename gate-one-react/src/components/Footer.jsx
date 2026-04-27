import "./Footer.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    
      <section className="footer-section">
        <div className="footer-overview">
          
          {/* links */}

          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* Contact-Info */}

          <div className="contact-info">
            <p>123 Kabete, Nairobi, Kenya</p>
            <p>
              Phone: <a href="tel:+254725818260">0725-818260</a>
            </p>
          </div>

          {/* logo */}
          <div className="footer-img">
            <img className="footer-logo" src={logo} alt="footer-logo" />
          </div>
        </div>

        

        {/* copyright */}
        <p className="copyright">
          &copy; 2026 Gate One Waste Solution. All rights reserved.
        </p>
      </section>
    
  );
}

export default Footer;

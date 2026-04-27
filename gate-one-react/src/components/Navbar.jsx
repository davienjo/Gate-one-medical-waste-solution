import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // =========================
  // CLOSE MENU ON SCROLL
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
         
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li className="mobile-only">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* CONTACT BUTTON */}
        <Link className="nav-end desktop-only" to="/contact">
          Contact
        </Link>

        {/* HAMBURGER */}
        <i
          className="fa-solid fa-bars hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>
      </nav>

      {/* OVERLAY */}
      <div
        className={`nav-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </header>
  );
}

export default Navbar;

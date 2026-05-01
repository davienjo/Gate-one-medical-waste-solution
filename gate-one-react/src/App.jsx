
import {Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";

import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
<>
<ScrollToTop />
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
     <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

<Footer />
<WhatsAppButton />
    </>
  );
}

export default App;
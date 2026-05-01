
import "./Contacts.css";
import { useState } from "react";

function Contacts(){
  
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[message, setMessage]= useState("");

const[isSubmitted, setIsSubmitted]= useState(false)

  function handleSubmit(e) {
    e.preventDefault()
  
    setIsSubmitted(true)


    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  
    alert("Message sent successfully");

setName("");
setEmail("");
setMessage("");
  } 
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>
        Have questions or need assistance? Reach out to our team using the
        information below.
      </p>

      <form onSubmit={handleSubmit} className="contact-form" id="contactForm">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="example@mail.com"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            cols="20"
            rows="5"
            placeholder="Write Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>

        {isSubmitted && <p id="successMsg">Message sent successfully!</p>}

        <input type="hidden" name="_captcha" value="false" />
      </form>

      <div className="contact-info">
        <div className="contact-item">
          <p>
            Phone: <a href="tel:+254725818260">0725-818260</a>
          </p>
        </div>

        <div className="contact-item">
          <p>Email:pgngugi@gmail.com</p>
        </div>

        <div className="contact-item">
          <p>123 Kabete, Nairobi, Kenya</p>
        </div>
      </div>
    </section>
  );
}

export default Contacts
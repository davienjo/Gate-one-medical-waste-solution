import "./Contacts.css";

function Contacts(){
  return(
  <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? Reach out to our team using the
          information below.
        </p>

        <form
          className="contact-form"
          id="contactForm"
          action="https://formsubmit.co/90c790c2a0f1aec9265573e028e181dd"
          method="POST"
        >
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              placeholder="example@mail.com"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              cols="20"
              rows="5"
              placeholder="Write Your Message"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>

          <p id="successMsg">Message sent successfully!</p>

          
          <input type="hidden" name="_captcha" value="false" />
        </form>

        <div className="contact-info">
          <div className="contact-item">
            <p>Phone: <a href="tel:+254725818260">0725-818260</a></p>
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
import "./CTA.css";
import {Link} from "react-router-dom";

function CTA(){
   return (
     <section className="cta">
       <h2>Ready to schedule a pickup?</h2>
       <p>
         Contact our team today to arrange safe and reliable medical waste
         management services for your facility.
       </p>

       <Link className="cta-link" to="/contact">
         Contact us
       </Link>
     </section>
   );
}
export default CTA;
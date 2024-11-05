import React from 'react';
import axios from 'axios';
import Telesvg from '../assets/Desktop bilder/telesvg.svg';
import Chattsvg from '../assets/Desktop bilder/chattsvg.svg';
import Pilner from '../assets/Desktop bilder/pilner.svg';
import Pilupp from '../assets/Desktop bilder/pilupp.svg';


const Faqsection = () => {
  return (
    <section className="faq-section">
    <div className="container">

       <div className="faq-left-column">
        <h2>Any questions?<br/>Check out the FAQs</h2>
        <p>Still have unanswered questions and need to get in touch?</p>

        <div className="contact-options">

          <div className="contact-box">
            <img src={Telesvg} />
            <p><strong>Still have questions?</strong><br/><a href="#">Contact us</a></p>
          </div>

          <div className="contact-box">
            <img src={Chattsvg} />
            <p><strong>Don't like phone calls?</strong><br/><a href="#">Contact us</a></p>
          </div>
        </div>
       </div>

        <div className="faq-right-column">

          <div className="faq-item">
            <div className="faq-question">
              <p>Is any of my personal information stored in the App?</p>
              <img src={Pilner} />
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>What formats can I download my transaction history in?</p>
              <img src={Pilner} />
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Can I schedule future transfers?</p>
              <img src={Pilupp} />
            </div>
            <div className="faq-answer">
              <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum dui accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>When can I use Banking App services?</p>
              <img src={Pilner} />
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Can i create my own password that is easy for me to remember?</p>
              <img src={Pilner} />
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>What happens if I forget or lose my password?</p>
              <img src={Pilner} />
            </div>
          </div>
        </div>

    </div>
  </section>
  )
}

export default Faqsection
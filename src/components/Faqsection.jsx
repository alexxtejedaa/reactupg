import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Telesvg from '../assets/Desktop bilder/telesvg.svg';
import Chattsvg from '../assets/Desktop bilder/chattsvg.svg';
import Pilner from '../assets/Desktop bilder/pilner.svg';
import Pilupp from '../assets/Desktop bilder/pilupp.svg';


const Faqsection = () => {
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const getFaqs = async () => {
      try {
        const res = await axios.get("https://win24-assignment.azurewebsites.net/api/faq");
        setFaqs(res.data);
        setIsLoading(false);
      } catch (err) {
        setError('Något gick fel när vi hämtade FAQs')
        setIsLoading(false);
      }
    };
    getFaqs();

  }, []);

  if (isLoading) {
    return <div>Loading FAQs...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

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
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(faq.id)}>
                <p>{faq.title}</p>
                <img src={openFaq === faq.id ? Pilupp : Pilner} />
              </div>
              {openFaq === faq.id && (
                <div className="faq-answer">
                  <p>{faq.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqsection
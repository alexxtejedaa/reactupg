import React, {useState} from 'react';
import axios from 'axios';
import Notis from '../assets/Desktop bilder/notis.svg';
import Brevsvg from '../assets/Desktop bilder/brevsvg.svg';


const Subscribewrapper = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter a valid email adress');
      return;
    }

    try {
      const response = await axios.post('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        email: email
      });

      if (response.status === 200) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setMessage('Something went wrong, please try again later');
    }
  };

return (
    <div className="subscribe-wrapper">
      <section className="subscribe-section">
        <div className="container">

          <div className="subscribe-left">
            <img src={Notis} alt="Notification Icon" />
            <p>Subscribe to our newsletter to stay<br />informed about latest updates</p>
          </div>

          <div className="subscribe-right">
            <form className="subscribe-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email"></label>
                <img src={Brevsvg} alt="Email Icon" />
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              <button type="submit">Subscribe</button>
            </form>
            {message && <p className="form-message">{message}</p>}
          </div>

        </div>
      </section>
    </div>
  );
}

export default Subscribewrapper
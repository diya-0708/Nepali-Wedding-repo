import React from 'react';
import './Contact.css'
import callicon from '../../assets/Call-icon.jpg';
import emailicon from '../../assets/email-icon.png';
import locationicon from '../../assets/location-icon.jpg';
import white_arror from '../../assets/white-arrow.png'

const Contact = () => {

   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "110da56a-174f-4133-b776-8dd9a36e03e8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
<div>
  <h1 className='contact-me'>Get In Touch With Our Team</h1> {/* ⬅️ Moved here */}
  <div className="contact-social-section">
  <h3 className="contact-social-title">Connect with us</h3>
  <div className="contact-social-icons">
    <a href="https://www.facebook.com/search/top?q=amora%20event" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook-f"></i> Facebook
    </a>
    <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i> Instagram
    </a>
    <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-whatsapp"></i> WhatsApp
    </a>
  </div>
</div>


    <div className='contact'>
    <div className='contact-col'>
        <h3>Send us a message</h3>
        <p>Feel free to reach out through contact form or fin our contact 
           information below.Your feedback, questions,and suggestions are important
            to us as we strive to provide exceptional service.
        </p>
        <ul>
            <li><img src={callicon} alt=''/>Contact@AmoraEvent.design</li>
            <li><img src={emailicon} alt=''/>+1 123-456-7980</li>
            <li><img src={locationicon} alt=''/>77 Massachuntes Ave, Cambride <br/>MA 02345,Kathmandu</li>
        </ul>
    </div>


    <div className='contact-col'>
      <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type='text' name='name' placeholder='Enter your name'
          required />
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your phone'
            required/>
            <label>Write your message here</label>
            <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit<img src={white_arror}/></button>
      </form>
      <span>{result}</span>
    </div>   
    </div>


    
    </div>

  );
}

export default Contact;

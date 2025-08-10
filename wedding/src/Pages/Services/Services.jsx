import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Ring from '../../assets/ring-first.jpg';
import destination from '../../assets/small-wedding-decor copy.jpg';
import Mehendi from '../../assets/mehandi.jpg';
import invitation from '../../assets/invitation card.webp';
import photo from '../../assets/Photography.webp';
import img_17 from '../../assets/IMG_3417.jpg';
import img_18 from '../../assets/IMG_3418.jpg';
import img_19 from '../../assets/IMG_3419.jpg';
import img_20 from '../../assets/IMG_3420.jpg';
// import img_21 from '../../assets/IMG_3421.jpg';
import img_22 from '../../assets/IMG_3422.jpg';
import img_23 from '../../assets/IMG_3423.jpg';
import img_24 from '../../assets/IMG_3424.jpg';
import img_25 from '../../assets/IMG_3425.jpg';
import img_27 from '../../assets/IMG_3427.jpg';
import img_28 from '../../assets/IMG_3428.jpg';
import img_29 from '../../assets/IMG_3429.jpg';
import img_30 from '../../assets/IMG_3430.jpg';


import './Services.css'; // Link to the CSS file

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Our Services</h2>
        <p className="tagline">Create memories</p>
        <p className="description">
          We pride ourselves on delivering exceptional event planning and management services in Nepal.
          Our dedicated team of professionals ensures every detail of your event is meticulously planned 
          and executed, making your special occasions truly memorable. Explore our range of services 
          designed to cater to your unique needs.
        </p>
      </div>


      <div className="services-grid">
        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <img src={Ring} alt="Decoration Icon" />
          <span className='first'>Full Wedding Planning
          <span className='trianglee'>▼</span>      
          </span>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <img src={destination} alt="Logistic Icon" />
          <span className='second'>Destination Weddings
           <span className='triangleEE'>▼</span>
           </span>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <img src={Mehendi} alt="Vendor Icon" />
          <span className='third'>Bridal Entry Setup
           <span className='triangleE'>▼</span>
           </span>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <img src={invitation} alt="Vendor Icon" />
          <span className='fourth'>Invitation Design & Printing
           <span className='triangle'>▼</span>
           </span>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <img src={photo} alt="Vendor Icon" />
          <span className='fifth'>Photography & Videography
           <span className='triangle'>▼</span>
           </span>
        </div>

        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <img src={Mehendi} alt="Hospitality Icon" />
          <span className='sixth'>Mehendi & Sangeet Planning
           <span className='triangle'>▼</span>
            </span>
        </div>
      </div>

       <div className="services-headerr">
        <h2>Wedding Designs</h2>
        <p className="tagline">Check out some of our best-selling designs</p>
        <p className="descriptionn">
          From stunning floral arrangements and thematic décor<br/>
           to innovative lighting solutions and stylish backdrops,<br/>
            our designs are tailored to make your event truly<br/>
             memorable.
        </p>
      </div>

      <div className='services-image'>
      <img src={img_17} alt=''/>
      <img src={img_18} alt=''/>
      <img src={img_19} alt=''/>
      <img src={img_20} alt=''/>
      {/* <img src={img_21} alt=''/> */}
      <img src={img_22} alt=''/>
      <img src={img_23} alt=''/>
      <img src={img_24} alt=''/>
      <img src={img_25} alt=''/>
      <img src={img_27} alt=''/>
      <img src={img_28} alt=''/>
      <img src={img_29} alt=''/>
      <img src={img_30} alt=''/>
      </div>
    </section>
  );
};

export default Services;

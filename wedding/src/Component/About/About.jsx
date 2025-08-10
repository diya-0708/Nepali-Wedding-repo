// import React from 'react';
// import './About.css'
// // import card from '../../assets/cardpic.jpg';
// const About = () => {
//   return (
//     <div className='card'>
//     {/* <img className='card-image' src={card} alt='profile picture'></img> */}
//     <h2 className='card-main'>About</h2>
//     <h1 className= 'card-title'>AmoraDesigns</h1>
//     <p className='card-text'>Founded in 2021, Amora Designs was born from a passion for creativity, elegance, and unforgettable experiences.
//           What began as a dream to bring refined aesthetics to life has blossomed into a full-fledged design house
//           specializing in event styling, wedding décor, and bespoke celebration concepts. At Amora Designs, we believe every
//           detail tells a story — your story — and we are here to craft it with heart, harmony, and high design.
//           Driven by a team of visionary artists and event enthusiasts, our work blends tradition with trend, and class with comfort,
//           turning ordinary moments into timeless memories. Whether it's a grand wedding, a cozy celebration, or an intimate proposal,
//           Amora Designs transforms spaces with a signature touch of grace and glamour. From concept to creation, we bring your vision
//           to life — beautifully, thoughtfully, and uniquely.</p>
//     </div>
//   );
// }

// export default About;


import React from 'react';
import './About.css';
import first from '../../assets/IMG_3101.jpg';

const About = () => {
  return (
        <div id="about" className="about-section">
    <section className="about-container">
      <div className="about-left">
        <h3 className="about-label">About</h3>
        <h1 className="brand-title">Amora Designs</h1>
        <p className="about-text">
           Founded in 2021, Amora Designs was born from a passion for creativity, elegance, and unforgettable experiences.
           What began as a dream to bring refined aesthetics to life has blossomed into a full-fledged design house
           specializing in event styling, wedding décor, and bespoke celebration concepts. At Amora Designs, we believe every
           detail tells a story — your story — and we are here to craft it with heart, harmony, and high design.
           Driven by a team of visionary artists and event enthusiasts, our work blends tradition with trend, and class with comfort,
           turning ordinary moments into timeless memories. Whether it's a grand wedding, a cozy celebration, or an intimate proposal,
           Amora Designs transforms spaces with a signature touch of grace and glamour. From concept to creation, we bring your vision
           to life — beautifully, thoughtfully, and uniquely.
        </p>
        <h2 className="featured-heading">We are also Featured At WOW</h2>
        {/* <h1 className="wow-text">WOW</h1> */}
        <p className="wow-subtext">WORLD OF WOMEN</p>
      
      <div className='left'>
      <div className='left-img'>
        <img src={first} alt='' className='number'/>
      </div>
      </div>



      </div>
    </section>
</div>
    
  );
};

export default About;

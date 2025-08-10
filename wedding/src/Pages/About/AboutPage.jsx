// // AboutPage.jsx
// import React from "react";
// import "./AboutPage.css";
// import team1 from '../../assets/teams1.jpg';
// import team2 from '../../assets/teams2.avif';
// import team3 from '../../assets/teams3.png';
// import team4 from '../../assets/teams4.jpg';


// const AboutPage = () => {
//   return (
//     <section className="about-wrapper">
//       <h1 className="about-heading">About Amora’s Event</h1>
//       <p className="about-intro ">Where Your Story Becomes a Celebration</p>

     
     

//       <h2 className="about-subheading">Our Philosophy</h2>
//       <p className="about-description">
//         At Amora’s Event, every occasion is treated with the same level of care and creativity.
//         We believe in thoughtful planning, authentic storytelling, and heartfelt execution. Our strength lies in:
//       </p>
//       <ul className="about-list">
//         <li>Listening closely to your dreams and expectations</li>
//         <li>Designing uniquely for your taste and culture</li>
//         <li>Delivering consistently with grace, professionalism, and a warm touch</li>
//       </ul>

//       <h2 className="about-subheading">Why Choose Amora?</h2>
//       <ul className="about-list">
//         <li>100% personalized experiences</li>
//         <li>Detail-oriented and passionate team</li>
//         <li>Experience with diverse cultures and styles</li>
//         <li>Transparent communication and dedicated coordination</li>
//         <li>Creativity that adds magic to your moment</li>
//       </ul>

//       <p className="about-description">
//         Whether you're dreaming of a destination wedding, a surprise proposal, or a fun-filled party,
//         Amora’s Event is here to make it stress-free and stunning — every step of the way.
//       </p>

//       <h2 className="about-subheading">Crafting Unforgettable Moments</h2>

//       <p className="about-introo">
//         Amora’s Event is your trusted partner in celebrating life’s most meaningful occasions.
//         We are a full-service event planning company based in Nepal,Our main aim is to work according to our customer desire's  and working on their preference for the best outcomes as  much as possible specializing in:
//       </p>

//       <ul className="about-services">
//         <li>Elegant weddings</li>
//         <li>Heartfelt proposals</li>
//         <li>Joyful birthday parties</li>
//         <li>Personalized ceremonies</li>
//         <li>Custom and cultural events</li>
//       </ul>

//       <p className="about-mission">
//         Our mission is to transform your vision into reality with creativity, care, and attention to detail.
//         Whether it's a grand celebration or an intimate gathering, we ensure every moment is memorable and uniquely.
//       </p>

//       <h1 className="teams-title">OUR TEAMS</h1>
//       <div className="team-images">
//       <img src={team1} alt="Team member 1"/>
//      <img src={team2} alt="Team member 2"/>
//      <img src={team3} alt="Team member 3"/>
//      <img src={team4} alt="Team member 4"/>
// </div>

//     </section>
//   );
// };

// export default AboutPage;


// AboutPage.jsx
import React from "react";
import "./AboutPage.css";
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import Ring from '../../assets/IMG_3107.jpg';
import team1 from '../../assets/teams1.jpg';
import team2 from '../../assets/teams2.avif';
import team3 from '../../assets/teams3.png';
import team4 from '../../assets/teams4.jpg';
import ME from '../../assets/myself.JPG';
import gallery from '../../assets/gallery-10.jpg';
import project from '../../assets/project2.jpg';
import projectt from '../../assets/project 4.jpg';
import projecttt from '../../assets/project 3.jpg';

const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <div className="about-hero-section">
  <div className="about-hero-overlay">
    <h1 className="about-hero-title">Welcome to AmoraEvents </h1>
    <p className="about-hero-subtitle">Crafting Nepali Weddings with Heart and Heritage</p>
  </div>
</div>


<section className="about-wrapperr">
      <h1 className="about-heading">About Amora’s Event</h1>
      <p className="about-intro">Where Your Story Becomes a Celebration</p>

      <h2 className="about-subheading">Our Philosophy</h2>
      <p className="about-description">
        At Amora’s Event, every occasion is treated with the same level of care and creativity.
        We believe in thoughtful planning, authentic storytelling, and heartfelt execution. Our strength lies in:
      </p>
      <ul className="about-list">
        <li>Listening closely to your dreams and expectations</li>
        <li>Designing uniquely for your taste and culture</li>
        <li>Delivering consistently with grace, professionalism, and a warm touch</li>
      </ul>

      <h2 className="about-subheading">Why Choose Amora?</h2>
      <ul className="about-list">
        <li>100% personalized experiences</li>
        <li>Detail-oriented and passionate team</li>
        <li>Experience with diverse cultures and styles</li>
        <li>Transparent communication and dedicated coordination</li>
        <li>Creativity that adds magic to your moment</li>
      </ul>

      <p className="about-description">
        Whether you're dreaming of a destination wedding, a surprise proposal, or a fun-filled party,
        Amora’s Event is here to make it stress-free and stunning — every step of the way.
      </p>

      <h2 className="about-subheading">Crafting Unforgettable Moments</h2>

      <p className="about-introo">
        Amora’s Event is your trusted partner in celebrating life’s most meaningful occasions.
        We are a full-service event planning company based in Nepal, Our main aim is to work according to our customer desire's and working on their preference for the best outcomes as much as possible specializing in:
      </p>

      <ul className="about-services">
        <li>Elegant weddings</li>
        <li>Heartfelt proposals</li>
        <li>Joyful birthday parties</li>
        <li>Personalized ceremonies</li>
        <li>Custom and cultural events</li>
      </ul>

      <p className="about-mission">
        Our mission is to transform your vision into reality with creativity, care, and attention to detail.
        Whether it's a grand celebration or an intimate gathering, we ensure every moment is memorable and uniquely.
      </p>

       </section>

       <h1 className="teams-title">OUR TEAMS</h1>
      <div className="team-images">
        <div className="team-member">
          <img src={team1} alt="Sandesh Kharel" />
          <p className="team-name"> Sabrina Pandey</p>
        </div>
        <div className="team-member">
          <img src={team2} alt="Diya Shrestha" />
          <p className="team-name">Jhon Shrestha</p>
        </div>
        <div className="team-member">
          <img src={team3} alt="Anish Bista" />
          <p className="team-name">Anish Bista</p>
        </div>
        <div className="team-member">
          <img src={team4} alt="Riya Poudel" />
          <p className="team-name">Dessey Poudel</p>
        </div>
      </div>
 

<div className="about-my-section">
  <div className="about-my-details">
    <h1>About me</h1>
    <p>Hello! I’m Diya Shrestha, the founder and creative force behind AmoraEvents.
What started as a small dream in my heart has now blossomed into one of Nepal’s passionate wedding and event planning teams. I always believed in the beauty of celebrating love, culture, and connection — but the road to building Amora wasn’t easy.
In the early days, I worked with limited resources, countless doubts, and constant pressure to prove myself. There were moments I felt overwhelmed — juggling responsibilities, learning the business, and earning trust in a competitive field. But with every challenge, I grew stronger and never give up.
Through late nights, failed attempts, and quiet victories, I slowly built what is now AmoraEvents — officially launched in 2025. Each event we organize is not just a booking for us, it’s a reflection of my personal journey — full of love.
Today, I feel proud to say: AmoraEvents is more than a business — it's my dream turned into reality, dedicated to making your most special moments unforgettable.</p>
  </div>
  <img src={ME} alt="aboutmyself" className="about-me"></img>
            <p className="team-namee"> Diya Shrestha </p>
            <p className="team-nameee"> The owner of AmoraEvents  </p>
</div>

<div className="about-first-project">
  <div className="about-first-content">
    <h1>Our First Project – A Dream Turned  Reality </h1>
    <p>At Amora, every celebration holds a special place in our hearts, but our very first project will always remain
     unforgettable. It was more than just an event—it was the moment our vision came to life. With passion, creativity,
      and an eye for detail.<br/> we planned and executed a beautiful wedding that marked the beginning of our journey.
       From curating personalized elements to ensuring every moment reflected love and joy, this first celebration 
       laid the foundation for what Amora stands for: elegance, emotion, and excellence!</p>
  </div>
    <img src={gallery} alt="project gallery" className="first-project"/>

    <div className="additional-project-images">
    <img src={projectt} alt="project gallery" className="shift-up" />
    <img src={project} alt="project gallery" className="shift-upp" />
    <img src={projecttt} alt="project gallery" className="shift-uppp" />
    </div>

    <div className="last-content">
    <p>The days leading up to the event were filled with endless planning, hands-on styling.<br/>

    and countless hours of coordination . Every flower arranged, every candle lit, and an <br/>

    every seating chart placed was done with a mix of anxiety and pride . We poured to <br/>
     our hearts into that day <br/>
     — determined to make it perfect, not just for our client, but to prove to ourselves <br/>
     that we were capable of something extraordinary .
     When the bride walked down <br/>
      the aisle, and we saw tears in the eyes of guests — it wasn’t just her dream  also<br/>
      coming true, it was ours too. 
</p>
</div>
</div>

  

    {/* <Navbar/> */}
    
    {/* <Footer/> */}
    </>
  );
};

export default AboutPage;

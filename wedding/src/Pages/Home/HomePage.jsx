import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Hero from '../../Component/Hero/Hero';
import About from '../../Component/About/About';
import Services from '../../Component/Services/Services';
import Gallery from '../../Component/Gallery/Gallery';
import Blog from '../../Component/Blog/Blog';
import Contact from '../../Component/Contact/Contact';
import Footer from '../../Component/Footer/Footer';
// import Booking from '../../Component/Booking/Booking';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Blog />
      {/* <Booking/> */}
      <Contact />
    </>
  );
};

export default HomePage;

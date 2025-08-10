// import React from 'react';
// import {  Routes, Route} from 'react-router-dom';
// import Wedding from './Component/Blog/Blog';
// import Navbar from './Component/Navbar/Navbar';
// import Hero from './Component/Hero/Hero';
// import About  from './Component/About/About';
// import Services from './Component/Services/Services';
// import Gallery from './Component/Gallery/Gallery';
// import Blog from './Component/Blog/Blog';
// import Contact from './Component/Contact/Contact';
// import Footer from './Component/Footer/Footer';
// import AshmiShashank from './pages/AshmiShashank';
// import RoshanSmiriti from './pages/RoshanSmiriti';
// import KhabyaKunal from './pages/KhabyaKunal';
// import ShrinkhalaShibham from './Pages/ShrinkhalaShibham';
// import RoshniNischal from './pages/RoshniNischal';

// const App = () => {
//   return (
//     <div>
//     <Navbar/>
//     <Hero/>
//     <About/>
//     <Services/>
//     <Gallery/>
//     <Blog/>
//     <Contact/>
//     <Footer/>
//     <Routes>
//        <Route path="/" element={<Wedding />} />
//         <Route path="/ashmi-shashank" element={<AshmiShashank />} />
//         <Route path="/roshan-smiriti" element={<RoshanSmiriti />} />
//         <Route path="/khabya-kunal" element={<KhabyaKunal />} />
//         <Route path="/shrinkhala-shibham" element={<ShrinkhalaShibham />} />
//         <Route path="/roshni-nischal" element={<RoshniNischal />} />
//     </Routes>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import './index.css';

// import Navbar from './Component/Navbar/Navbar';
// import Hero from './Component/Hero/Hero';
// import About from './Component/About/About';
// import Services from './Component/Services/Services';
// import Gallery from './Component/Gallery/Gallery';
// import Blog from './Component/Blog/Blog';
// import Contact from './Component/Contact/Contact';
// import Footer from './Component/Footer/Footer';

// import AshmiShashank from './Pages/AshmiShashank';
// import PriyankaAayushman from './Pages/PriyankaAayushman';
// import KhabyaKunal from './Pages/KhabyaKunal';
// import ShrinkhalaShibham from './Pages/ShrinkhalaShibham';
// import RoshniNischal from './Pages/RoshniNischal';
// import AboutPage from './Pages/About/AboutPage';
// import HomePage from './Pages/Home/HomePage';


// const App = () => {
//   const location = useLocation();
//   const path = location.pathname;

//   // Define which routes are love story pages
//   const loveStoryRoutes = [
//     '/ashmi-shashank',
//     '/Priyanka-Aayushman',
//     '/khabya-kunal',
//     '/shrinkhala-shibham',
//     '/roshni-nischal',
//   ];

//   const isLoveStoryPage = loveStoryRoutes.includes(path);

//   return (
//     <div>
//       {isLoveStoryPage ? (
        
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage/>} />
//           <Route path="/ashmi-shashank" element={<AshmiShashank />} />
//           <Route path="/Priyanka-Aayushman" element={<PriyankaAayushman />} />
//           <Route path="/khabya-kunal" element={<KhabyaKunal />} />
//           <Route path="/shrinkhala-shibham" element={<ShrinkhalaShibham />} />
//           <Route path="/roshni-nischal" element={<RoshniNischal />} />

//         </Routes>
//       ) : (
//         <>
//           <Navbar />
//           <Hero />
//           <About />
//           <Services />
//           <Gallery />
//           <Blog />
//           <Contact />
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// };

// export default App;


// import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import './index.css';

// import Navbar from './Component/Navbar/Navbar';
// import Hero from './Component/Hero/Hero';
// import About from './Component/About/About';
// import Services from './Component/Services/Services';
// import Gallery from './Component/Gallery/Gallery';
// import Blog from './Component/Blog/Blog';
// import Contact from './Component/Contact/Contact';
// import Footer from './Component/Footer/Footer';

// import AshmiShashank from './Pages/AshmiShashank';
// import PriyankaAayushman from './Pages/PriyankaAayushman';
// import KhabyaKunal from './Pages/KhabyaKunal';
// import ShrinkhalaShibham from './Pages/ShrinkhalaShibham';
// import RoshniNischal from './Pages/RoshniNischal';
// import AboutPage from './Pages/About/AboutPage';
// import HomePage from './Pages/Home/HomePage';

// const App = () => {
//   const location = useLocation();
//   const path = location.pathname;

//   // Define which routes are love story or standalone pages
//   const standaloneRoutes = [
//     '/ashmi-shashank',
//     '/priyanka-aayushman',
//     '/khabya-kunal',
//     '/shrinkhala-shibham',
//     '/roshni-nischal',
//     '/about',
//   ];

//   const isStandalonePage = standaloneRoutes.includes(path.toLowerCase());

//   return (
//     <div>
//       {!isStandalonePage && (
//         <>
//           <Navbar />
//           <Hero />
//           <About />
//           <Services />
//           <Gallery />
//           <Blog />
//           <Contact />
//           <Footer />
//         </>
//       )}

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/ashmi-shashank" element={<AshmiShashank />} />
//         <Route path="/priyanka-aayushman" element={<PriyankaAayushman />} />
//         <Route path="/khabya-kunal" element={<KhabyaKunal />} />
//         <Route path="/shrinkhala-shibham" element={<ShrinkhalaShibham />} />
//         <Route path="/roshni-nischal" element={<RoshniNischal />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

import AshmiShashank from './Pages/AshmiShashank';
import PriyankaAayushman from './Pages/PriyankaAayushman';
import KhabyaKunal from './Pages/KhabyaKunal';
import ShrinkhalaShibham from './Pages/ShrinkhalaShibham';
import RoshniNischal from './Pages/RoshniNischal';
import AboutPage from './Pages/About/AboutPage';
import HomePage from './Pages/Home/HomePage';
import Services from './Pages/Services/Services';
import Footer from './Component/Footer/Footer';
import Booking from './Pages/Booking/Booking';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';



const App = () => {
  const location = useLocation();

  const path = location.pathname.toLowerCase().replace(/\/+$/, "");

  const standaloneRoutes = [
    '/ashmi-shashank',
    '/priyanka-aayushman',
    '/khabya-kunal',
    '/shrinkhala-shibham',
    '/roshni-nischal',
    '/about',
  ];

  const isStandalonePage = standaloneRoutes.includes(path);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
         <Route path="/Services" element={<Services/>} />
          <Route path="/Booking" element={<Booking/>} />
          <Route path='Gallery' element={<Gallery/>} />
          <Route path='Contact' element={<Contact/>}/>
        <Route path="/ashmi-shashank" element={<AshmiShashank />} />
        <Route path="/priyanka-aayushman" element={<PriyankaAayushman />} />
        <Route path="/khabya-kunal" element={<KhabyaKunal />} />
        <Route path="/shrinkhala-shibham" element={<ShrinkhalaShibham />} />
        <Route path="/roshni-nischal" element={<RoshniNischal />} />
      </Routes>
        <Footer/>

    </div>
  );
};

export default App;

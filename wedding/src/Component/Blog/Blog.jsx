// // import React from 'react';
// // import './Wedding.css'

// // const Wedding = () => {
// //   return (
// //     <div>
      
// //     </div>
// //   );
// // }

// // export default Wedding;


// import React from 'react';
// import './Blog.css'
// import lovestory from '../../assets/love story.jpg';
// import lovestory2 from '../../assets/love story 2.jpg';
// import lovestory3 from '../../assets/love story 3.jpg';
// import story_i from '../../assets/story-i.jpg';
// import background_4 from '../../assets/background-4.jpg';

// const Wedding = () => {
//   return (

//         <div id="blog" className="blog-section">

//     <div className='main-title'>
//     <h1>  Love  <span className='green'>Story</span></h1>

//     <div className='Card-container'>
//       <div className='Card'>
//      <img className='Card-image' src={lovestory} alt='profile picture'></img>
//      <p className='Card-name'>Ashmi & Shashank<br/>☘️</p>
//     </div>

//     <div className='Card'>
//      <img className='Card-image' src={story_i} alt='profile picture'></img> 
//          <p className='Card-name'>Roshan & Smiriti<br/>☘️</p>
//     </div>
    
//     <div className='Lovestory'>
//     <div className='Card'>
//      <img className='Card-image' src={background_4} alt='profile picture'></img>
//          <p className='Card-name'>Khabya & Kunal<br/>☘️</p> 
//     </div>

//     <div className='Card'>
//      <img className='Card-image' src={lovestory2} alt='profile picture'></img> 
//          <p className='Card-name'>Shrinkhala & Shibham<br/>☘️</p>
//     </div>

//     <div className='Card'>
//      <img className='Card-image' src={lovestory3} alt='profile picture'></img> 
//          <p className='Card-name'>Roshni & Nischal<br/>☘️</p>
//     </div>
//     </div>
//     </div>
//         </div>



//     </div>
//   );

// }
//  export default Wedding;


import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import lovestory from '../../assets/love story.jpg';
import lovestory2 from '../../assets/love story 2.jpg';
import lovestory3 from '../../assets/love story 3.jpg';
import gallery4 from '../../assets/gallery-4.jpg'
import background_4 from '../../assets/background-4.jpg';

const Wedding = () => {
  return (
    <div id="blog" className="blog-section">
      <div className='main-title'>
        <h1> Love <span className='green'>Story</span></h1>

        <div className='Card-container'>
          <div className='Card'>
            <img className='Card-image' src={lovestory} alt='profile picture' />
            <Link to="/ashmi-shashank" className='Card-name'>Ashmi & Shashank<br />☘️</Link>
          </div>

          <div className='Card'>
            <img className='Card-image' src={gallery4} alt='profile picture' />
            <Link to="/Priyanka-Aayushman" className='Card-name'>Priyanka & Aayushman<br />☘️</Link>
          </div>

          <div className='Lovestory'>
            <div className='Card'>
              <img className='Card-image' src={background_4} alt='profile picture' />
              <Link to="/khabya-kunal" className='Card-name'>Khabya & Kunal<br />☘️</Link>
            </div>

            <div className='Card'>
              <img className='Card-image' src={lovestory2} alt='profile picture' />
              <Link to="/shrinkhala-shibham" className='Card-name'>Shrinkhala & Shibham<br />☘️</Link>
            </div>

            <div className='Card'>
              <img className='Card-image' src={lovestory3} alt='profile picture' />
              <Link to="/roshni-nischal" className='Card-name'>Roshni & Nischal<br />☘️</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wedding;

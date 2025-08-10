import React from 'react';
import storyyy from '../assets/story8.jpg';
import storyyyy from '../assets/story9.jpg';

const ShrinkhalaShibham = () => {
  return (
    <div className="relative flex flex-col items-center bg-gradient-to-b from-pink-50 to-white min-h-screen">
      {/* Hero Section with overlay */}
      <div className="w-full h-[70vh] relative overflow-hidden">
        <img
          src={storyyyy}
          alt="Proposal"
          className="w-full h-full object-cover brightness-90"
        />
        {/* Title */}
        <h2 className="absolute inset-x-0 top-8 text-center text-white text-3xl md:text-5xl font-serif italic drop-shadow-xl tracking-wide">
          Shrinkhala ♥ Shibham
        </h2>

        {/* Overlay Love Quotes */}
        <div className="absolute inset-0 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 pt-24 gap-10 text-black">
          {/* Left Quote */}
          <blockquote className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg max-w-md italic font-light leading-relaxed text-lg border-l-4 border-pink-400 drop-shadow-md">
            “Shrinkhala, in the quiet of a thousand moments, it’s your laughter that echoes in my soul. 
            You’re the poetry my heart writes when the world turns silent. Every time I see you, 
            the world fades — and all I see is you, glowing like the moon I always wished for. 
            You didn’t just enter my life — you rewrote it, and now every chapter begins and ends with you.
            You are the gentle pause in my chaos, the reason my world feels like poetry even on the dullest days.
            Your eyes hold galaxies, and every glance reminds me how lucky I am to call you mine.”
          </blockquote>

          {/* Right Quote */}
          <blockquote className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg max-w-md italic font-light leading-relaxed text-lg border-r-4 border-pink-400 drop-shadow-md">
            “Shibham, from the moment our eyes met, my world began to bloom in colors I never knew existed.  
            You are not just my love — you are my calm in chaos, my warmth in winter, my forever in every fleeting second.  
            With you, even silence speaks, and in your presence, I’ve found a love that feels like destiny whispered it long
            before we ever met. With every smile of yours, my heart dances. With every silence, I feel safe.
            Your love has become the rhythm of my life, and in your arms, I’ve found a home that even forever could never replace.”
          </blockquote>
        </div>
      </div>

      {/* Story Section */}
      <section className="max-w-7xl w-full flex flex-col md:flex-row items-start gap-12 px-6 md:px-16 py-12">
        {/* Text */}
        <div className="md:w-2/3 text-gray-800">
          <h3 className="text-3xl font-serif font-semibold mb-6 text-center md:text-left">
            Shrinkhala & Shibham – A Story of Grace and Vision
          </h3>
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md border border-pink-200 text-justify text-lg font-light leading-relaxed space-y-6">
            <p>
              In the dazzling world of ambition and dreams, <strong>Shrinkhala Khatiwada</strong>, crowned Miss Nepal 2016,
              was not just known for her radiant beauty, but for her unwavering poise, intelligence, and compassion.
              As she travelled the world representing Nepal, advocating for women’s empowerment, and inspiring countless
              young hearts, little did she know that her own heart was on a destined path toward someone equally extraordinary.
            </p>
            <p>
              <strong>Shibham</strong>, a visionary in his own right, had carved a name for himself as the Head of Product Strategy at Skill Lab — 
              a platform dedicated to bridging the gap between education and employment. While his world revolved around innovation and impact, 
              love was something he never planned — until destiny intervened.
            </p>
            <p>
              They first crossed paths during a youth leadership summit in Kathmandu — Shrinkhala as a keynote speaker and Shibham as a panelist on 
              innovation and education. She spoke with elegance, he listened with intent. He spoke with purpose, she smiled with curiosity. 
              No grand declarations — just mutual admiration and an unexplainable spark.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/3 w-full rounded-lg overflow-hidden shadow-lg">
          <img
            src={storyyy}
            alt="Shrinkhala and Shibham Story"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default ShrinkhalaShibham;

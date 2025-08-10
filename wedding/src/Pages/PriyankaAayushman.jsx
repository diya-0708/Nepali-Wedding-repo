import React from 'react';
import story from '../assets/story6.Jpg';
import storyy from '../assets/story7.jpg';

const PriyankaAayushman = () => {
  return (
    <div className="w-screen bg-gradient-to-b from-pink-100 via-white to-pink-50 min-h-screen font-serif">

      {/* HERO SECTION */}
      <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
        <img
          src={storyy}
          alt="Proposal"
          className="object-cover w-full h-full brightness-75"
        />

        {/* Dreamy Pink Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-600/40 to-pink-900/70"></div>

        {/* Top Center Text */}
        <h1 className="absolute top-20 w-full text-center text-white text-5xl md:text-6xl font-extrabold italic drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)] animate-fadeIn">
          Priyanka ♥ Aayushman
        </h1>

        {/* Left Text */}
        <div className="absolute left-8 top-1/2 max-w-lg transform -translate-y-1/2 text-white text-lg md:text-xl italic font-light leading-relaxed drop-shadow-md backdrop-blur-sm bg-white/10 rounded-lg p-6 shadow-lg animate-fadeIn delay-200">
          “Priyanka, in the quiet of a thousand moments, it’s your laughter that echoes in my soul. 
          You’re the poetry my heart writes when the world turns silent. Every time I see you, 
          the world fades — and all I see is you, glowing like the moon I always wished for. 
          You didn’t just enter my life — you rewrote it, and now every chapter begins and ends with you.
          Priyanka, you are the gentle pause in my chaos, the reason my world feels like poetry even on the 
          dullest days. Before you, I smiled — but with you, I’ve learned what true happiness feels like.
          Your eyes hold galaxies, and every glance reminds me how lucky I am to call you mine.
          You are not just a part of my life — you are my life."
        </div>

        {/* Right Text */}
        <div className="absolute right-8 top-1/2 max-w-lg transform -translate-y-1/2 text-white text-lg md:text-xl italic font-light leading-relaxed drop-shadow-md backdrop-blur-sm bg-white/10 rounded-lg p-6 shadow-lg animate-fadeIn delay-400">
          “Aayushman, from the moment our eyes met, my world began to bloom in colors I never knew existed.  
          You are not just my love — you are my calm in chaos, my warmth in winter, my forever in every fleeting second.  
          With you, even silence speaks, and in your presence, I’ve found a love that feels like destiny whispered it long
          before we ever met. I used to believe love was just a story in the movies — but then you walked into my life like
          the hero I didn’t know I was waiting for. With every smile of yours, my heart dances. With every silence, I feel safe.
          Aayushman, your love has become the rhythm of my life, and in your arms, I’ve found a home that even forever could never
          replace.”
        </div>
      </div>

      {/* STORY SECTION */}
      <section className="flex flex-col md:flex-row items-start gap-12 p-10 md:p-20 bg-white shadow-lg rounded-lg max-w-7xl mx-auto -mt-32 relative z-10">
        
        {/* Left - Text Block */}
        <div className="md:w-2/3 text-gray-800">
          <h2 className="text-3xl font-serif font-semibold text-pink-700 mb-6 border-b-4 border-pink-300 pb-2 max-w-max">
            Priyanka & Aayushman – A Story of Grace and Vision
          </h2>
          <div className="text-justify text-lg leading-relaxed font-light space-y-6">
            <p>
              In the dazzling world of ambition and dreams, <strong className="text-pink-600">Priyanka Karki</strong>, crowned Miss Nepal 2016,
              was not just known for her radiant beauty, but for her unwavering poise, intelligence, and compassion.
              As she travelled the world representing Nepal, advocating for women’s empowerment, and inspiring countless
              young hearts, little did she know that her own heart was on a destined path toward someone equally extraordinary.
            </p>
            <p>
              <strong className="text-red-600">Aayushman</strong>, a visionary in his own right, had carved a name for himself as the Head of Product Strategy at Skill Lab — 
              a platform dedicated to bridging the gap between education and employment. While his world revolved around innovation and impact,
              love was something he never planned — until destiny intervened.
            </p>
            <p>
              They first crossed paths during a youth leadership summit in Kathmandu — Priyanka as a keynote speaker and Aayushman as a panelist on
              innovation and education. She spoke with elegance, he listened with intent. He spoke with purpose, she smiled with curiosity.
              No grand declarations — just mutual admiration and an unexplainable spark. You are not just a part of my life — you are my life.
            </p>
          </div>
        </div>

        {/* Right - Image */}
        <div className="md:w-1/3 w-full rounded-xl overflow-hidden shadow-lg border-4 border-pink-300">
          <img
            src={story}
            alt="Priyanka and Aayushman Story"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* FOOTER BAR */}
    

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .animate-fadeIn.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fadeIn.delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>

    </div>
  );
};

export default PriyankaAayushman;

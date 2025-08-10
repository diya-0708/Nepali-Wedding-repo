import React from 'react';
import proposall from '../assets/proposal.jpg';
import lovestorY from '../assets/IMG_3306.Jpg';

const AshmiShashank = () => {
  return (
    <div className="w-screen font-serif bg-gradient-to-b from-black-500 via-white to-black-500">
      {/* HERO SECTION */}
      <div className="relative flex items-center justify-center h-screen w-screen">
        <img
          src={proposall}
          alt="Proposal"
          className="object-cover w-full h-full brightness-90"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />

        {/* Title */}
        <div className="absolute top-20 text-center text-white drop-shadow-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold italic font-serif tracking-wider">
            Ashmi <span className="text-red-1000">♥</span> Shashank
          </h1>
          <p className="mt-3 text-lg font-light tracking-wide">
            Two hearts, one story, forever intertwined
          </p>
        </div>

        {/* Left Quote */}
        <div className="absolute left-5 md:left-16 top-1/2 transform -translate-y-1/2 max-w-md p-4 bg-white bg-opacity-80 rounded-xl shadow-lg animate-fadeIn">
          <p className="text-gray-800 italic leading-relaxed">
            “Ashmi, in the quiet of a thousand moments, it’s your laughter
            that echoes in my soul... You are my life.”
          </p>
        </div>

        {/* Right Quote */}
        <div className="absolute right-5 md:right-16 top-1/2 transform -translate-y-1/2 max-w-md p-4 bg-white bg-opacity-80 rounded-xl shadow-lg animate-fadeIn delay-200">
          <p className="text-gray-800 italic leading-relaxed">
            “Shashank, from the moment our eyes met, my world began to bloom...
            In your arms, I’ve found a home that forever could never replace.”
          </p>
        </div>
      </div>

      {/* STORY SECTION */}
      <div className="flex flex-col md:flex-row items-start gap-8 p-6 md:p-16">
        {/* Left Text */}
        <div className="md:w-2/3 text-gray-700">
          <h2 className="text-3xl font-semibold text-center text-marron-700 mb-6">
            Ashmi & Shashank – A Story of Grace and Vision
          </h2>
          <div className="bg-white bg-opacity-70 backdrop-blur-sm p-6 rounded-xl shadow-md leading-relaxed text-lg">
            <p className="mb-4">
              In the dazzling world of ambition and dreams,{' '}
              <strong>Ashmi Shrestha</strong>, crowned Miss Nepal 2016,
              was not just known for her radiant beauty, but for her unwavering
              poise, intelligence, and compassion...
            </p>
            <p className="mb-4">
              <strong>Shashank</strong>, a visionary in his own right, had carved
              a name for himself as the Head of Product Strategy at Skill Lab...
            </p>
            <p>
              They first crossed paths during a youth leadership summit in Kathmandu —
              Ashmi as a keynote speaker and Shashank as a panelist on innovation
              and education...
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/3 w-full flex justify-center">
          <img
            src={lovestorY}
            alt="Ashmi and Shashank Story"
            className="w-full max-w-sm rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default AshmiShashank;

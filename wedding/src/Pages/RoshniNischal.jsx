import React from "react";
import storY from "../assets/story4.jpg";
import storYY from "../assets/story5.jpg";

const RoshniNischal = () => {
  return (
    <div className="relative w-screen min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center">
      {/* Main Image with subtle overlay */}
      <div className="relative w-full max-h-screen overflow-hidden">
        <img
          src={storY}
          alt="Roshni and Nischal"
          className="w-full object-cover max-h-[90vh] brightness-90"
        />
        {/* Top Center Text */}
        <h1 className="absolute top-8 w-full text-center text-white text-3xl md:text-5xl font-serif italic drop-shadow-xl tracking-wide">
          Roshni ♥ Nischal
        </h1>
      </div>

      {/* Love Quotes Section */}
      <section className="relative flex flex-col md:flex-row justify-between max-w-7xl w-full px-6 md:px-16 mt-12 gap-12 text-black">
        {/* Left Quote */}
        <blockquote className="md:w-1/2 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg italic font-light text-lg leading-relaxed text-left border-l-4 border-pink-400 drop-shadow-md">
          “Roshni, in the quiet of a thousand moments, it’s your laughter that
          echoes in my soul. You’re the poetry my heart writes when the world
          turns silent. Every time I see you, the world fades — and all I see is
          you, glowing like the moon I always wished for. You didn’t just enter my
          life — you rewrote it, and now every chapter begins and ends with you.
          You are the gentle pause in my chaos, the reason my world feels like
          poetry even on the dullest days. Before you, I smiled — but with you,
          I’ve learned what true happiness feels like. Your eyes hold galaxies,
          and every glance reminds me how lucky I am to call you mine. You are not
          just a part of my life — you are my life.”
        </blockquote>

        {/* Right Quote */}
        <blockquote className="md:w-1/2 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg italic font-light text-lg leading-relaxed text-right border-r-4 border-pink-400 drop-shadow-md">
          “Nischal, from the moment our eyes met, my world began to bloom in
          colors I never knew existed. You are not just my love — you are my calm
          in chaos, my warmth in winter, my forever in every fleeting second. With
          you, even silence speaks, and in your presence, I’ve found a love that
          feels like destiny whispered it long before we ever met. I used to
          believe love was just a story in the movies — but then you walked into
          my life like the hero I didn’t know I was waiting for. With every smile
          of yours, my heart dances. With every silence, I feel safe. Your love
          has become the rhythm of my life, and in your arms, I’ve found a home
          that even forever could never replace.”
        </blockquote>
      </section>

      {/* Story Section */}
      <section className="flex flex-col md:flex-row max-w-7xl w-full mt-20 gap-12 px-6 md:px-16 items-start">
        {/* Text */}
        <div className="md:w-2/3 text-gray-800">
          <h2 className="text-3xl font-serif font-semibold mb-6 text-center md:text-left">
            Roshni & Nischal – A Story of Grace and Vision
          </h2>
          <div className="text-lg font-light leading-relaxed text-justify space-y-6 bg-white bg-opacity-90 p-8 rounded-lg shadow-md border border-pink-200">
            <p>
              In the dazzling world of ambition and dreams,{" "}
              <strong>Roshni Neupane</strong>, crowned Miss Nepal 2016, was not
              just known for her radiant beauty, but for her unwavering poise,
              intelligence, and compassion. As she travelled the world
              representing Nepal, advocating for women’s empowerment, and
              inspiring countless young hearts, little did she know that her own
              heart was on a destined path toward someone equally extraordinary.
            </p>
            <p>
              <strong>Nischal</strong>, a visionary in his own right, had carved
              a name for himself as the Head of Product Strategy at Skill Lab — 
              a platform dedicated to bridging the gap between education and 
              employment. While his world revolved around innovation and impact, 
              love was something he never planned — until destiny intervened.
            </p>
            <p>
              They first crossed paths during a youth leadership summit in
              Kathmandu — Roshni as a keynote speaker and Nischal as a panelist
              on innovation and education. She spoke with elegance, he listened
              with intent. He spoke with purpose, she smiled with curiosity. No
              grand declarations — just mutual admiration and an unexplainable
              spark.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/3 w-full rounded-lg overflow-hidden shadow-lg">
          <img
            src={storYY}
            alt="Roshni and Nischal"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Footer */}
    
    </div>
  );
};

export default RoshniNischal;

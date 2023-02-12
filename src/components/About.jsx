import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My name is Aditi Prasad, I'm a third year undergraduate student at National Institute of Technology Jamshedpur. I'm pursuing B.Tech in Electrical Engineering Branch. I'm a competitive programmer as well as web development enthusiast, I love developing and designing websites and web apps. I'm passionate about my work and am always eager to learn new things. I'm very organized and thrive for perfection in everything I do.
        </p>

        <br />

        <p className="text-xl">
          I am a part of the Official Web-Team of National Institute Of Technology, Jamshedpdur which involves maintainence and handling of the official web team of National Institute Of Technology, Jamshedpur. I am also serving as the Joint Secretary of National Service Scheme of National Institute Of Technology,Jamshedpur which involves managing and handling events at various levels in college. 
        </p>
      </div>
    </div>
  );
};

export default About;

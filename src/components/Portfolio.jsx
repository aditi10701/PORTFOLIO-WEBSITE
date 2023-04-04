import React from "react";
import ticTacToe from "../assets/portfolio/ticTacToe.png";
import imdb from "../assets/portfolio/imdb.png";
import employeeManagement from "../assets/portfolio/employeeManagement.png";
import codeBook from "../assets/portfolio/codeBook.png";
import algorithmVisualizer from "../assets/portfolio/6.png";
import quizApp from "../assets/portfolio/QUIZ.png"
import sharify from "../assests/portfolio/SHARIFY.png"
import bookingist from "../assets/portfolio/BOOKINGIST.png"


const Portfolio = () => {
  const portfolios = [
    {
      id: 6,
      src: ticTacToe,
      link: "https://incredible-paprenjak-011345.netlify.app/",
      code:"https://github.com/aditi10701/game-tic-tac-toe",
    },
    {
      id: 5,
      src: imdb,
      link: "https://benevolent-biscotti-254260.netlify.app",
      code:"https://github.com/aditi10701/Movie-Application",
    },
    {
      id: 4,
      src: bookingist,
      link:"https://bookingist.onrender.com/",
      code:"https://github.com/aditi10701/TicketBooking",
    },
    { 
      id: 3,
      src: sharify,
      link:"https://candid-chaja-dd7b83.netlify.app/",
      code:"https://github.com/aditi10701/FileSharing",  
      },
    {
      id: 5,
      src: algorithmVisualizer,
      link:"https://heroic-bombolone-8a6dd2.netlify.app/",
      code:"https://github.com/aditi10701/Algorithm_visualizer",  
    },
    {
      id: 6,
      src: quizApp,
      link:"https://fervent-goodall-b33fad.netlify.app/",
      code:"https://github.com/aditi10701/Quiz__App", 
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,link,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={link}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={code}>Code</a>
                </button>
              </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

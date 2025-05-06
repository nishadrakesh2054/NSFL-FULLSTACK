import React from "react";
import { FaPlay, FaExpand } from "react-icons/fa";

const Highlights = () => {
  const liveMatches = [
    {
      id: 1,
      teamA: "Gems",
      teamB: "Thunderbolts",
      status: "Live",
      viewers: "2.4M watching",
      teamALogo: "/image/img-03.png",
      teamBLogo: "/image/img-04.png",
    },
  ];

  const featuredMatch = liveMatches[0];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Parallax */}
      <div
        className="parallax-bg py-20 bg-fixed bg-cover bg-center relative"
        style={{ backgroundImage: "url('/image/parallex.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-4xl font-bold text-white tracking-tight relative text-center">
             WATCH LIVE MATCH
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-[#fec802] to-[#0049be] rounded-full"></div>
            </h2>
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 border-2 border-white/20 rounded-full"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 border-2 border-white/30 rounded-full"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 border-2 border-white/40 rounded-full"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed mt-8 text-center">
              Experience the thrill of live matches and never miss a moment of
              the action
            </p>
          
       
        </div>

        {/* Live Section */}
        <section className="mt-16 mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm">
              <div className="aspect-w-16 aspect-h-9 relative">
                <iframe
                  className="w-full h-full min-h-[450px]"
                  src="https://www.youtube.com/embed/7xmP5Ri1eKk?si=AYVfDzSMg9IUx8c7"
                  title="Live Match Stream"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  LIVE
                </div>
              </div>
              <div
                className="p-6 bg-gradient-to-r from-gray-400/10 to-gray-800/10"
                data-aos="fade-up"
              >
                <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-8 mb-6">
                  {/* Team A */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={featuredMatch.teamALogo}
                      alt={featuredMatch.teamA}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                    <span className="text-lg sm:text-xl font-bold text-white uppercase">
                      {featuredMatch.teamA}
                    </span>
                  </div>

                  {/* VS Badge */}
                  <span className="text-xs sm:text-sm font-semibold text-white bg-white/20 px-3 py-1 rounded-full shadow-md tracking-wide">
                    VS
                  </span>

                  {/* Team B */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={featuredMatch.teamBLogo}
                      alt={featuredMatch.teamB}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                    <span className="text-lg sm:text-xl font-bold text-white uppercase">
                      {featuredMatch.teamB}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4">
                  <button className="flex items-center justify-center px-6 py-2 sm:px-10 sm:py-3 bg-red-500 hover:bg-red-600 rounded-lg font-medium text-white text-sm sm:text-base transition-all duration-300">
                    <FaPlay className="mr-2 text-xs sm:text-sm" />
                    Watch Live
                  </button>
                  <button className="flex items-center justify-center px-6 py-2 sm:px-10 sm:py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium text-white text-sm sm:text-base transition-all duration-300">
                    <FaExpand className="mr-2 text-xs sm:text-sm" />
                    Full Screen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Highlights;

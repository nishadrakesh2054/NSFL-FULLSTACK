import React, { useState } from "react";
import {
  FaPlay,
  FaEye,
  FaCalendarAlt,
  FaTrophy,
  FaFutbol,
  FaUsers,
} from "react-icons/fa";
import { MdStadium, MdEmojiEvents } from "react-icons/md";

const Highlights = () => {
  const [filter, setFilter] = useState("recent");

  const highlights = [
    {
      id: 1,
      title: "Manang Marshyangdi vs Machhindra FC - Final Highlights",
      description:
        "Watch the thrilling final match of NSFL 2023 with 5 goals and dramatic finish",
      image: "/image/about.jpeg",
      date: "Yesterday",
      views: 1250000,
      duration: "5:32",
      competition: "NSFL Championship Final",
    },
    {
      id: 2,
      title: "Best Goals of Matchday 15",
      description:
        "Top 5 spectacular goals from the latest round of NSFL matches",
      image: "/image/about.jpeg",
      date: "2 days ago",
      views: 890000,
      duration: "3:45",
      competition: "NSFL Regular Season",
    },
    {
      id: 3,
      title: "Three Star Club vs Kathmandu Rayzrs - Derby Showdown",
      description: "Intense local derby with 3 red cards and late drama",
      image: "/image/about.jpeg",
      date: "3 days ago",
      views: 1500000,
      duration: "4:12",
      competition: "NSFL Regular Season",
    },
    {
      id: 4,
      title: "Season Review 2023",
      description: "Relive all the best moments from the NSFL 2023 season",
      image: "/image/about.jpeg",
      date: "1 week ago",
      views: 2100000,
      duration: "12:45",
      competition: "NSFL Season Review",
    },
    {
      id: 5,
      title: "Young Player Spotlight: George Prince Karki",
      description:
        "The rising star of Jawalakhel Youth Club with 8 goals this season",
      image: "/image/about.jpeg",
      date: "5 days ago",
      views: 750000,
      duration: "2:30",
      competition: "Player Profile",
    },
    {
      id: 6,
      title: "Top Saves of the Season",
      description: "Incredible goalkeeping performances from NSFL 2023",
      image: "/image/about.jpeg",
      date: "4 days ago",
      views: 680000,
      duration: "3:15",
      competition: "NSFL Season Highlights",
    },
  ];

  const filteredHighlights = highlights.sort((a, b) => {
    if (filter === "recent") {
      // Sort by recency (simplified for demo)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (filter === "mostViewed") {
      // Sort by views
      return b.views - a.views;
    } else {
      // Sort by duration (longest first)
      return b.duration.localeCompare(a.duration);
    }
  });

  const formatViews = (views) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  const formatDuration = (duration) => {
    const [mins, secs] = duration.split(":");
    return `${mins}m ${secs}s`;
  };

  return (
    <>
      <div
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url('/image/about.jpeg')",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About NSFL
          </h1>
          <div className="text-white flex justify-center items-center space-x-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-red-500">About Us</span>
          </div>
        </div>
      </div>
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-6 md:mb-0">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                NSFL Highlights
              </h1>
              <p className="text-lg text-gray-600">
                Relive the best moments from Nepal's premier football league
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFilter("recent")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  filter === "recent"
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                <FaCalendarAlt className="mr-2" /> Recent
              </button>
              <button
                onClick={() => setFilter("mostViewed")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  filter === "mostViewed"
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                <FaEye className="mr-2" /> Most Viewed
              </button>
              <button
                onClick={() => setFilter("longest")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  filter === "longest"
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                <FaPlay className="mr-2" /> Longest
              </button>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHighlights.map((highlight) => (
              <div
                key={highlight.id}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image container with all hover effects */}
                <div className="relative h-60 overflow-hidden">
                  <div className="relative h-full w-full transform transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <FaPlay className="text-white text-xl ml-1 transition-transform group-hover:scale-110 duration-200" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold transform transition-transform duration-300 group-hover:scale-105 flex items-center">
                      <FaPlay className="mr-1" /> {highlight.duration}
                    </span>
                    <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center transform transition-transform duration-300 group-hover:scale-105">
                      <FaEye className="mr-1" /> {formatViews(highlight.views)}
                    </span>
                    <span className="bg-white/90 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center transform transition-transform duration-300 group-hover:scale-105">
                      <FaCalendarAlt className="mr-1" /> {highlight.date}
                    </span>
                  </div>

                  {/* Competition badge */}
                  <div className="absolute bottom-4 right-4 bg-yellow-500 text-gray-900 text-xs px-3 py-1 rounded-full font-bold flex items-center">
                    <MdEmojiEvents className="mr-1" /> {highlight.competition}
                  </div>
                </div>

                <div className="p-6 transition-all duration-300 group-hover:bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 transition-colors duration-300 group-hover:text-red-600">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {highlight.description}
                  </p>

                  <button className="w-full py-3 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-800 rounded-lg font-medium flex items-center justify-center transition-all duration-300">
                    <FaPlay className="mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                    Watch Full Highlight
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlights;

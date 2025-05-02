


import React from 'react';
import { FaPlay, FaEye, FaCalendarAlt } from 'react-icons/fa';
import Button from './Button';
const Highlights = () => {
  const highlights = [
    {
      id: 2,
      title: "New Record Set",
      description: "Player X breaks the league scoring record with 30 goals in a season",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "Yesterday",
      views: "890K",
      duration: "2:45"
    },
    {
      id: 3,
      title: "Championship Race Heats Up",
      description: "Top teams separated by just 2 points with 5 games remaining",
      image: "/image/img-02.jpg",
      date: "2 days ago",
      views: "756K",
      duration: "1:32"
    },
    {
      id: 4,
      title: "Incredible Free Kick Goal",
      description: "Player Y scores from 35 yards out in stoppage time",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      date: "3 days ago",
      views: "1.5M",
      duration: "0:56"
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Match Highlights</h2>
            <p className="text-lg text-gray-600">Relive the most exciting moments from recent matches</p>
          </div>
         
          <Button title="View All Highlights" />
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {highlights.map((highlight) => (
    <div 
      key={highlight.id}
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* Image container with all hover effects */}
      <div className="relative h-60 overflow-hidden">
        {/* Image with smooth zoom */}
        <div className="relative h-full w-full transform transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110">
          <img
            src={highlight.image}
            alt={highlight.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient overlay - slightly darker on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-500"></div>
        
        {/* Play button - smoother entrance */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center 
              transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 
              transition-all duration-500 ease-out">
            <FaPlay className="text-white text-xl ml-1 transition-transform group-hover:scale-110 duration-200" />
          </div>
        </div>
        
        {/* Top badges */}
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold 
              transform transition-transform duration-300 group-hover:scale-105">
            {highlight.duration}
          </span>
          <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center
              transform transition-transform duration-300 group-hover:scale-105">
            <FaEye className="mr-1" /> {highlight.views}
          </span>
        </div>
        
        {/* Date badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 text-gray-800 text-xs px-3 py-1 rounded-full flex items-center
            transform transition-transform duration-300 group-hover:scale-105">
          <FaCalendarAlt className="mr-1" /> {highlight.date}
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-6 transition-all duration-300 group-hover:bg-gray-50">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 
            transition-colors duration-300 group-hover:text-red-600">
          {highlight.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2 font-poppins">
          {highlight.description}
        </p>
        <button className="w-full py-3 bg-gray-100 hover:bg-red-500 hover:text-white 
            text-gray-800 rounded-lg font-medium flex items-center justify-center 
            transition-all duration-300 group-[.highlight-card]:hover:bg-red-500">
          <FaPlay className="mr-2 transition-transform duration-300 group-hover:translate-x-1" />
          Watch Highlight
        </button>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  )
}

export default Highlights;
import React from "react";
import { FaFutbol, FaUsers, FaTrophy, FaFlag } from "react-icons/fa";
import {
  FaShieldAlt,
  FaHeart,
  FaLightbulb,
  FaHandsHelping,
  FaStar,
} from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* Breadcrumb with Background Image */}
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
      {/* League Introduction */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                Since 2010
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                National Soccer Football League
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              The NSFL is the premier professional soccer league, bringing
              together the most talented players and passionate fans across the
              nation. We're committed to excellence both on and off the pitch.
            </p>

            {/* Animated divider */}
            <div className="relative mb-16">
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-transparent mx-auto"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Stats Cards with hover animations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <FaFutbol className="text-4xl" />,
                value: "12",
                label: "Teams",
              },
              {
                icon: <FaTrophy className="text-4xl" />,
                value: "14",
                label: "Seasons",
              },
              {
                icon: <FaUsers className="text-4xl" />,
                value: "2M+",
                label: "Fans",
              },
              {
                icon: <FaFlag className="text-4xl" />,
                value: "6",
                label: "Championships",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <div className="text-red-600 group-hover:text-red-700 transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                  {item.value}
                </h3>
                <p className="text-gray-500 font-medium text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[url('/image/breadcrum.jpg')] bg-cover bg-fixed relative">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Mission */}
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-white/20">
              <div className="flex items-center mb-8">
                <div className="mr-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-white">
                    <FaFutbol className="text-2xl" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                To promote the growth of soccer by providing world-class
                entertainment, developing elite athletes, and fostering
                community engagement through the beautiful game.
              </p>
              <ul className="space-y-3">
                {[
                  "Develop homegrown talent",
                  "Deliver unforgettable fan experiences",
                  "Set the standard for sports excellence",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1 mr-3">
                      <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-white/20">
              <div className="flex items-center mb-8">
                <div className="mr-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white">
                    <FaTrophy className="text-2xl" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                To become the most respected and competitive soccer league
                globally, recognized for our sportsmanship, innovation, and
                positive impact on communities.
              </p>
              <ul className="space-y-3">
                {[
                  "Expand to 16 teams by 2025",
                  "Develop world-class facilities",
                  "Inspire the next generation of players",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1 mr-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block mb-4 text-sm uppercase tracking-wider font-semibold text-red-600">
              Our Foundation
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Integrity",
                description:
                  "We uphold the highest standards of fairness, ethics, and sportsmanship.",
                icon: <FaShieldAlt className="text-2xl text-red-600" />,
              },
              {
                title: "Passion",
                description:
                  "We play and operate with heart, energy, and enthusiasm that inspires our fans.",
                icon: <FaHeart className="text-2xl text-red-600" />,
              },
              {
                title: "Innovation",
                description:
                  "We constantly evolve to enhance the game experience through technology.",
                icon: <FaLightbulb className="text-2xl text-red-600" />,
              },
              {
                title: "Community",
                description:
                  "We believe in giving back and using soccer as a force for positive change.",
                icon: <FaHandsHelping className="text-2xl text-red-600" />,
              },
              {
                title: "Excellence",
                description:
                  "We strive for the highest quality in everything we do.",
                icon: <FaStar className="text-2xl text-red-600" />,
              },
              {
                title: "Unity",
                description:
                  "We celebrate diversity and work together towards common goals.",
                icon: <FaUsers className="text-2xl text-red-600" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

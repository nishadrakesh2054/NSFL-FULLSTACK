import { Link } from "react-router-dom";
import React from "react";
import Carousel from "../components/Carousel";
import WrittingText from "../components/WrittingText";
import TeamFixture from "../components/TeamFixture";
import LiveMatch from "../components/LiveMatch";
import MatchFixture from "../components/MatchFixture";
import Highlight from "../components/Highlights";
const Home = () => {
  const highlights = [
    {
      id: 1,
      title: "Amazing Comeback Victory",
      description:
        "Team A scores 3 goals in the last 10 minutes to secure a dramatic win",
      image:
        "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "New Record Set",
      description:
        "Player X breaks the league scoring record with 30 goals in a season",
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Championship Race Heats Up",
      description:
        "Top teams separated by just 2 points with 5 games remaining",
      image:
        "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
    
      <Carousel />
      <WrittingText />
      <TeamFixture />
      <LiveMatch />
      <MatchFixture />
      <Highlight />

      {/* Highlights Section */}
      {/* <section className="py-16 w-full">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 text-center"
            data-aos="fade-up"
          >
            Latest Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight) => (
              <div
                key={highlight.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={highlight.id * 100}
              >
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/teams"
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-bold mb-4">Teams</h3>
              <p className="text-gray-600">View all teams and their profiles</p>
            </Link>
            <Link
              to="/table"
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-bold mb-4">League Table</h3>
              <p className="text-gray-600">Check current standings</p>
            </Link>
            <Link
              to="/news"
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold mb-4">Latest News</h3>
              <p className="text-gray-600">Stay updated with league news</p>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;

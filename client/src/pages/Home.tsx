import React from "react";
import Carousel from "../components/Carousel";
import WrittingText from "../components/WrittingText";
import TeamFixture from "../components/TeamFixture";
import LiveMatch from "../components/LiveMatch";
import MatchFixture from "../components/MatchFixture";
import Highlight from "../components/Highlights";
import Sponsers from "../components/Sponsers";
const Home = () => {
  return (
    <div className="min-h-screen">
      <Carousel />
      <WrittingText />
      <TeamFixture />
      <LiveMatch />
      <MatchFixture />
      <Highlight />
      <Sponsers />
    </div>
  );
};

export default Home;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import TeamPlayers from "./pages/TeamPlayers";
import PlayerDetails from "./pages/PlayerDetails";
import Fixture from "./pages/Fixture";
import Table from "./pages/Table";
import News from "./pages/News";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Topbar from "./components/Topbar";
import Highlights from "./pages/Highlights";
import Privacy from "./pages/Privacy";
import LiveMatchList from "./pages/LiveMatchList";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Topbar />
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:teamId" element={<TeamPlayers />} />
            <Route path="/teams/:teamId/players/:playerId" element={<PlayerDetails />} />
            <Route path="/fixture" element={<Fixture />} />
            <Route path="/table" element={<Table />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/highlights" element={<Highlights />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/live-match" element={<LiveMatchList/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

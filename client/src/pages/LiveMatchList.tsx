import React, { useState } from "react";
import {
  FaFutbol,
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaTrophy,
  FaVideo,
  FaChartLine,
  FaInfoCircle,
  FaExchangeAlt,
} from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

interface Match {
  id: number;
  homeTeam: {
    name: string;
    logo: string;
    score: number;
    possession: number;
    shots: number;
    shotsOnTarget: number;
    corners: number;
    fouls: number;
    yellowCards: number;
    redCards: number;
  };
  awayTeam: {
    name: string;
    logo: string;
    score: number;
    possession: number;
    shots: number;
    shotsOnTarget: number;
    corners: number;
    fouls: number;
    yellowCards: number;
    redCards: number;
  };
  time: string;
  status: "live" | "upcoming" | "completed";
  competition: string;
  venue: string;
  date: string;
  referee: string;
  matchEvents: {
    type: "goal" | "yellow" | "red" | "substitution" | "penalty" | "var";
    team: "home" | "away";
    player: string;
    assist?: string;
    description?: string;
  }[];
  liveStreamUrl?: string;
}

const LiveMatchList = () => {
  const [activeTab, setActiveTab] = useState<"live" | "upcoming" | "completed">(
    "live"
  );
  const [expandedMatchId, setExpandedMatchId] = useState<number | null>(null);

  const matches: Match[] = [
    {
      id: 1,
      homeTeam: {
        name: "Manang Marshyangdi",
        logo: "/image/6-98x98.png",
        score: 2,
        possession: 58,
        shots: 14,
        shotsOnTarget: 6,
        corners: 5,
        fouls: 12,
        yellowCards: 2,
        redCards: 0,
      },
      awayTeam: {
        name: "Machhindra FC",
        logo: "/image/7-98x98.png",
        score: 1,
        possession: 42,
        shots: 8,
        shotsOnTarget: 3,
        corners: 3,
        fouls: 15,
        yellowCards: 3,
        redCards: 1,
      },
      time: "75'",
      status: "live",
      competition: "NSFL 2024",
      venue: "Dasharath Stadium",
      date: "2024-05-15",
      referee: "John Smith",

      liveStreamUrl: "https://example.com/stream1",
      matchEvents: [
        {
          type: "goal",
          team: "home",
          player: "R. Shrestha",
          assist: "B. Gurung",
        },
        {
          type: "goal",
          team: "away",
          player: "S. Rai",
          description: "Penalty",
        },
        { type: "goal", team: "home", player: "A. Magar" },
        { type: "yellow", team: "away", player: "P. Lama" },
        {
          type: "red",
          team: "away",
          player: "D. Tamang",
          description: "Second yellow",
        },
      ],
    },
    {
      id: 2,
      homeTeam: {
        name: "Three Star Club",
        logo: "/image/8-98x98.png",
        score: 0,
        possession: 0,
        shots: 0,
        shotsOnTarget: 0,
        corners: 0,
        fouls: 0,
        yellowCards: 0,
        redCards: 0,
      },
      awayTeam: {
        name: "Kathmandu Rayzrs",
        logo: "/image/8-98x98.png",
        score: 0,
        possession: 0,
        shots: 0,
        shotsOnTarget: 0,
        corners: 0,
        fouls: 0,
        yellowCards: 0,
        redCards: 0,
      },
      time: "19:00",
      status: "upcoming",
      competition: "NSFL 2024",
      venue: "ANFA Complex",
      date: "2024-05-16",
      referee: "Jane Doe",

      matchEvents: [],
    },
    {
      id: 3,
      homeTeam: {
        name: "Church Boys United",
        logo: "/image/7-98x98.png",
        score: 3,
        possession: 52,
        shots: 18,
        shotsOnTarget: 8,
        corners: 7,
        fouls: 10,
        yellowCards: 1,
        redCards: 0,
      },
      awayTeam: {
        name: "Jawalakhel YC",
        logo: "/image/6-98x98.png",
        score: 2,
        possession: 48,
        shots: 12,
        shotsOnTarget: 5,
        corners: 4,
        fouls: 14,
        yellowCards: 2,
        redCards: 0,
      },
      time: "FT",
      status: "completed",
      competition: "NSFL 2024",
      venue: "Jawalakhel Ground",
      date: "2024-05-14",
      referee: "Mike Johnson",

      matchEvents: [
        { type: "goal", team: "home", player: "K. Thapa" },
        { type: "goal", team: "away", player: "R. Basnet" },
        { type: "yellow", team: "home", player: "S. Limbu" },
        { type: "goal", team: "home", player: "P. Rai" },
        { type: "goal", team: "away", player: "B. Gurung" },
        {
          type: "goal",
          team: "home",
          player: "D. Tamang",
          description: "Penalty",
        },
      ],
    },
  ];

  const filteredMatches = matches.filter((match) =>
    activeTab === "live"
      ? match.status === "live"
      : activeTab === "upcoming"
      ? match.status === "upcoming"
      : match.status === "completed"
  );

  const toggleMatchExpansion = (matchId: number) => {
    setExpandedMatchId(expandedMatchId === matchId ? null : matchId);
  };

  return (
    <>
      {/* Hero Section with Breadcrumb */}
      <div
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url('/image/parallex.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {activeTab === "live"
              ? "Live Matches"
              : activeTab === "upcoming"
              ? "Upcoming Matches"
              : "Match Results"}
          </h1>
          <div className="flex justify-center items-center text-white/90">
            <span className="hover:text-white transition-colors">Home</span>
            <FiChevronRight className="mx-2" />
            <span className="text-red-400 font-medium">
              {activeTab === "live"
                ? "Live Matches"
                : activeTab === "upcoming"
                ? "Upcoming"
                : "Results"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto py-16 px-4">
          {/* Match Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xxl shadow-sm p-2 inline-flex">
              {[
                { id: "live", label: "Live Matches", icon: <FaFutbol /> },
                { id: "upcoming", label: "Upcoming", icon: <FaCalendarAlt /> },
                { id: "completed", label: "Results", icon: <FaTrophy /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveTab(tab.id as "live" | "upcoming" | "completed")
                  }
                  className={`px-4 py-1 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-red-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Matches Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMatches.map((match) => (
              <div
                key={match.id}
                className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden ${
                  match.status === "live" ? "lg:col-span-3" : ""
                }`}
              >
                {/* Match Header */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-4 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FaTrophy className="text-yellow-500" />
                      <span className="text-sm font-medium text-gray-600">
                        {match.competition}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaClock className="text-gray-400" />
                      <span
                        className={`text-sm font-medium ${
                          match.status === "live"
                            ? "text-red-600"
                            : match.status === "completed"
                            ? "text-gray-600"
                            : "text-blue-600"
                        }`}
                      >
                        {match.status === "live"
                          ? `${match.time}`
                          : match.status === "upcoming"
                          ? match.time
                          : "FT"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Teams */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <img
                        src={match.homeTeam.logo}
                        alt={match.homeTeam.name}
                        className="w-12 h-12 object-contain"
                      />
                      <span className="font-medium">{match.homeTeam.name}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {match.status !== "upcoming" ? match.homeTeam.score : "-"}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={match.awayTeam.logo}
                        alt={match.awayTeam.name}
                        className="w-12 h-12 object-contain"
                      />
                      <span className="font-medium">{match.awayTeam.name}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {match.status !== "upcoming" ? match.awayTeam.score : "-"}
                    </div>
                  </div>
                </div>

                {/* Match Footer */}
                <div className="bg-gray-50 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <FaUsers className="text-gray-400" />
                    <span className="text-sm">{match.venue}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {match.status === "live" && (
                      <>
                        {match.liveStreamUrl && (
                          <a
                            href={match.liveStreamUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-red-600 text-white rounded-full text-sm font-medium flex items-center space-x-1 hover:bg-red-700 transition-colors"
                          >
                            <FaVideo className="text-xs" />
                            <span>Watch Live</span>
                          </a>
                        )}

                        <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                          LIVE
                        </span>
                      </>
                    )}
                    {match.status === "completed" && (
                      <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                        COMPLETED
                      </span>
                    )}
                  </div>
                </div>

                {/* Match Details - Always shown for Live Matches */}
                {match.status === "live" && (
                  <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Match Information */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                          <FaInfoCircle className="mr-2 text-blue-500" />
                          Match Information
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Date:</span>
                            <span>{match.date}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Venue:</span>
                            <span>{match.venue}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Referee:</span>
                            <span>{match.referee}</span>
                          </div>
                        </div>
                      </div>

                      {/* Match Statistics */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                          <FaChartLine className="mr-2 text-green-500" />
                          Match Statistics
                        </h4>
                        <div className="space-y-3">
                          {/* Possession */}
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>Possession</span>
                              <span>
                                {match.homeTeam.possession}% -{" "}
                                {match.awayTeam.possession}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{
                                  width: `${match.homeTeam.possession}%`,
                                }}
                              ></div>
                            </div>
                          </div>

                          {/* Shots */}
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>Shots</span>
                              <span>
                                {match.homeTeam.shots} - {match.awayTeam.shots}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{
                                  width: `${
                                    (match.homeTeam.shots /
                                      (match.homeTeam.shots +
                                        match.awayTeam.shots)) *
                                    100
                                  }%`,
                                }}
                              ></div>
                            </div>
                          </div>

                          {/* Shots on Target */}
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>Shots on Target</span>
                              <span>
                                {match.homeTeam.shotsOnTarget} -{" "}
                                {match.awayTeam.shotsOnTarget}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{
                                  width: `${
                                    (match.homeTeam.shotsOnTarget /
                                      (match.homeTeam.shotsOnTarget +
                                        match.awayTeam.shotsOnTarget)) *
                                    100
                                  }%`,
                                }}
                              ></div>
                            </div>
                          </div>

                          {/* Cards */}
                          <div className="flex space-x-4 pt-2">
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                              <span className="text-xs">
                                {match.homeTeam.yellowCards +
                                  match.awayTeam.yellowCards}{" "}
                                Yellow
                              </span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                              <span className="text-xs">
                                {match.homeTeam.redCards +
                                  match.awayTeam.redCards}{" "}
                                Red
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Match Events */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                          <FaExchangeAlt className="mr-2 text-purple-500" />
                          Match Events
                        </h4>
                        <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                          {match.matchEvents.length > 0 ? (
                            match.matchEvents.map((event, index) => (
                              <div
                                key={index}
                                className="flex items-start text-sm"
                              >
                                <div className="flex-1 flex items-start">
                                  <div
                                    className={`w-3 h-3 rounded-full mt-1 mr-2 flex-shrink-0 ${
                                      event.type === "goal"
                                        ? "bg-green-500"
                                        : event.type === "yellow"
                                        ? "bg-yellow-500"
                                        : event.type === "red"
                                        ? "bg-red-500"
                                        : "bg-blue-500"
                                    }`}
                                  ></div>
                                  <div>
                                    <span
                                      className={`font-medium ${
                                        event.team === "home"
                                          ? "text-blue-700"
                                          : "text-red-700"
                                      }`}
                                    >
                                      {event.player}
                                    </span>
                                    <span className="text-gray-600 ml-1 capitalize">
                                      {event.type}{" "}
                                      {event.assist &&
                                        `(assist: ${event.assist})`}
                                    </span>
                                    {event.description && (
                                      <div className="text-xs text-gray-500">
                                        {event.description}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="text-sm text-gray-500 text-center py-2">
                              No events recorded
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* No Matches Message */}
          {filteredMatches.length === 0 && (
            <div className="text-center py-12">
              <FaFutbol className="text-4xl text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No{" "}
                {activeTab === "live"
                  ? "Live"
                  : activeTab === "upcoming"
                  ? "Upcoming"
                  : "Completed"}{" "}
                Matches Found
              </h3>
              <p className="text-gray-600">
                {activeTab === "live"
                  ? "There are currently no matches being played. Check back later!"
                  : activeTab === "upcoming"
                  ? "No upcoming matches scheduled at the moment."
                  : "No match results available."}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LiveMatchList;

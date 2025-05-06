
import { useState } from "react";
import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaTrophy,
  FaCalendarDay,
  FaCalendarCheck,
  FaList,
} from "react-icons/fa";

interface Match {
  id: number;
  homeTeam: string;
  homeTeamLogo: string;
  awayTeam: string;
  awayTeamLogo: string;
  date: string;
  time: string;
  venue: string;
  status: "upcoming" | "completed";
  score?: {
    home: number;
    away: number;
  };
  scorers?: {
    home: string[];
    away: string[];
  };
}

const Matches = () => {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [activeFilter, setActiveFilter] = useState<
    "all" | "today" | "upcoming" | "results"
  >("all");

  const matches: Match[] = [
    {
      id: 1,
      homeTeam: "Blue Eagles FC",
      homeTeamLogo: "/image/img-01.png",
      awayTeam: "Red Lions FC",
      awayTeamLogo: "/image/6-98x98.png",
      date: new Date().toISOString().split("T")[0], // Today's date
      time: "15:00",
      venue: "Eagle Stadium",
      status: "upcoming",
    },
    {
      id: 2,
      homeTeam: "Green Tigers FC",
      homeTeamLogo: "/image/7-98x98.png",
      awayTeam: "Blue Eagles FC",
      awayTeamLogo: "/image/img-01.png",
      date: "2024-03-16",
      time: "18:00",
      venue: "Tiger Ground",
      status: "upcoming",
    },
    {
      id: 3,
      homeTeam: "Red Lions FC",
      homeTeamLogo: "/image/6-98x98.png",
      awayTeam: "Green Tigers FC",
      awayTeamLogo: "/image/7-98x98.png",
      date: "2024-03-10",
      time: "15:00",
      venue: "Lion Arena",
      status: "completed",
      score: {
        home: 2,
        away: 1,
      },
      scorers: {
        home: ["Robert Taylor (45')", "Thomas Anderson (78')"],
        away: ["Daniel White (62')"],
      },
    },
    {
      id: 4,
      homeTeam: "Golden Wolves FC",
      homeTeamLogo: "/image/6-98x98.png",
      awayTeam: "Silver Panthers FC",
      awayTeamLogo: "/image/8-98x98.png",
      date: "2024-03-09",
      time: "14:00",
      venue: "Wolf Park",
      status: "completed",
      score: {
        home: 1,
        away: 1,
      },
      scorers: {
        home: ["Michael Brown (33')"],
        away: ["James Wilson (89')"],
      },
    },
  ];

  const filterMatches = () => {
    const today = new Date().toISOString().split("T")[0];

    switch (activeFilter) {
      case "today":
        return matches.filter((match) => match.date === today);
      case "upcoming":
        return matches.filter(
          (match) => match.status === "upcoming" && match.date !== today
        );
      case "results":
        return matches.filter((match) => match.status === "completed");
      default:
        return matches;
    }
  };

  const filteredMatches = filterMatches();

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const isToday = (dateString: string) => {
    const today = new Date().toISOString().split("T")[0];
    return dateString === today;
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
            NSFL Matches
          </h1>
          <div className="text-white flex justify-center items-center space-x-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-red-500">League Fixtures</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            Match Schedule
          </h1>
          <div className="flex space-x-2">
            <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
              Season 2023/24
            </span>
            <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full font-medium">
              Matchday {matches.length}
            </span>
          </div>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveFilter("all")}
            className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
              activeFilter === "all"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            <FaList className="mr-2" />
            All Fixtures
          </button>
          <button
            onClick={() => setActiveFilter("today")}
            className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
              activeFilter === "today"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            <FaCalendarDay className="mr-2" />
            Today's Matches
          </button>
          <button
            onClick={() => setActiveFilter("upcoming")}
            className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
              activeFilter === "upcoming"
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            <FaClock className="mr-2" />
            Upcoming Fixtures
          </button>
          <button
            onClick={() => setActiveFilter("results")}
            className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
              activeFilter === "results"
                ? "bg-red-600 text-white border-red-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            <FaCalendarCheck className="mr-2" />
            Results
          </button>
        </div>

        {/* Matches List */}
        <div className="space-y-4">
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match) => (
              <div
                key={match.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-100 overflow-hidden"
                onClick={() => setSelectedMatch(match)}
              >
                <div className="p-6">
                  {isToday(match.date) && (
                    <div className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full inline-block mb-3">
                      Today's Match
                    </div>
                  )}
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Home Team */}
                    <div className="flex-1 flex flex-col items-center md:items-end mb-4 md:mb-0">
                      <div className="flex items-center">
                        <img
                          src={match.homeTeamLogo}
                          alt={match.homeTeam}
                          className="w-12 h-12 object-contain mr-3"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "/images/default-logo.png";
                          }}
                        />
                        <h3 className="text-xl font-bold text-right">
                          {match.homeTeam}
                        </h3>
                      </div>
                      <div className="flex items-center mt-2 text-gray-600 text-sm">
                        <FaMapMarkerAlt className="mr-1" />
                        <span>{match.venue}</span>
                      </div>
                    </div>

                    {/* Match Info */}
                    <div className="mx-4 text-center py-4 px-6 bg-gray-50 rounded-lg min-w-[180px]">
                      {match.status === "completed" && match.score ? (
                        <>
                          <div className="text-3xl font-bold flex items-center justify-center">
                            <span className="text-blue-800">
                              {match.score.home}
                            </span>
                            <span className="mx-2">-</span>
                            <span className="text-blue-800">
                              {match.score.away}
                            </span>
                          </div>
                          <div className="text-xs uppercase font-semibold text-red-600 mt-1">
                            Full Time
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-2xl font-bold text-blue-800">
                            {match.time}
                          </div>
                          <div className="text-xs uppercase font-semibold text-green-600 mt-1">
                            {isToday(match.date) ? "Today" : "Upcoming"}
                          </div>
                        </>
                      )}
                      <div className="flex items-center justify-center mt-2 text-gray-600 text-sm">
                        <FaCalendarAlt className="mr-1" />
                        <span>{formatDate(match.date)}</span>
                      </div>
                    </div>

                    {/* Away Team */}
                    <div className="flex-1 flex flex-col items-center md:items-start mt-4 md:mt-0">
                      <div className="flex items-center">
                        <h3 className="text-xl font-bold text-left">
                          {match.awayTeam}
                        </h3>
                        <img
                          src={match.awayTeamLogo}
                          alt={match.awayTeam}
                          className="w-12 h-12 object-contain ml-3"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "/images/default-logo.png";
                          }}
                        />
                      </div>
                      <div className="flex items-center mt-2 text-gray-600 text-sm">
                        <FaClock className="mr-1" />
                        <span>{match.time} Local</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <p className="text-gray-600">
                No {activeFilter === "all" ? "" : activeFilter} matches found.
              </p>
            </div>
          )}
        </div>

        {/* Match Details Modal */}
     
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">
              <FaTrophy className="inline mr-2 text-yellow-500" /> Top Scorers
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100 sticky top-0">
                <tr>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Player
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Team
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Goals
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Assists
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    id: 1,
                    name: "Robert Taylor",
                    team: "Red Lions FC",
                    teamLogo: "/image/6-98x98.png",
                    goals: 8,
                    assists: 3,
                    avatar: "/image/img-1-2.jpg",
                  },
                  {
                    id: 2,
                    name: "Daniel White",
                    team: "Green Tigers FC",
                    teamLogo: "/image/7-98x98.png",
                    goals: 7,
                    assists: 2,
                    avatar: "/image/img-1-3.jpg",
                  },
                  {
                    id: 3,
                    name: "Thomas Anderson",
                    team: "Red Lions FC",
                    teamLogo: "/image/6-98x98.png",
                    goals: 6,
                    assists: 4,
                    avatar: "/image/img-1-4.jpg",
                  },
                ].map((player) => (
                  <tr
                    key={player.id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-700">
                      {player.id}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={player.avatar}
                          alt={player.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="font-medium text-gray-800">
                          {player.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={player.teamLogo}
                          alt={player.team}
                          className="w-6 h-6 object-cover"
                        />
                        <span className="text-gray-700">{player.team}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-blue-700">
                      {player.goals}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {player.assists}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Matches;

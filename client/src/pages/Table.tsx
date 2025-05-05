import React, { useState } from "react";
import {
  FaTrophy,
  FaArrowCircleUp,
  FaArrowCircleDown,
  FaCrown,
  FaMedal,
  FaHome,
  FaRoad,
  FaChartLine,
} from "react-icons/fa";

interface TeamStanding {
  position: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form?: string[]; // Array of last 5 match results (W, D, L)
  promotion?: boolean;
  relegation?: boolean;
  homeRecord?: {
    played: number;
    won: number;
    drawn: number;
    lost: number;
    goalsFor: number;
    goalsAgainst: number;
  };
  awayRecord?: {
    played: number;
    won: number;
    drawn: number;
    lost: number;
    goalsFor: number;
    goalsAgainst: number;
  };
  logo?: string;
}

const Table = () => {
  const [activeFilter, setActiveFilter] = useState("overall");

  const standings: TeamStanding[] = [
    {
      position: 1,
      team: "Blue Eagles FC",
      played: 10,
      won: 7,
      drawn: 2,
      lost: 1,
      goalsFor: 22,
      goalsAgainst: 8,
      goalDifference: 14,
      points: 23,
      form: ["W", "W", "D", "W", "L"],
      promotion: true,
      homeRecord: {
        played: 5,
        won: 4,
        drawn: 1,
        lost: 0,
        goalsFor: 12,
        goalsAgainst: 3,
      },
      awayRecord: {
        played: 5,
        won: 3,
        drawn: 1,
        lost: 1,
        goalsFor: 10,
        goalsAgainst: 5,
      },
      logo: "/image/6-98x98.png",
    },
    {
      position: 2,
      team: "Red Lions FC",
      played: 10,
      won: 6,
      drawn: 3,
      lost: 1,
      goalsFor: 18,
      goalsAgainst: 10,
      goalDifference: 8,
      points: 21,
      form: ["W", "D", "W", "W", "D"],
      promotion: true,
      homeRecord: {
        played: 5,
        won: 4,
        drawn: 1,
        lost: 0,
        goalsFor: 11,
        goalsAgainst: 4,
      },
      awayRecord: {
        played: 5,
        won: 2,
        drawn: 2,
        lost: 1,
        goalsFor: 7,
        goalsAgainst: 6,
      },
      logo: "/image/6-98x98.png",
    },
    {
      position: 3,
      team: "Green Tigers FC",
      played: 10,
      won: 5,
      drawn: 2,
      lost: 3,
      goalsFor: 15,
      goalsAgainst: 12,
      goalDifference: 3,
      points: 17,
      form: ["L", "W", "D", "W", "W"],
      homeRecord: {
        played: 5,
        won: 3,
        drawn: 1,
        lost: 1,
        goalsFor: 9,
        goalsAgainst: 5,
      },
      awayRecord: {
        played: 5,
        won: 2,
        drawn: 1,
        lost: 2,
        goalsFor: 6,
        goalsAgainst: 7,
      },
      logo: "/image/6-98x98.png",
    },
    {
      position: 4,
      team: "Golden Wolves FC",
      played: 10,
      won: 4,
      drawn: 3,
      lost: 3,
      goalsFor: 14,
      goalsAgainst: 12,
      goalDifference: 2,
      points: 15,
      form: ["W", "L", "D", "D", "W"],
      homeRecord: {
        played: 5,
        won: 3,
        drawn: 1,
        lost: 1,
        goalsFor: 8,
        goalsAgainst: 5,
      },
      awayRecord: {
        played: 5,
        won: 1,
        drawn: 2,
        lost: 2,
        goalsFor: 6,
        goalsAgainst: 7,
      },
      logo: "/image/6-98x98.png",
    },
    {
      position: 5,
      team: "Silver Panthers FC",
      played: 10,
      won: 3,
      drawn: 4,
      lost: 3,
      goalsFor: 12,
      goalsAgainst: 11,
      goalDifference: 1,
      points: 13,
      form: ["D", "D", "W", "L", "D"],
      homeRecord: {
        played: 5,
        won: 2,
        drawn: 2,
        lost: 1,
        goalsFor: 7,
        goalsAgainst: 5,
      },
      awayRecord: {
        played: 5,
        won: 1,
        drawn: 2,
        lost: 2,
        goalsFor: 5,
        goalsAgainst: 6,
      },
      logo: "/image/6-98x98.png",
    },
    {
      position: 6,
      team: "Black Rhinos FC",
      played: 10,
      won: 2,
      drawn: 3,
      lost: 5,
      goalsFor: 10,
      goalsAgainst: 15,
      goalDifference: -5,
      points: 9,
      form: ["L", "L", "D", "W", "L"],
      homeRecord: {
        played: 5,
        won: 2,
        drawn: 1,
        lost: 2,
        goalsFor: 6,
        goalsAgainst: 6,
      },
      awayRecord: {
        played: 5,
        won: 0,
        drawn: 2,
        lost: 3,
        goalsFor: 4,
        goalsAgainst: 9,
      },
      logo: "/image/6-98x98.png",
    },
    {
      position: 7,
      team: "White Sharks FC",
      played: 10,
      won: 1,
      drawn: 3,
      lost: 6,
      goalsFor: 8,
      goalsAgainst: 18,
      goalDifference: -10,
      points: 6,
      form: ["L", "D", "L", "L", "W"],
      relegation: true,
      homeRecord: {
        played: 5,
        won: 1,
        drawn: 2,
        lost: 2,
        goalsFor: 5,
        goalsAgainst: 7,
      },
      awayRecord: {
        played: 5,
        won: 0,
        drawn: 1,
        lost: 4,
        goalsFor: 3,
        goalsAgainst: 11,
      },
      logo: "/image/6-98x98.png",
    },
    {
      position: 8,
      team: "Yellow Bears FC",
      played: 10,
      won: 0,
      drawn: 3,
      lost: 7,
      goalsFor: 5,
      goalsAgainst: 20,
      goalDifference: -15,
      points: 3,
      form: ["L", "L", "D", "L", "L"],
      relegation: true,
      homeRecord: {
        played: 5,
        won: 0,
        drawn: 2,
        lost: 3,
        goalsFor: 3,
        goalsAgainst: 8,
      },
      awayRecord: {
        played: 5,
        won: 0,
        drawn: 1,
        lost: 4,
        goalsFor: 2,
        goalsAgainst: 12,
      },
      logo: "/image/6-98x98.png",
    },
  ];

  const getRowColor = (
    position: number,
    promotion?: boolean,
    relegation?: boolean
  ) => {
    if (promotion)
      return "bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500";
    if (relegation)
      return "bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500";
    if (position <= 3)
      return "bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500";
    return "";
  };

  const getBadge = (
    position: number,
    promotion?: boolean,
    relegation?: boolean
  ) => {
    if (position === 1)
      return (
        <span className="ml-2 inline-flex items-center text-sm font-medium bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
          <FaCrown className="mr-1" /> Champions
        </span>
      );
    if (promotion)
      return (
        <span className="ml-2 inline-flex items-center text-sm font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
          <FaArrowCircleUp className="mr-1" /> Promotion
        </span>
      );
    if (position === 2 || position === 3)
      return (
        <span className="ml-2 inline-flex items-center text-sm font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
          <FaMedal className="mr-1" /> Europa League
        </span>
      );
    if (relegation)
      return (
        <span className="ml-2 inline-flex items-center text-sm font-medium bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
          <FaArrowCircleDown className="mr-1" /> Relegation
        </span>
      );
    return null;
  };

  const renderFormIndicator = (form: string[]) => {
    return (
      <div className="flex space-x-1">
        {form.map((result, i) => (
          <span
            key={i}
            className={` w-4 h-4 rounded-full text-xs flex items-center justify-center 
              ${
                result === "W"
                  ? "bg-green-500 text-white"
                  : result === "D"
                  ? "bg-yellow-500 text-white"
                  : "bg-red-500 text-white"
              }`}
          >
            {result}
          </span>
        ))}
      </div>
    );
  };

  const renderTeamCell = (team: TeamStanding) => {
    return (
      <div className="flex items-center">
        <span className="text-xl mr-3">
          <img src={team.logo} alt={team.team} className="w-6 h-6" />
        </span>
        <span className="font-semibold">{team.team}</span>
        {getBadge(team.position, team.promotion, team.relegation)}
      </div>
    );
  };

  const renderStatsBasedOnFilter = (team: TeamStanding) => {
    switch (activeFilter) {
      case "home":
        return (
          <>
            <td className="px-4 py-4 text-center">{team.homeRecord?.played}</td>
            <td className="px-4 py-4 text-center font-semibold">
              {team.homeRecord?.won}
            </td>
            <td className="px-4 py-4 text-center">{team.homeRecord?.drawn}</td>
            <td className="px-4 py-4 text-center">{team.homeRecord?.lost}</td>
            <td className="px-4 py-4 text-center">
              {team.homeRecord?.goalsFor}
            </td>
            <td className="px-4 py-4 text-center">
              {team.homeRecord?.goalsAgainst}
            </td>
            <td className="px-4 py-4 text-center font-semibold">
              {team.homeRecord &&
              team.homeRecord.goalsFor - team.homeRecord.goalsAgainst >= 0
                ? `+${team.homeRecord.goalsFor - team.homeRecord.goalsAgainst}`
                : team.homeRecord &&
                  team.homeRecord.goalsFor - team.homeRecord.goalsAgainst}
            </td>
            <td className="px-4 py-4 text-center font-bold text-gray-900">
              {team.homeRecord &&
                team.homeRecord.won * 3 + team.homeRecord.drawn}
            </td>
          </>
        );
      case "away":
        return (
          <>
            <td className="px-4 py-4 text-center">{team.awayRecord?.played}</td>
            <td className="px-4 py-4 text-center font-semibold">
              {team.awayRecord?.won}
            </td>
            <td className="px-4 py-4 text-center">{team.awayRecord?.drawn}</td>
            <td className="px-4 py-4 text-center">{team.awayRecord?.lost}</td>
            <td className="px-4 py-4 text-center">
              {team.awayRecord?.goalsFor}
            </td>
            <td className="px-4 py-4 text-center">
              {team.awayRecord?.goalsAgainst}
            </td>
            <td className="px-4 py-4 text-center font-semibold">
              {team.awayRecord &&
              team.awayRecord.goalsFor - team.awayRecord.goalsAgainst >= 0
                ? `+${team.awayRecord.goalsFor - team.awayRecord.goalsAgainst}`
                : team.awayRecord &&
                  team.awayRecord.goalsFor - team.awayRecord.goalsAgainst}
            </td>
            <td className="px-4 py-4 text-center font-bold text-gray-900">
              {team.awayRecord &&
                team.awayRecord.won * 3 + team.awayRecord.drawn}
            </td>
          </>
        );
      case "form":
        return (
          <>
            <td className="px-4 py-4 text-center">{team.played}</td>
            <td className="px-4 py-4 text-center font-semibold">{team.won}</td>
            <td className="px-4 py-4 text-center">{team.drawn}</td>
            <td className="px-4 py-4 text-center">{team.lost}</td>
            <td className="px-4 py-4 text-center">{team.goalsFor}</td>
            <td className="px-4 py-4 text-center">{team.goalsAgainst}</td>
            <td className="px-4 py-4 text-center font-semibold">
              {team.goalDifference >= 0
                ? `+${team.goalDifference}`
                : team.goalDifference}
            </td>
            <td className="px-4 py-4 text-center font-bold text-gray-900">
              {team.points}
            </td>
          </>
        );
      default: // overall
        return (
          <>
            <td className="px-4 py-4 text-center">{team.played}</td>
            <td className="px-4 py-4 text-center font-semibold">{team.won}</td>
            <td className="px-4 py-4 text-center">{team.drawn}</td>
            <td className="px-4 py-4 text-center">{team.lost}</td>
            <td className="px-4 py-4 text-center">{team.goalsFor}</td>
            <td className="px-4 py-4 text-center">{team.goalsAgainst}</td>
            <td className="px-4 py-4 text-center font-semibold">
              {team.goalDifference >= 0
                ? `+${team.goalDifference}`
                : team.goalDifference}
            </td>
            <td className="px-4 py-4 text-center font-bold text-gray-900">
              {team.points}
            </td>
          </>
        );
    }
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
            NSFL League Standings
          </h1>
          <div className="text-white flex justify-center items-center space-x-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-red-500">League Table</span>
          </div>
    
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            League Table
          </h1>
          <div className="flex space-x-2">
            <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
              Season 2023/24
            </span>
            <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Matchday 10
            </span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveFilter("overall")}
            className={`flex items-center px-4 py-2 rounded-lg border ${
              activeFilter === "overall"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            <FaTrophy className="mr-2" />
            Overall
          </button>
          <button
            onClick={() => setActiveFilter("home")}
            className={`flex items-center px-4 py-2 rounded-lg border ${
              activeFilter === "home"
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            <FaHome className="mr-2" />
            Home
          </button>
          <button
            onClick={() => setActiveFilter("away")}
            className={`flex items-center px-4 py-2 rounded-lg border ${
              activeFilter === "away"
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            <FaRoad className="mr-2" />
            Away
          </button>
          <button
            onClick={() => setActiveFilter("form")}
            className={`flex items-center px-4 py-2 rounded-lg border ${
              activeFilter === "form"
                ? "bg-orange-600 text-white border-orange-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            <FaChartLine className="mr-2" />
            Form
          </button>
        </div>

        <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white">
                <tr>
                  {[
                    "#",
                    "Team",
                    "P",
                    "W",
                    "D",
                    "L",
                    "GF",
                    "GA",
                    "GD",
                    "Pts",
                    "Form",
                  ].map((heading, i) => (
                    <th
                      key={i}
                      className={`px-4 py-3 text-xs font-semibold tracking-wider text-center ${
                        i === 1 ? "text-left" : ""
                      }`}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {standings.map((team) => (
                  <tr
                    key={team.position}
                    className={`hover:bg-gray-50 transition ${getRowColor(
                      team.position,
                      team.promotion,
                      team.relegation
                    )}`}
                  >
                    <td className="px-4 py-4 text-center font-bold text-gray-900">
                      {team.position}
                    </td>
                    <td className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {renderTeamCell(team)}
                    </td>
                    {renderStatsBasedOnFilter(team)}
                    <td className="px-4 py-4 text-center">
                      {team.form && renderFormIndicator(team.form)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Form Guide */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-3">Form Guide</h3>
          <div className="flex space-x-6">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
              <span className="text-sm">Win</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
              <span className="text-sm">Draw</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
              <span className="text-sm">Loss</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;

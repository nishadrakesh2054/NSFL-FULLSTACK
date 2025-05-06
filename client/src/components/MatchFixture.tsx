

import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";

const MatchFixture = () => {
  const teams = [
    {
      id: 1,
      name: "Gems",
      played: 10,
      won: 7,
      drawn: 2,
      lost: 1,
      points: 23,
      logo: "/image/img-03.png",
      form: ["W", "W", "D", "W", "L"],
    },
    {
      id: 2,
      name: "Thunderbolts",
      played: 10,
      won: 6,
      drawn: 3,
      lost: 1,
      points: 21,
      logo: "/image/img-04.png",
      form: ["W", "D", "W", "D", "W"],
    },
    {
      id: 3,
      name: "Eagles",
      played: 10,
      won: 5,
      drawn: 4,
      lost: 1,
      points: 19,
      logo: "/image/img-03.png",
      form: ["D", "W", "D", "L", "W"],
    },
    {
      id: 4,
      name: "Lions",
      played: 10,
      won: 4,
      drawn: 3,
      lost: 3,
      points: 15,
      logo: "/image/img-04.png",
      form: ["L", "W", "D", "W", "D"],
    },
    {
      id: 5,
      name: "Tigers",
      played: 10,
      won: 3,
      drawn: 4,
      lost: 3,
      points: 13,
      logo: "/image/img-03.png",
      form: ["D", "L", "W", "D", "L"],
    },
  ];

  const upcomingMatches = [
    {
      id: 1,
      teamA: "Gems",
      teamB: "Eagles",
      date: "15 Feb 2024",
      time: "19:00",
      venue: "Stadium A",
      teamALogo: "/image/img-03.png",
      teamBLogo: "/image/img-03.png",
    },
    {
      id: 2,
      teamA: "Thunderbolts",
      teamB: "Lions",
      date: "16 Feb 2024",
      time: "20:00",
      venue: "Stadium B",
      teamALogo: "/image/img-04.png",
      teamBLogo: "/image/img-04.png",
    },
    {
      id: 3,
      teamA: "Tigers",
      teamB: "Eagles",
      date: "17 Feb 2024",
      time: "18:00",
      venue: "Stadium C",
      teamALogo: "/image/img-03.png",
      teamBLogo: "/image/img-03.png",
    },
  ];

  const getFormColor = (result) => {
    switch (result) {
      case "W":
        return "bg-green-500";
      case "D":
        return "bg-yellow-500";
      case "L":
        return "bg-red-500";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Points Table */}
          <div className="lg:col-span-2" data-aos="fade-right">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
              <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-800">
                <h2 className="text-2xl font-bold text-white uppercase">
                  League Standings
                </h2>
                <p className="text-blue-100 mt-1">
                  Current season points table
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr className="text-left text-sm font-medium text-gray-700">
                      <th className="p-4 w-12">#</th>
                      <th className="p-4">Team</th>
                      <th className="p-4 text-center w-16">P</th>
                      <th className="p-4 text-center w-16">W</th>
                      <th className="p-4 text-center w-16">D</th>
                      <th className="p-4 text-center w-16">L</th>
                      <th className="p-4 text-center w-20">Form</th>
                      <th className="p-4 text-center w-20 font-bold">PTS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {teams.map((team, index) => (
                      <tr
                        key={team.id}
                        className="hover:bg-blue-50 transition-colors"
                        data-aos="fade-up"
                        data-aos-delay={index * 50}
                      >
                        <td className="p-4 font-medium text-gray-700">
                          {index + 1}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={team.logo}
                              alt={team.name}
                              className="w-8 h-8 object-contain"
                            />
                            <span className="font-medium text-gray-800">
                              {team.name}
                            </span>
                          </div>
                        </td>
                        <td className="p-4 text-center text-gray-600">
                          {team.played}
                        </td>
                        <td className="p-4 text-center text-gray-600">
                          {team.won}
                        </td>
                        <td className="p-4 text-center text-gray-600">
                          {team.drawn}
                        </td>
                        <td className="p-4 text-center text-gray-600">
                          {team.lost}
                        </td>
                        <td className="p-4">
                          <div className="flex justify-center gap-1">
                            {team.form.map((result, i) => (
                              <span
                                key={i}
                                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs text-white ${getFormColor(
                                  result
                                )}`}
                              >
                                {result}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="p-4 text-center font-bold text-blue-700">
                          {team.points}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Upcoming Matches */}
          <div data-aos="fade-left">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
              <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-800">
                <h2 className="text-2xl font-bold text-white uppercase">
                  Upcoming Matches
                </h2>
                <p className="text-blue-100 mt-1">Next week's fixtures</p>
              </div>
              <div className="divide-y divide-gray-200">
                {upcomingMatches.map((match, index) => (
                  <div
                    key={match.id}
                    className="p-6 hover:bg-blue-50 transition-colors"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-blue-600">
                        <FaCalendarAlt className="text-sm" />
                        <span className="text-sm font-medium">
                          {match.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600">
                        <FaClock className="text-sm" />
                        <span className="text-sm font-medium">
                          {match.time}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={match.teamALogo}
                          alt={match.teamA}
                          className="w-10 h-10 object-contain"
                        />
                        <span className="font-medium text-gray-800">
                          {match.teamA}
                        </span>
                      </div>
                      <span className="text-gray-400 font-bold mx-2">VS</span>
                      <div className="flex items-center gap-3">
                        <img
                          src={match.teamBLogo}
                          alt={match.teamB}
                          className="w-10 h-10 object-contain"
                        />
                        <span className="font-medium text-gray-800">
                          {match.teamB}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <FaMapMarkerAlt />
                        <span>{match.venue}</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 transition-colors">
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 text-center border-t border-gray-200">
                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  View All Fixtures <FaChevronRight className="inline ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchFixture;

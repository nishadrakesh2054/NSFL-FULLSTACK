// import React from "react";
// import { FaTrophy, FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

// interface TeamStanding {
//   position: number;
//   team: string;
//   played: number;
//   won: number;
//   drawn: number;
//   lost: number;
//   goalsFor: number;
//   goalsAgainst: number;
//   goalDifference: number;
//   points: number;
// }

// const Table = () => {
//   const standings: TeamStanding[] = [
//     {
//       position: 1,
//       team: "Blue Eagles FC",
//       played: 10,
//       won: 7,
//       drawn: 2,
//       lost: 1,
//       goalsFor: 22,
//       goalsAgainst: 8,
//       goalDifference: 14,
//       points: 23,
//     },
//     {
//       position: 2,
//       team: "Red Lions FC",
//       played: 10,
//       won: 6,
//       drawn: 3,
//       lost: 1,
//       goalsFor: 18,
//       goalsAgainst: 10,
//       goalDifference: 8,
//       points: 21,
//     },
//     {
//       position: 3,
//       team: "Green Tigers FC",
//       played: 10,
//       won: 5,
//       drawn: 2,
//       lost: 3,
//       goalsFor: 15,
//       goalsAgainst: 12,
//       goalDifference: 3,
//       points: 17,
//     },
//   ];

//   const getRowColor = (position: number) => {
//     if (position === 1) return "bg-gradient-to-r from-green-50 to-green-100";
//     if (position === 2) return "bg-gradient-to-r from-green-50 to-green-100";
//     if (position === 3) return "bg-gradient-to-r from-blue-50 to-blue-100";
//     return "";
//   };

//   const getBadge = (position: number) => {
//     if (position === 1)
//       return (
//         <span className="ml-2 inline-flex items-center text-sm text-yellow-600">
//           <FaTrophy className="mr-1 text-yellow-500" /> Champions
//         </span>
//       );
//     if (position === 2)
//       return (
//         <span className="ml-2 text-sm text-green-600 inline-flex items-center">
//           <FaArrowCircleUp className="mr-1" /> Promotion
//         </span>
//       );
//     if (position === 3)
//       return (
//         <span className="ml-2 text-sm text-blue-600 inline-flex items-center">
//           <FaArrowCircleUp className="mr-1" /> Europa League
//         </span>
//       );
//     return null;
//   };

//   return (
//     <>
//       <div
//         className="relative py-24 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/image/about.jpeg')",
//         }}
//       >
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             NSFL League Standings
//           </h1>
//           <div className="text-white flex justify-center items-center space-x-2">
//             <span>
//               {" "}
//               We'd love to hear from you! Reach out for inquiries, partnerships,
//               or just to say hello.
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto px-4 py-10">
//         <h1
//           className="text-4xl font-extrabold mb-10 text-center text-gray-800"
//           data-aos="fade-up"
//         >
//           League Table
//         </h1>

//         <div className="bg-white shadow-xl rounded-xl overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-sm text-gray-700">
//               <thead className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white">
//                 <tr>
//                   {[
//                     "Pos",
//                     "Team",
//                     "P",
//                     "W",
//                     "D",
//                     "L",
//                     "GF",
//                     "GA",
//                     "GD",
//                     "Pts",
//                   ].map((heading, i) => (
//                     <th
//                       key={i}
//                       className="px-4 py-3 text-xs font-semibold tracking-wider text-center"
//                     >
//                       {heading}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {standings.map((team) => (
//                   <tr
//                     key={team.position}
//                     className={`hover:bg-gray-50 transition ${getRowColor(
//                       team.position
//                     )}`}
//                   >
//                     <td className="text-center py-3 font-bold text-gray-900">
//                       {team.position}
//                     </td>
//                     <td className="text-left px-4 py-3 font-medium text-gray-800 whitespace-nowrap">
//                       {team.team}
//                       {getBadge(team.position)}
//                     </td>
//                     <td className="text-center">{team.played}</td>
//                     <td className="text-center">{team.won}</td>
//                     <td className="text-center">{team.drawn}</td>
//                     <td className="text-center">{team.lost}</td>
//                     <td className="text-center">{team.goalsFor}</td>
//                     <td className="text-center">{team.goalsAgainst}</td>
//                     <td className="text-center">
//                       {team.goalDifference >= 0
//                         ? `+${team.goalDifference}`
//                         : team.goalDifference}
//                     </td>
//                     <td className="text-center font-bold text-gray-900">
//                       {team.points}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Legend Cards */}
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="flex items-start p-6 rounded-xl bg-green-50 shadow-sm">
//             <FaTrophy className="text-green-500 text-xl mr-3 mt-1" />
//             <div>
//               <h3 className="font-bold text-green-800">Champions League</h3>
//               <p className="text-sm text-green-700">Top 2 teams qualify</p>
//             </div>
//           </div>
//           <div className="flex items-start p-6 rounded-xl bg-blue-50 shadow-sm">
//             <FaArrowCircleUp className="text-blue-500 text-xl mr-3 mt-1" />
//             <div>
//               <h3 className="font-bold text-blue-800">Europa League</h3>
//               <p className="text-sm text-blue-700">3rd place qualifies</p>
//             </div>
//           </div>
//           <div className="flex items-start p-6 rounded-xl bg-red-50 shadow-sm">
//             <FaArrowCircleDown className="text-red-500 text-xl mr-3 mt-1" />
//             <div>
//               <h3 className="font-bold text-red-800">Relegation</h3>
//               <p className="text-sm text-red-700">Bottom 2 teams relegated</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Table;

import React from "react";
import {
  FaTrophy,
  FaArrowCircleUp,
  FaArrowCircleDown,
  FaCrown,
  FaMedal,
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
}

const Table = () => {
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
            className={`inline-block w-4 h-4 rounded-full text-xs flex items-center justify-center 
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

  return (
    <>
      <div
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/image/about.jpeg')",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            NSFL League Standings
          </h1>
          <p className="text-white max-w-2xl mx-auto text-lg">
            Current season standings with team performance statistics and recent
            form.
          </p>
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
                      <div className="flex items-center">
                        <span className="font-semibold">{team.team}</span>
                        {getBadge(
                          team.position,
                          team.promotion,
                          team.relegation
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">{team.played}</td>
                    <td className="px-4 py-4 text-center font-semibold">
                      {team.won}
                    </td>
                    <td className="px-4 py-4 text-center">{team.drawn}</td>
                    <td className="px-4 py-4 text-center">{team.lost}</td>
                    <td className="px-4 py-4 text-center">{team.goalsFor}</td>
                    <td className="px-4 py-4 text-center">
                      {team.goalsAgainst}
                    </td>
                    <td className="px-4 py-4 text-center font-semibold">
                      {team.goalDifference >= 0
                        ? `+${team.goalDifference}`
                        : team.goalDifference}
                    </td>
                    <td className="px-4 py-4 text-center font-bold text-gray-900">
                      {team.points}
                    </td>
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

// import { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import React from "react";
// import {
//   FaArrowLeft,
//   FaRunning,
//   FaFutbol,
//   FaFlag,
//   FaBirthdayCake,
//   FaRuler,
//   FaWeight,
//   FaShieldAlt,
//   FaExclamationTriangle,
// } from "react-icons/fa";

// interface Player {
//   id: number;
//   name: string;
//   position: string;
//   number: number;
//   nationality: string;
//   age: number;
//   height: string;
//   weight: string;
//   goals: number;
//   assists: number;
//   yellowCards: number;
//   redCards: number;
//   matchesPlayed: number;
//   minutesPlayed: number;
//   passAccuracy: number;
//   tackles: number;
//   cleanSheets: number;
// }

// interface Team {
//   id: number;
//   name: string;
//   logo: string;
//   manager: string;
//   founded: number;
//   stadium: string;
//   players: Player[];
// }

// const PlayerDetails = () => {
//   const { teamId, playerId } = useParams();
//   const [player, setPlayer] = useState<Player | null>(null);
//   const [team, setTeam] = useState<Team | null>(null);

//   // Mock data - in a real app, this would come from an API
//   const teams: Team[] = [
//     {
//       id: 1,
//       name: "Blue Eagles FC",
//       logo: "https://via.placeholder.com/150",
//       manager: "John Smith",
//       founded: 1920,
//       stadium: "Eagle Stadium",
//       players: [
//         {
//           id: 1,
//           name: "David Johnson",
//           position: "Forward",
//           number: 9,
//           nationality: "England",
//           age: 28,
//           height: "1.85m",
//           weight: "78kg",
//           goals: 15,
//           assists: 8,
//           yellowCards: 2,
//           redCards: 0,
//           matchesPlayed: 25,
//           minutesPlayed: 2150,
//           passAccuracy: 82,
//           tackles: 12,
//           cleanSheets: 0,
//         },
//         {
//           id: 2,
//           name: "Michael Brown",
//           position: "Midfielder",
//           number: 8,
//           nationality: "Spain",
//           age: 25,
//           height: "1.78m",
//           weight: "72kg",
//           goals: 5,
//           assists: 12,
//           yellowCards: 3,
//           redCards: 0,
//           matchesPlayed: 28,
//           minutesPlayed: 2450,
//           passAccuracy: 88,
//           tackles: 45,
//           cleanSheets: 0,
//         },
//         {
//           id: 3,
//           name: "James Wilson",
//           position: "Defender",
//           number: 4,
//           nationality: "Brazil",
//           age: 31,
//           height: "1.92m",
//           weight: "85kg",
//           goals: 2,
//           assists: 3,
//           yellowCards: 5,
//           redCards: 1,
//           matchesPlayed: 22,
//           minutesPlayed: 1980,
//           passAccuracy: 85,
//           tackles: 78,
//           cleanSheets: 8,
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "Red Lions FC",
//       logo: "https://via.placeholder.com/150",
//       manager: "Sarah Williams",
//       founded: 1935,
//       stadium: "Lion Arena",
//       players: [
//         {
//           id: 4,
//           name: "Robert Taylor",
//           position: "Forward",
//           number: 10,
//           nationality: "France",
//           age: 27,
//           height: "1.82m",
//           weight: "76kg",
//           goals: 12,
//           assists: 6,
//           yellowCards: 1,
//           redCards: 0,
//           matchesPlayed: 26,
//           minutesPlayed: 2340,
//           passAccuracy: 80,
//           tackles: 15,
//           cleanSheets: 0,
//         },
//         {
//           id: 5,
//           name: "Thomas Anderson",
//           position: "Midfielder",
//           number: 6,
//           nationality: "Germany",
//           age: 29,
//           height: "1.80m",
//           weight: "75kg",
//           goals: 4,
//           assists: 10,
//           yellowCards: 4,
//           redCards: 0,
//           matchesPlayed: 27,
//           minutesPlayed: 2430,
//           passAccuracy: 86,
//           tackles: 52,
//           cleanSheets: 0,
//         },
//         {
//           id: 6,
//           name: "William Clark",
//           position: "Defender",
//           number: 5,
//           nationality: "Italy",
//           age: 32,
//           height: "1.88m",
//           weight: "82kg",
//           goals: 1,
//           assists: 2,
//           yellowCards: 6,
//           redCards: 0,
//           matchesPlayed: 24,
//           minutesPlayed: 2160,
//           passAccuracy: 84,
//           tackles: 65,
//           cleanSheets: 6,
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "Green Tigers FC",
//       logo: "https://via.placeholder.com/150",
//       manager: "Mark Davis",
//       founded: 1945,
//       stadium: "Tiger Ground",
//       players: [
//         {
//           id: 7,
//           name: "Daniel White",
//           position: "Forward",
//           number: 7,
//           nationality: "Portugal",
//           age: 26,
//           height: "1.84m",
//           weight: "77kg",
//           goals: 10,
//           assists: 7,
//           yellowCards: 3,
//           redCards: 0,
//           matchesPlayed: 25,
//           minutesPlayed: 2250,
//           passAccuracy: 81,
//           tackles: 18,
//           cleanSheets: 0,
//         },
//         {
//           id: 8,
//           name: "Joseph Martin",
//           position: "Midfielder",
//           number: 11,
//           nationality: "Netherlands",
//           age: 24,
//           height: "1.79m",
//           weight: "73kg",
//           goals: 3,
//           assists: 9,
//           yellowCards: 2,
//           redCards: 0,
//           matchesPlayed: 26,
//           minutesPlayed: 2340,
//           passAccuracy: 87,
//           tackles: 48,
//           cleanSheets: 0,
//         },
//         {
//           id: 9,
//           name: "Charles Lee",
//           position: "Defender",
//           number: 3,
//           nationality: "Argentina",
//           age: 30,
//           height: "1.90m",
//           weight: "84kg",
//           goals: 1,
//           assists: 4,
//           yellowCards: 4,
//           redCards: 0,
//           matchesPlayed: 23,
//           minutesPlayed: 2070,
//           passAccuracy: 83,
//           tackles: 72,
//           cleanSheets: 7,
//         },
//       ],
//     },
//   ];

//   useEffect(() => {
//     const foundTeam = teams.find((t) => t.id === Number(teamId));
//     if (foundTeam) {
//       setTeam(foundTeam);
//       const foundPlayer = foundTeam.players.find(
//         (p) => p.id === Number(playerId)
//       );
//       setPlayer(foundPlayer || null);
//     }
//   }, [teamId, playerId]);

//   if (!team || !player) {
//     return <div className="container mx-auto px-4 py-8">Player not found</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center space-x-4">
//             <img
//               src={team.logo}
//               alt={`${team.name} logo`}
//               className="w-16 h-16 object-contain"
//             />
//             <h1 className="text-3xl font-bold text-gray-800">{player.name}</h1>
//           </div>
//           <Link
//             to={`/teams/${team.id}`}
//             className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
//           >
//             <FaArrowLeft />
//             <span>Back to Team</span>
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//               <div className="p-8">
//                 <div className="flex items-center justify-between mb-6">
//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-800">
//                       {player.name}
//                     </h2>
//                     <p className="text-gray-600">#{player.number}</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-gray-600">{team.name}</p>
//                     <p className="text-sm text-gray-500">{team.stadium}</p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
//                   <div className="bg-gray-50 rounded-lg p-4">
//                     <div className="flex items-center space-x-2 text-gray-600 mb-2">
//                       <FaRunning className="text-blue-600" />
//                       <span>Position</span>
//                     </div>
//                     <p className="text-xl font-semibold text-gray-800">
//                       {player.position}
//                     </p>
//                   </div>
//                   <div className="bg-gray-50 rounded-lg p-4">
//                     <div className="flex items-center space-x-2 text-gray-600 mb-2">
//                       <FaFlag className="text-blue-600" />
//                       <span>Nationality</span>
//                     </div>
//                     <p className="text-xl font-semibold text-gray-800">
//                       {player.nationality}
//                     </p>
//                   </div>
//                   <div className="bg-gray-50 rounded-lg p-4">
//                     <div className="flex items-center space-x-2 text-gray-600 mb-2">
//                       <FaBirthdayCake className="text-blue-600" />
//                       <span>Age</span>
//                     </div>
//                     <p className="text-xl font-semibold text-gray-800">
//                       {player.age}
//                     </p>
//                   </div>
//                   <div className="bg-gray-50 rounded-lg p-4">
//                     <div className="flex items-center space-x-2 text-gray-600 mb-2">
//                       <FaRuler className="text-blue-600" />
//                       <span>Height</span>
//                     </div>
//                     <p className="text-xl font-semibold text-gray-800">
//                       {player.height}
//                     </p>
//                   </div>
//                   <div className="bg-gray-50 rounded-lg p-4">
//                     <div className="flex items-center space-x-2 text-gray-600 mb-2">
//                       <FaWeight className="text-blue-600" />
//                       <span>Weight</span>
//                     </div>
//                     <p className="text-xl font-semibold text-gray-800">
//                       {player.weight}
//                     </p>
//                   </div>
//                   <div className="bg-gray-50 rounded-lg p-4">
//                     <div className="flex items-center space-x-2 text-gray-600 mb-2">
//                       <FaExclamationTriangle className="text-blue-600" />
//                       <span>Cards</span>
//                     </div>
//                     <p className="text-xl font-semibold text-gray-800">
//                       {player.yellowCards}Y {player.redCards}R
//                     </p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                   <div className="bg-blue-50 rounded-lg p-4">
//                     <p className="text-sm text-gray-600">Goals</p>
//                     <p className="text-2xl font-bold text-blue-600">
//                       {player.goals}
//                     </p>
//                   </div>
//                   <div className="bg-blue-50 rounded-lg p-4">
//                     <p className="text-sm text-gray-600">Assists</p>
//                     <p className="text-2xl font-bold text-blue-600">
//                       {player.assists}
//                     </p>
//                   </div>
//                   <div className="bg-blue-50 rounded-lg p-4">
//                     <p className="text-sm text-gray-600">Matches</p>
//                     <p className="text-2xl font-bold text-blue-600">
//                       {player.matchesPlayed}
//                     </p>
//                   </div>
//                   <div className="bg-blue-50 rounded-lg p-4">
//                     <p className="text-sm text-gray-600">Minutes</p>
//                     <p className="text-2xl font-bold text-blue-600">
//                       {player.minutesPlayed}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//               <div className="p-8">
//                 <h3 className="text-xl font-bold text-gray-800 mb-6">
//                   Performance Stats
//                 </h3>
//                 <div className="space-y-6">
//                   <div>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-gray-600">Pass Accuracy</span>
//                       <span className="font-semibold text-gray-800">
//                         {player.passAccuracy}%
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2.5">
//                       <div
//                         className="bg-blue-600 h-2.5 rounded-full"
//                         style={{ width: `${player.passAccuracy}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-gray-600">Tackles</span>
//                       <span className="font-semibold text-gray-800">
//                         {player.tackles}
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2.5">
//                       <div
//                         className="bg-blue-600 h-2.5 rounded-full"
//                         style={{ width: `${(player.tackles / 100) * 100}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                   {player.cleanSheets > 0 && (
//                     <div>
//                       <div className="flex justify-between mb-2">
//                         <span className="text-gray-600">Clean Sheets</span>
//                         <span className="font-semibold text-gray-800">
//                           {player.cleanSheets}
//                         </span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-2.5">
//                         <div
//                           className="bg-blue-600 h-2.5 rounded-full"
//                           style={{
//                             width: `${(player.cleanSheets / 10) * 100}%`,
//                           }}
//                         ></div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlayerDetails;

import React from 'react';

import { useParams, useNavigate } from "react-router-dom";
import { 
  FaArrowLeft, 
  
  FaFlag, 
  FaFutbol, 
  FaBirthdayCake, 
  FaRulerVertical, 
  FaWeight,
  FaTrophy,
  FaChartLine,
  FaHistory,
  FaShirtsinbulk,
  FaUser
} from "react-icons/fa";

interface Player {
  id: number;
  name: string;
  position: string;
  number: number;
  nationality: string;
  age: number;
  height: string;
  weight: string;
  bio: string;
  stats: {
    matches: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
  };
  achievements: string[];
}

interface Team {
  id: number;
  name: string;
  logo: string;
  manager: string;
  founded: number;
  stadium: string;
  city: string;
  capacity: number;
  players: Player[];
}

const PlayerDetails = () => {
  const { teamId, playerId } = useParams();
  const navigate = useNavigate();
  const teams: Team[] = [
    {
      id: 1,
      name: "Blue Eagles FC",
      logo: "/images/teams/blue-eagles.png",
      manager: "John Smith",
      founded: 1920,
      stadium: "Eagle Stadium",
      city: "New York",
      capacity: 45000,
      players: [
        {
          id: 1,
          name: "David Johnson",
          position: "Forward",
          number: 9,
          nationality: "England",
          age: 28,
          height: "1.85m",
          weight: "78kg",
          bio: "David Johnson is a key striker known for his speed and goal-scoring abilities. He's played internationally and is a fan favorite.",
          stats: {
            matches: 30,
            goals: 18,
            assists: 10,
            yellowCards: 3,
            redCards: 1,
          },
          achievements: [
            "Top Scorer 2022",
            "Player of the Month - May",
            "Championship Winner 2021"
          ]
        },
        // Add more players if needed
      ],
    },
    // Add more teams if needed
  ];

  const team = teams.find(t => t.id === Number(teamId));
  const player = team?.players.find(p => p.id === Number(playerId));

  if (!team || !player) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Player not found</h1>
          <button 
            onClick={() => navigate('/teams')}
            className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Back to Teams
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <button 
          onClick={() => navigate(`/teams/${team.id}`)}
          className="flex items-center text-blue-700 hover:text-blue-900 mb-6"
        >
          <FaArrowLeft className="mr-2" /> Back to Team
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Player Header */}
          <div className="bg-gradient-to-r from-blue-800 to-indigo-800 p-8 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-40 h-40 rounded-full bg-white p-2 mb-6 md:mb-0 md:mr-8">
                <img 
                  src={`/images/players/${player.id}.jpg`} 
                  alt={player.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{player.name}</h1>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
                    <FaShirtsinbulk className="mr-2" /> #{player.number}
                  </span>
                  <span className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
                    <FaFutbol className="mr-2" /> {player.position}
                  </span>
                  <span className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
                    <FaFlag className="mr-2" /> {player.nationality}
                  </span>
                </div>
                <div className="flex items-center">
                  <img 
                    src={team.logo} 
                    alt={team.name} 
                    className="w-8 h-8 mr-2"
                  />
                  <span>{team.name}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Player Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="md:col-span-2">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <FaHistory className="mr-2 text-blue-700" /> Biography
                </h2>
                <p className="text-gray-700 mb-8">{player.bio}</p>

                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <FaChartLine className="mr-2 text-blue-700" /> Season Statistics
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-800">{player.stats.matches}</div>
                    <div className="text-sm text-gray-600">Matches</div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-800">{player.stats.goals}</div>
                    <div className="text-sm text-gray-600">Goals</div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-800">{player.stats.assists}</div>
                    <div className="text-sm text-gray-600">Assists</div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-800">{player.stats.yellowCards}</div>
                    <div className="text-sm text-gray-600">Yellow Cards</div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-800">{player.stats.redCards}</div>
                    <div className="text-sm text-gray-600">Red Cards</div>
                  </div>
                </div>

                {player.achievements && player.achievements.length > 0 && (
                  <>
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <FaTrophy className="mr-2 text-blue-700" /> Achievements
                    </h2>
                    <ul className="space-y-2 mb-8">
                      {player.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-700 mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Right Column */}
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <FaUser className="mr-2 text-blue-700" /> Player Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Age</h3>
                    <p className="flex items-center">
                      <FaBirthdayCake className="mr-2 text-gray-400" />
                      {player.age} years
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Height</h3>
                    <p className="flex items-center">
                      <FaRulerVertical className="mr-2 text-gray-400" />
                      {player.height}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Weight</h3>
                    <p className="flex items-center">
                      <FaWeight className="mr-2 text-gray-400" />
                      {player.weight}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Nationality</h3>
                    <p className="flex items-center">
                      <FaFlag className="mr-2 text-gray-400" />
                      {player.nationality}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Position</h3>
                    <p className="flex items-center">
                      <FaFutbol className="mr-2 text-gray-400" />
                      {player.position}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Team</h3>
                    <div className="flex items-center mt-1">
                      <img 
                        src={team.logo} 
                        alt={team.name} 
                        className="w-6 h-6 mr-2"
                      />
                      <span>{team.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
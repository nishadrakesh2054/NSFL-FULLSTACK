// import { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import React from "react";
// import {
//   FaArrowLeft,
//   FaShieldAlt,
//   FaRunning,
//   FaFutbol,
//   FaFlag,
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

// const TeamPlayers = () => {
//   const { teamId } = useParams();
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
//         },
//       ],
//     },
//   ];

//   useEffect(() => {
//     const foundTeam = teams.find((t) => t.id === Number(teamId));
//     setTeam(foundTeam || null);
//   }, [teamId]);

//   if (!team) {
//     return <div className="container mx-auto px-4 py-8">Team not found</div>;
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
//             <h1 className="text-3xl font-bold text-gray-800">
//               {team.name} Squad
//             </h1>
//           </div>
//           <Link
//             to="/teams"
//             className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
//           >
//             <FaArrowLeft />
//             <span>Back to Teams</span>
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {team.players.map((player) => (
//             <Link
//               key={player.id}
//               to={`/teams/${team.id}/players/${player.id}`}
//               className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
//             >
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h2 className="text-xl font-bold text-gray-800">
//                     {player.name}
//                   </h2>
//                   <span className="text-2xl font-bold text-blue-600">
//                     #{player.number}
//                   </span>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   <div className="flex items-center space-x-2 text-gray-600">
//                     <FaRunning className="text-blue-600" />
//                     <span>{player.position}</span>
//                   </div>
//                   <div className="flex items-center space-x-2 text-gray-600">
//                     <FaFlag className="text-blue-600" />
//                     <span>{player.nationality}</span>
//                   </div>
//                   <div className="flex items-center space-x-2 text-gray-600">
//                     <FaFutbol className="text-blue-600" />
//                     <span>{player.goals} Goals</span>
//                   </div>
//                   <div className="flex items-center space-x-2 text-gray-600">
//                     <FaShieldAlt className="text-blue-600" />
//                     <span>{player.assists} Assists</span>
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 rounded-lg p-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <p className="text-sm text-gray-500">Age</p>
//                       <p className="font-semibold text-gray-800">
//                         {player.age}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Height</p>
//                       <p className="font-semibold text-gray-800">
//                         {player.height}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Weight</p>
//                       <p className="font-semibold text-gray-800">
//                         {player.weight}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Cards</p>
//                       <p className="font-semibold text-gray-800">
//                         {player.yellowCards}Y {player.redCards}R
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamPlayers;


import React from 'react';

import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaFlag, FaFutbol, FaBirthdayCake, FaRulerVertical, FaWeight, FaShirtsinbulk } from "react-icons/fa";

interface Player {
  id: number;
  name: string;
  position: string;
  number: number;
  nationality: string;
  age: number;
  height: string;
  weight: string;
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

const TeamPlayers = () => {
  const { teamId } = useParams();
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
          weight: "78kg"
        },
        // More players...
      ],
    },
    // More teams...
  ];

  const team = teams.find(t => t.id === Number(teamId));

  if (!team) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Team not found</h1>
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <button 
              onClick={() => navigate('/teams')}
              className="mr-4 text-blue-700 hover:text-blue-900"
            >
              <FaArrowLeft size={20} />
            </button>
            <div className="flex items-center">
              <img
                src={team.logo}
                alt={`${team.name} logo`}
                className="w-16 h-16 mr-4"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{team.name}</h1>
                <p className="text-gray-600">{team.stadium}, {team.city}</p>
              </div>
            </div>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
            <p className="text-gray-700 font-medium">{team.players.length} Players</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nationality</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {team.players.map((player) => (
                  <tr 
                    key={player.id} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => navigate(`/teams/${team.id}/players/${player.id}`)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FaShirtsinbulk className="text-gray-400 mr-2" />
                        <span className="font-medium">{player.number}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img 
                          src={`/images/players/${player.id}.jpg`} 
                          alt={player.name}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <span className="font-medium">{player.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FaFutbol className="text-gray-400 mr-2" />
                        <span>{player.position}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FaBirthdayCake className="text-gray-400 mr-2" />
                        <span>{player.age}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FaFlag className="text-gray-400 mr-2" />
                        <span>{player.nationality}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPlayers;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import React from "react";
// import {
//   FaTrophy,
//   FaUsers,
//   FaCalendarAlt,
//   FaMapMarkerAlt,
//   FaUserTie,
// } from "react-icons/fa";

// interface Team {
//   id: number;
//   name: string;
//   logo: string;
//   manager: string;
//   founded: number;
//   stadium: string;
//   players: Player[];
//   trophies: number;
//   leaguePosition: number;
//   matchesPlayed: number;
//   points: number;
// }

// interface Player {
//   id: number;
//   name: string;
//   position: string;
//   number: number;
//   nationality: string;
// }

// const Teams = () => {
//   const navigate = useNavigate();
//   const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

//   const teams: Team[] = [
//     {
//       id: 1,
//       name: "Blue Eagles FC",
//       logo: "https://via.placeholder.com/150",
//       manager: "John Smith",
//       founded: 1920,
//       stadium: "Eagle Stadium",
//       trophies: 15,
//       leaguePosition: 1,
//       matchesPlayed: 30,
//       points: 75,
//       players: [
//         {
//           id: 1,
//           name: "David Johnson",
//           position: "Forward",
//           number: 9,
//           nationality: "England",
//         },
//         {
//           id: 2,
//           name: "Michael Brown",
//           position: "Midfielder",
//           number: 8,
//           nationality: "Spain",
//         },
//         {
//           id: 3,
//           name: "James Wilson",
//           position: "Defender",
//           number: 4,
//           nationality: "Brazil",
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
//       trophies: 12,
//       leaguePosition: 2,
//       matchesPlayed: 30,
//       points: 72,
//       players: [
//         {
//           id: 4,
//           name: "Robert Taylor",
//           position: "Forward",
//           number: 10,
//           nationality: "France",
//         },
//         {
//           id: 5,
//           name: "Thomas Anderson",
//           position: "Midfielder",
//           number: 6,
//           nationality: "Germany",
//         },
//         {
//           id: 6,
//           name: "William Clark",
//           position: "Defender",
//           number: 5,
//           nationality: "Italy",
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
//       trophies: 8,
//       leaguePosition: 3,
//       matchesPlayed: 30,
//       points: 68,
//       players: [
//         {
//           id: 7,
//           name: "Daniel White",
//           position: "Forward",
//           number: 7,
//           nationality: "Portugal",
//         },
//         {
//           id: 8,
//           name: "Joseph Martin",
//           position: "Midfielder",
//           number: 11,
//           nationality: "Netherlands",
//         },
//         {
//           id: 9,
//           name: "Charles Lee",
//           position: "Defender",
//           number: 3,
//           nationality: "Argentina",
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="container mx-auto px-4">
//         <h1
//           className="text-4xl font-bold mb-8 text-center text-gray-800"
//           data-aos="fade-up"
//         >
//           Premier League Teams
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {teams.map((team) => (
//             <div
//               key={team.id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
//               data-aos="fade-up"
//               data-aos-delay={team.id * 100}
//             >
//               <div className="relative">
//                 <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                   #{team.leaguePosition}
//                 </div>
//                 <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
//                   <img
//                     src={team.logo}
//                     alt={`${team.name} logo`}
//                     className="w-32 h-32 object-contain"
//                   />
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">
//                   {team.name}
//                 </h2>

//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   <div className="flex items-center space-x-2 text-gray-600">
//                     <FaUserTie className="text-blue-600" />
//                     <span>{team.manager}</span>
//                   </div>
//                   <div className="flex items-center space-x-2 text-gray-600">
//                     <FaCalendarAlt className="text-blue-600" />
//                     <span>{team.founded}</span>
//                   </div>
//                   <div className="flex items-center space-x-2 text-gray-600">
//                     <FaMapMarkerAlt className="text-blue-600" />
//                     <span>{team.stadium}</span>
//                   </div>
//                   <div className="flex items-center space-x-2 text-gray-600">
//                     <FaTrophy className="text-blue-600" />
//                     <span>{team.trophies} Trophies</span>
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 rounded-lg p-4 mb-6">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="text-center">
//                       <p className="text-sm text-gray-500">Matches Played</p>
//                       <p className="text-xl font-bold text-gray-800">
//                         {team.matchesPlayed}
//                       </p>
//                     </div>
//                     <div className="text-center">
//                       <p className="text-sm text-gray-500">Points</p>
//                       <p className="text-xl font-bold text-gray-800">
//                         {team.points}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => navigate(`/teams/${team.id}`)}
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
//                 >
//                   <FaUsers />
//                   <span>View Squad</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Teams;


import React from 'react';

import { useNavigate } from "react-router-dom";
import { FaUsers, FaCalendarAlt, FaHome, FaUserTie } from "react-icons/fa";

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

const Teams = () => {
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

  return (
    <>
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">NSFL Teams</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore all teams participating in the National Soccer Football League
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-blue-800 to-indigo-800 p-6 text-white text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src={team.logo}
                    alt={`${team.name} logo`}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold">{team.name}</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaUserTie className="text-gray-500 mr-2" />
                    <span className="text-gray-700">{team.manager}</span>
                  </div>
                  <div className="flex items-center">
                    <FaHome className="text-gray-500 mr-2" />
                    <span className="text-gray-700">{team.stadium}, {team.city}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="text-gray-500 mr-2" />
                    <span className="text-gray-700">{team.capacity.toLocaleString()} seats</span>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-gray-500 mr-2" />
                    <span className="text-gray-700">Founded {team.founded}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => navigate(`/teams/${team.id}`)}
                  className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg transition-colors flex items-center justify-center"
                >
                  View Squad
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Teams;
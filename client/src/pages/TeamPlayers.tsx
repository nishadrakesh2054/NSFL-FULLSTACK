import React from "react";

import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaFlag,
  FaFutbol,
  FaBirthdayCake,
  FaRulerVertical,
  FaWeight,
  FaShirtsinbulk,
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
  img: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
  manager: string;
  founded: number;
  stadium: string;
  players: Player[];
}

const TeamPlayers = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();

  const teams: Team[] = [
    {
      id: 1,
      name: "Manang Marshyangdi Club",
      logo: "/image/6-98x98.png",
      manager: "Pradeep Humagain",
      founded: 1982,
      stadium: "ANFA Complex",
      players: [
        {
          id: 1,
          name: "Bimal Gharti Magar",
          position: "Forward",
          img: "/image/img-1-2.jpg",
          number: 10,
          nationality: "Nepal",
          age: 26,
          height: "1.75m",
          weight: "70kg",
        },
        {
          id: 2,
          name: "Sujal Shrestha",
          position: "Midfielder",
          img: "/image/img-1-3.jpg",
          number: 7,
          nationality: "Nepal",
          age: 24,
          height: "1.72m",
          weight: "68kg",
        },
      ],
    },
    {
      id: 2,
      name: "Machhindra Football Club",
      logo: "/image/7-98x98.png",
      manager: "Pratik Pandey",
      founded: 1973,
      stadium: "Dasharath Rangasala",
      players: [
        {
          id: 1,
          name: "Anjan Bista",
          position: "Forward",
          img: "/image/img-1-4.jpg",
          number: 11,
          nationality: "Nepal",
          age: 25,
          height: "1.78m",
          weight: "72kg",
        },
        {
          id: 2,
          name: "Bishal Rai",
          position: "Midfielder",
          img: "/image/img-1-3.jpg",
          number: 8,
          nationality: "Nepal",
          age: 27,
          height: "1.70m",
          weight: "65kg",
        },
      ],
    },
    {
      id: 3,
      name: "Three Star Club",
      logo: "/image/8-98x98.png",
      manager: "Megh Raj KC",
      founded: 1954,
      stadium: "ANFA Complex",
      players: [
        {
          id: 1,
          name: "Nawayug Shrestha",
          position: "Forward",
          img: "/image/img-1-2.jpg",
          number: 9,
          nationality: "Nepal",
          age: 29,
          height: "1.80m",
          weight: "75kg",
        },
        {
          id: 2,
          name: "Rohit Chand",
          position: "Defender",
          img: "/image/img-1-3.jpg",
          number: 5,
          nationality: "Nepal",
          age: 30,
          height: "1.82m",
          weight: "78kg",
        },
      ],
    },
    {
      id: 4,
      name: "Kathmandu Rayzrs",
      logo: "/image/8-98x98.png",
      manager: "Bal Gopal Maharjan",
      founded: 2019,
      stadium: "Dasharath Rangasala",
      players: [
        {
          id: 1,
          name: "Bharat Khawas",
          position: "Forward",
          img: "/image/img-1-2.jpg",
          number: 17,
          nationality: "Nepal",
          age: 31,
          height: "1.68m",
          weight: "65kg",
        },
        {
          id: 2,
          name: "Tej Tamang",
          position: "Defender",
          img: "/image/img-1-3.jpg",
          number: 3,
          nationality: "Nepal",
          age: 25,
          height: "1.75m",
          weight: "70kg",
        },
      ],
    },
    {
      id: 5,
      name: "Church Boys United",
      logo: "/image/7-98x98.png",
      manager: "Kumar Thapa",
      founded: 1999,
      stadium: "ANFA Complex",
      players: [
        {
          id: 1,
          name: "Aashish Lama",
          position: "Midfielder",
          img: "/image/img-1-2.jpg",
          number: 14,
          nationality: "Nepal",
          age: 23,
          height: "1.71m",
          weight: "67kg",
        },
        {
          id: 2,
          name: "Dinesh Rajbanshi",
          position: "Defender",
          img: "/image/img-1-3.jpg",
          number: 4,
          nationality: "Nepal",
          age: 26,
          height: "1.76m",
          weight: "72kg",
        },
      ],
    },
    {
      id: 6,
      name: "Jawalakhel Youth Club",
      logo: "/image/6-98x98.png",
      manager: "Yogesh Suwal",
      founded: 1972,
      stadium: "Jawalakhel Ground",
      players: [
        {
          id: 1,
          name: "George Prince Karki",
          position: "Forward",
          img: "/image/img-1-2.jpg",
          number: 20,
          nationality: "Nepal",
          age: 22,
          height: "1.73m",
          weight: "69kg",
        },
        {
          id: 2,
          name: "Sesehang Angdembe",
          position: "Midfielder",
          img: "/image/img-1-3.jpg",
          number: 6,
          nationality: "Nepal",
          age: 24,
          height: "1.69m",
          weight: "66kg",
        },
      ],
    },
  ];

  const team = teams.find((t) => t.id === Number(teamId));

  if (!team) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Team not found</h1>
          <button
            onClick={() => navigate("/teams")}
            className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Back to Teams
          </button>
        </div>
      </div>
    );
  }

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
            {team.name}
          </h1>
          <div className="text-white flex justify-center items-center space-x-2">
            <span>Home</span>
            <span>/</span>
            <span>Teams</span>
            <span>/</span>
            <span className="text-red-500">{team.name}</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <button
                onClick={() => navigate("/teams")}
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
                  <h1 className="text-3xl font-bold text-gray-800">
                    {team.name}
                  </h1>
                  <p className="text-gray-600">{team.stadium}</p>
                </div>
              </div>
            </div>
            <div className="bg-[#fec802] px-4 py-2 rounded-lg shadow-sm">
              <p className="text-gray-700 font-medium">
                {team.players.length} Players
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      Player
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      Position
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      Age
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                      Nationality
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {team.players.map((player) => (
                    <tr
                      key={player.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() =>
                        navigate(`/teams/${team.id}/players/${player.id}`)
                      }
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
                            src={player.img}
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
    </>
  );
};

export default TeamPlayers;

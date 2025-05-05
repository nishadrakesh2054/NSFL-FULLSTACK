import React from "react";

import { useNavigate } from "react-router-dom";
import { FaUsers, FaCalendarAlt, FaHome, FaUserTie } from "react-icons/fa";

interface Team {
  id: number;
  name: string;
  logo: string;
  manager: string;
  founded: number;
  stadium: string;

  players: Player[];
}

interface Player {
  id: number;
  name: string;
  img: string;
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
            NSFL Teams
          </h1>
          <div className="text-white flex justify-center items-center space-x-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-red-500">Teams</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-">
          <div className="text-center py-10">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore all teams participating in the National Soccer Football
              League
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((team) => (
              <div
                key={team.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 text-white text-center">
                  <div className="flex justify-center mb-4">
                    <img
                      src={team.logo}
                      alt={`${team.name} logo`}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {team.name}
                  </h2>
                </div>

                <div className="p-6">
                  <div className="space-y-3">
                    {/* Founded */}
                    <div className="flex items-center space-x-1">
                      <FaCalendarAlt className="text-gray-500" />
                      <span className="text-gray-600 font-medium">
                        Founded:
                      </span>
                      <span className="text-gray-700">{team.founded}</span>
                    </div>

                    {/* Stadium */}
                    <div className="flex items-center space-x-1">
                      <FaHome className="text-gray-500" />
                      <span className="text-gray-600 font-medium">
                        Stadium:
                      </span>
                      <span className="text-gray-700">{team.stadium}</span>
                    </div>

                    {/* Coach */}
                    <div className="flex items-center space-x-1">
                      <FaUserTie className="text-gray-500" />
                      <span className="text-gray-600 font-medium">Coach:</span>
                      <span className="text-gray-700">{team.manager}</span>
                    </div>
                  </div>

                  {/* Button */}
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

import React from "react";

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
  FaUser,
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
  players: Player[];
}

const PlayerDetails = () => {
  const { teamId, playerId } = useParams();
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
          bio: "Bimal Gharti Magar is a prolific striker known for his clinical finishing and leadership qualities. He has been a key player for both club and country, representing Nepal in numerous international tournaments.",
          stats: {
            matches: 25,
            goals: 15,
            assists: 8,
            yellowCards: 2,
            redCards: 0,
          },
          achievements: [
            "Top Scorer NSFL 2023",
            "Player of the Season 2022",
            "Best Forward Award 2021",
          ],
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
          bio: "Sujal Shrestha is a dynamic midfielder known for his vision and passing abilities. He controls the tempo of the game and is crucial in both attack and defense.",
          stats: {
            matches: 28,
            goals: 5,
            assists: 12,
            yellowCards: 4,
            redCards: 0,
          },
          achievements: [
            "Best Midfielder 2023",
            "Most Assists 2022",
            "Young Player of the Year 2021",
          ],
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
          bio: "Anjan Bista is a versatile forward with exceptional technical skills. His ability to create chances and score goals makes him one of the most dangerous attackers in the league.",
          stats: {
            matches: 30,
            goals: 20,
            assists: 7,
            yellowCards: 3,
            redCards: 0,
          },
          achievements: [
            "Golden Boot Winner 2023",
            "Player of the Month (3 times)",
            "Team's Top Scorer 2022",
          ],
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
          bio: "Bishal Rai is a box-to-box midfielder known for his work rate and tactical awareness. He provides stability in the midfield and contributes to both attack and defense.",
          stats: {
            matches: 26,
            goals: 4,
            assists: 9,
            yellowCards: 5,
            redCards: 1,
          },
          achievements: [
            "Most Improved Player 2023",
            "Team's Player of the Year 2022",
            "Best Defensive Midfielder 2021",
          ],
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
          bio: "Nawayug Shrestha is an experienced striker with a proven track record. His physical presence and goal-scoring ability make him a constant threat to opposition defenses.",
          stats: {
            matches: 27,
            goals: 16,
            assists: 6,
            yellowCards: 4,
            redCards: 0,
          },
          achievements: [
            "League Champion 2023",
            "Top Scorer 2022",
            "Best Forward Award 2021",
          ],
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
          bio: "Rohit Chand is a commanding center-back known for his leadership and defensive prowess. His experience and tactical understanding make him a crucial part of the team's defense.",
          stats: {
            matches: 29,
            goals: 2,
            assists: 3,
            yellowCards: 6,
            redCards: 1,
          },
          achievements: [
            "Best Defender 2023",
            "Team Captain 2022",
            "Defensive Player of the Year 2021",
          ],
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
          bio: "Bharat Khawas is a veteran striker with exceptional technical skills. His experience and goal-scoring ability make him a valuable asset to the team.",
          stats: {
            matches: 24,
            goals: 12,
            assists: 5,
            yellowCards: 2,
            redCards: 0,
          },
          achievements: [
            "Most Experienced Player Award",
            "Team's Top Scorer 2022",
            "Player of the Month (2 times)",
          ],
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
          bio: "Tej Tamang is a versatile defender known for his speed and tackling ability. He can play both as a full-back and center-back, providing flexibility to the team's defense.",
          stats: {
            matches: 28,
            goals: 1,
            assists: 4,
            yellowCards: 5,
            redCards: 0,
          },
          achievements: [
            "Best Young Defender 2023",
            "Most Improved Player 2022",
            "Defensive Player of the Month",
          ],
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
          bio: "Aashish Lama is a promising young midfielder with excellent technical abilities. His creativity and vision make him a key player in the team's attacking play.",
          stats: {
            matches: 22,
            goals: 6,
            assists: 10,
            yellowCards: 3,
            redCards: 0,
          },
          achievements: [
            "Young Player of the Year 2023",
            "Most Creative Player Award",
            "Best Young Talent 2022",
          ],
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
          bio: "Dinesh Rajbanshi is a solid defender known for his physical presence and aerial ability. He provides stability to the team's backline and is a threat during set-pieces.",
          stats: {
            matches: 25,
            goals: 3,
            assists: 2,
            yellowCards: 4,
            redCards: 0,
          },
          achievements: [
            "Best Defender Award 2023",
            "Team's Most Consistent Player",
            "Defensive Player of the Month",
          ],
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
          bio: "George Prince Karki is a young and exciting forward with immense potential. His speed and technical skills make him a constant threat to opposition defenses.",
          stats: {
            matches: 20,
            goals: 10,
            assists: 4,
            yellowCards: 2,
            redCards: 0,
          },
          achievements: [
            "Young Player of the Year 2023",
            "Most Promising Talent",
            "Best Young Forward Award",
          ],
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
          bio: "Sesehang Angdembe is a dynamic midfielder known for his work rate and technical abilities. He contributes both in attack and defense, making him a valuable team player.",
          stats: {
            matches: 23,
            goals: 4,
            assists: 8,
            yellowCards: 3,
            redCards: 0,
          },
          achievements: [
            "Most Improved Player 2023",
            "Team's Young Player of the Year",
            "Best Midfielder Award",
          ],
        },
      ],
    },
  ];

  const team = teams.find((t) => t.id === Number(teamId));
  const player = team?.players.find((p) => p.id === Number(playerId));

  if (!team || !player) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Player not found</h1>
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
                  src={player.img}
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
                  <FaChartLine className="mr-2 text-blue-700" /> Season
                  Statistics
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-800">
                      {player.stats.matches}
                    </div>
                    <div className="text-sm text-gray-600">Matches</div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-800">
                      {player.stats.goals}
                    </div>
                    <div className="text-sm text-gray-600">Goals</div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-800">
                      {player.stats.assists}
                    </div>
                    <div className="text-sm text-gray-600">Assists</div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-800">
                      {player.stats.yellowCards}
                    </div>
                    <div className="text-sm text-gray-600">Yellow Cards</div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-800">
                      {player.stats.redCards}
                    </div>
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
                    <h3 className="text-sm font-semibold text-gray-500">
                      Height
                    </h3>
                    <p className="flex items-center">
                      <FaRulerVertical className="mr-2 text-gray-400" />
                      {player.height}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">
                      Weight
                    </h3>
                    <p className="flex items-center">
                      <FaWeight className="mr-2 text-gray-400" />
                      {player.weight}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">
                      Nationality
                    </h3>
                    <p className="flex items-center">
                      <FaFlag className="mr-2 text-gray-400" />
                      {player.nationality}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">
                      Position
                    </h3>
                    <p className="flex items-center">
                      <FaFutbol className="mr-2 text-gray-400" />
                      {player.position}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">
                      Team
                    </h3>
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

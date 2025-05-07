
// import React, { useState, useEffect } from "react";

// const TeamFixture = () => {
//   // Dynamic match data
//   const [matchData, setMatchData] = useState({
//     homeTeam: {
//       name: "GEMS ",
//       logo: "/image/img-03.png",
      
//     },
//     awayTeam: {
//       name: "Thunderbolts",
//       logo: "/image/img-04.png",
   
//     },
//     date: "2024-02-12T19:00:00",
   
//   });

//   // Countdown state
//   const [countdown, setCountdown] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   // Format date
//   const matchDate = new Date(matchData.date);
//   const formattedDate = matchDate.toLocaleDateString('en-US', { 
//     month: '2-digit', 
//     day: '2-digit', 
//     year: 'numeric' 
//   });
//   const formattedTime = matchDate.toLocaleTimeString('en-US', { 
//     hour: '2-digit', 
//     minute: '2-digit' 
//   });
//   const dayOfWeek = matchDate.toLocaleDateString('en-US', { weekday: 'long' });

//   // Calculate countdown
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date();
//       const difference = matchDate - now;

//       if (difference > 0) {
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//         setCountdown({ days, hours, minutes, seconds });
//       } else {
//         clearInterval(interval);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [matchData.date]);

//   return (
//     <div className="w-full py-10 bg-gradient-to-r from-gray-50 to-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-stretch gap-6 "  data-aos="fade-up">
//           {/* Left: Teams VS Block - Fixed height */}
//           <div className="w-full lg:w-1/2 bg-red-300 rounded-xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300 min-h-[300px] flex flex-col">
//             <div className="p-6 flex-grow flex flex-col">
//               <h3 className="text-center text-gray-500 font-medium mb-6">
//                 TODAY MATCH
//               </h3>
              
//               <div className="flex-grow flex items-center justify-between ">
//                 <div className="flex flex-col items-center">
//                   <div className="w-24 h-24 bg-white rounded-full p-2  flex items-center justify-center">
//                     <img
//                       src={matchData.homeTeam.logo}
//                       alt={matchData.homeTeam.name}
//                       className="w-16 h-16 object-contain"
//                     />
//                   </div>
//                   <span className="mt-3 font-bold text-blue-800 text-lg">
//                     {matchData.homeTeam.name}
//                   </span>
//                 </div>

//                 <div className="flex flex-col items-center mx-4">
//                   <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
//                     <span className="text-sm font-semibold">VS</span>
//                   </div>
//                   <span className="mt-2 text-xs font-semibold text-gray-500">
//                     {formattedDate}
//                   </span>
//                 </div>

//                 <div className="flex flex-col items-center">
//                   <div className="w-24 h-24 bg-white rounded-full p-2  flex items-center justify-center">
//                     <img
//                       src={matchData.awayTeam.logo}
//                       alt={matchData.awayTeam.name}
//                       className="w-16 h-16 object-contain"
//                     />
//                   </div>
//                   <span className="mt-3 font-bold text-blue-800 text-lg">
//                     {matchData.awayTeam.name}
//                   </span>
//                 </div>
//               </div>
              
           
//             </div>
//           </div>

//           {/* Right: Countdown + Background - Same height as left */}
//           <div className="w-full lg:w-1/2 rounded-xl shadow-xl overflow-hidden relative min-h-[300px]">
//             <div
//               className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
//               style={{ backgroundImage: "url('/image/stadium.png')" }}
//             ></div>
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>

//             <div className="relative z-10 p-6 h-full flex flex-col justify-between">
//               <div>
//                 <h2 className="text-xl font-bold text-white mb-1">
//                   Next Match Countdown
//                 </h2>
//                 <p className="text-blue-200 text-sm">
//                   Don't miss the exciting match!
//                 </p>
//               </div>

//               <div className="mt-6">
//                 <ul className="flex justify-between max-w-md mx-auto">
//                   {[
//                     { value: countdown.days, label: "Days" },
//                     { value: countdown.hours, label: "Hours" },
//                     { value: countdown.minutes, label: "Minutes" },
//                     { value: countdown.seconds, label: "Seconds" },
//                   ].map((item, index) => (
//                     <li key={index} className="flex flex-col items-center">
//                       <div className="bg-white/20 backdrop-blur-sm rounded-lg w-16 h-16 flex items-center justify-center mb-1">
//                         <span className="block text-2xl font-bold text-white">
//                           {item.value.toString().padStart(2, '0')}
//                         </span>
//                       </div>
//                       <span className="text-xs font-medium text-blue-100">
//                         {item.label}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="mt-6 text-center">
//                 <p className="text-white font-medium">
//                   Kickoff:{" "}
//                   <span className="text-blue-200">{formattedDate} · {formattedTime}</span>{" "}
//                   <span className="text-blue-100">{dayOfWeek}</span>
//                 </p>
                
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamFixture;

import React, { useState, useEffect } from "react";

const TeamFixture = () => {
  // Dynamic match data
  const [matchData, setMatchData] = useState({
    homeTeam: {
      name: "GEMS",
      logo: "/image/img-03.png",
    },
    awayTeam: {
      name: "Thunderbolts",
      logo: "/image/img-04.png",
    },
    date: "2025-05-10T19:00:00",
  });

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [matchStatus, setMatchStatus] = useState("Upcoming");

  const matchDate = new Date(matchData.date);
  const formattedDate = matchDate.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  const formattedTime = matchDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dayOfWeek = matchDate.toLocaleDateString("en-US", { weekday: "long" });

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = matchDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [matchData.date]);

  // Match status logic
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const matchStart = new Date(matchData.date);
      const matchEnd = new Date(matchStart.getTime() + 2 * 60 * 60 * 1000); // 2 hours

      if (now >= matchStart && now <= matchEnd) {
        setMatchStatus("Running");
      } else if (
        now.toDateString() === matchStart.toDateString() &&
        now < matchStart
      ) {
        setMatchStatus("Today");
      } else if (now > matchEnd) {
        setMatchStatus("Ended");
      } else {
        setMatchStatus("Upcoming");
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // update every minute
    return () => clearInterval(interval);
  }, [matchData.date]);

  return (
    <div className="w-full py-10 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col lg:flex-row items-stretch gap-6"
          data-aos="fade-up"
        >
          {/* Left: Match Card */}
          <div className="w-full lg:w-1/2 bg-red-300 rounded-xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300 min-h-[300px] flex flex-col">
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-center text-gray-800 font-semibold mb-6 uppercase tracking-wider">
                {matchStatus === "Ended"
                  ? "Last Match"
                  : `${matchStatus} Match`}
              </h3>

              <div className="flex-grow flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-white rounded-full p-2 flex items-center justify-center">
                    <img
                      src={matchData.homeTeam.logo}
                      alt={matchData.homeTeam.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <span className="mt-3 font-bold text-blue-800 text-lg">
                    {matchData.homeTeam.name}
                  </span>
                </div>

                <div className="flex flex-col items-center mx-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                    <span className="text-sm font-semibold">VS</span>
                  </div>
                  <span className="mt-2 text-xs font-semibold text-gray-700">
                    {formattedDate}
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-white rounded-full p-2 flex items-center justify-center">
                    <img
                      src={matchData.awayTeam.logo}
                      alt={matchData.awayTeam.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <span className="mt-3 font-bold text-blue-800 text-lg">
                    {matchData.awayTeam.name}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Countdown Card */}
          <div className="w-full lg:w-1/2 rounded-xl shadow-xl overflow-hidden relative min-h-[300px]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
              style={{ backgroundImage: "url('/image/stadium.png')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>

            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">
                  {matchData.homeTeam.name} vs {matchData.awayTeam.name}
                </h2>
                <p className="text-blue-200 text-sm">Kickoff Countdown</p>
              </div>

              <div className="mt-6">
                <ul className="flex justify-between max-w-md mx-auto">
                  {[
                    { value: countdown.days, label: "Days" },
                    { value: countdown.hours, label: "Hours" },
                    { value: countdown.minutes, label: "Minutes" },
                    { value: countdown.seconds, label: "Seconds" },
                  ].map((item, index) => (
                    <li key={index} className="flex flex-col items-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg w-16 h-16 flex items-center justify-center mb-1">
                        <span className="block text-2xl font-bold text-white">
                          {item.value.toString().padStart(2, "0")}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-blue-100">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 text-center">
                <p className="text-white font-medium">
                  Kickoff:{" "}
                  <span className="text-blue-200">
                    {formattedDate} · {formattedTime}
                  </span>{" "}
                  <span className="text-blue-100">{dayOfWeek}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamFixture;

import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const headlines = [
  "Welcome to the NEPAL SCHOOL FOOTBALL LEAGUE!",
  "Watch Live Matches. Anywhere. Anytime.",
  "Stream All Your Favorite Teams in Action!",
  "Experience the Thrill of Live Football Streaming.",
];

const WrittingText = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 80;
    const timeout = setTimeout(() => {
      const fullText = headlines[index];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % headlines.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="w-full bg-blue-950 text-white py-4 shadow-inner">
      <div className="container mx-auto px-4 flex items-center space-x-4">
        <p className="text-yellow-400 font-semibold flex items-center gap-2 text-sm md:text-base">
          <FaStar className="text-yellow-400" />
          Top Headlines:
        </p>
        <h1 className="text-white text-sm md:text-lg font-medium whitespace-nowrap overflow-hidden">
          {currentText}
          <span className="border-r-2 border-yellow-400 animate-pulse ml-1" />
        </h1>
      </div>
    </div>
  );
};

export default WrittingText;

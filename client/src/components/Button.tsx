import React from "react";

type ButtonProps = {
  title: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-gradient-to-r from-red-800 to-pink-600 text-white font-semibold px-6 py-3 rounded-full hover:from-pink-600 hover:to-red-800 transition-all duration-300 shadow-md"
    >
      <span>{title}</span>
      <img
        src="/image/button-img.png"
        alt="arrow"
        className="w-5 h-5 object-contain"
      />
    </button>
  );
};

export default Button;

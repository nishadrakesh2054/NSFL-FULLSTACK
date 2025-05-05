import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="relative w-full bg-[#fec802] text-blue-800 text-sm py-2 px-0 shadow-sm overflow-hidden ">
      {/* Diagonal left background */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 z-0"
        style={{
          clipPath: "polygon(100% 0, 0% 0, 10% 100%, 100% 100%)",
          background: "linear-gradient(240deg, #ffff 80%, #ffff 100%)",
        }}
      />
      <div className="container mx-auto flex justify-between items-center relative z-10 px-4 ">
        {/* Left: Contact Info */}
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1">
            <MdEmail className="text-blue-800" />
            <a
              href="mailto:info@footballleague.com"
              className="hover:underline hover:text-blue-800 transition-colors"
            >
              info@footballleague.com
            </a>
          </span>
          <span className="hidden md:inline-flex items-center gap-1">
            <MdPhone className="text-blue-800" />
            <a
              href="tel:+441234567890"
              className="hover:underline hover:text-blue-800 transition-colors"
            >
              +44 (0) 123 456 7890
            </a>
          </span>
        </div>
        {/* Right: Social Icons */}
        <div className="flex items-center space-x-3 ">
          <a
            href="#"
            className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 hover:bg-blue-800 hover:text-yellow-200 text-white rounded-full p-2 transition-all duration-200 shadow-md"
            aria-label="Facebook"
          >
            <FaFacebookF size={14} />
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 hover:bg-blue-800 hover:text-yellow-200 text-white rounded-full p-2 transition-all duration-200 shadow-md"
            aria-label="Twitter"
          >
            <FaTwitter size={14} />
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 hover:bg-blue-800 hover:text-yellow-200 text-white rounded-full p-2 transition-all duration-200 shadow-md"
            aria-label="Instagram"
          >
            <FaInstagram size={14} />
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 hover:bg-blue-800 hover:text-yellow-200 text-white rounded-full p-2 transition-all duration-200 shadow-md"
            aria-label="YouTube"
          >
            <FaYoutube size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

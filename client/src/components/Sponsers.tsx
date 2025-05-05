import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Sponsors = () => {
  const navigate = useNavigate();
  const sponsors = [
    { id: 2, name: "Pepsi", logo: "/partners/gems-logo.png", url: "#" },
    { id: 3, name: "Ncell", logo: "/partners/HAMS.png", url: "#" },
    { id: 4, name: "CG Foods", logo: "/partners/NOC.png", url: "#" },
    {
      id: 5,
      name: "Yeti Airlines",
      logo: "/partners/Paro_FC_logo_final_JPG-min.png",
      url: "#",
    },
    {
      id: 6,
      name: "Tiger Palace",
      logo: "/partners/thunderbolts-logo.png",
      url: "#",
    },
    { id: 1, name: "Nepal Telecom", logo: "/partners/avya.webp", url: "#" },
    { id: 7, name: "Ncell", logo: "/partners/HAMS.png", url: "#" },
    { id: 8, name: "CG Foods", logo: "/partners/NOC.png", url: "#" },
    {
      id: 9,
      name: "Yeti Airlines",
      logo: "/partners/Paro_FC_logo_final_JPG-min.png",
      url: "#",
    },
  ];

  return (
    <>
      {/* Main Content */}

      <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Our Valuable Sponsors
              </h2>
              <p className="text-md text-primary-800">
                Join our growing family of sponsors and be part of the future of
                football in Nepal{" "}
              </p>
            </div>

            <Button
              title="Become a Sponsor"
              onClick={() => navigate("/highlights")}
            />
          </div>

            {/* Sponsors Grid */}
            <div className="bg-white rounded-xl  p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
                {sponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group"
                  >
             
                    <div className="bg-white shadow-lg p-4 rounded-lg w-full h-32 flex items-center justify-center mb-3">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-h-24 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <span className="text-sm text-center text-gray-700 font-medium group-hover:text-red-600 transition-colors">
                      {sponsor.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
        
        </div>
      </section>
    </>
  );
};

export default Sponsors;

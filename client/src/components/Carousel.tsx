import React, { useState, useEffect } from "react";
import Button from "./Button";
import LiveButton from "./LiveButton";

interface CarouselImage {
  url: string;
  title: string;
  description: string;
}

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images: CarouselImage[] = [
    {
      url: "/image/main-slider-img1.jpg",
      title: "If you Don't Practice , Don't Derserve to win!",
      description:
        "Experience the passion, energy, and talent of young footballer from schools all across Nepal. Live. Fierce. Unforgettable.",
    },
    {
      url: "/image/bg1.png",
      title: "Practice Like a Pro , Play Like a Champion.",
      description:
        "Experience the passion, energy, and talent of young footballer from schools all across Nepal. Live. Fierce. Unforgettable.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-[85vh] overflow-hidden ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image.url})` }}
            />
            <div className="absolute inset-0  bg-opacity-50 " />

            <div className="relative h-full flex items-center justify-center text-white z-10">
              <div className="container px-4 text-center md:text-left">
                <div className="flex flex-col items-center md:items-end max-w-5xl ml-auto text-center md:text-right">
                  <h2
                    className="text-3xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-md tracking-tight"
                    data-aos="fade-up"
                  >
                    {(() => {
                      const [first, second] = image.title.split(" , ");
                      return (
                        <>
                          <span className="text-white">{first},</span>
                          <br />
                          <span className="text-yellow-400">{second}</span>
                        </>
                      );
                    })()}
                  </h2>

                  <p
                    className="text-md md:text-lg mb-6 text-white/90 drop-shadow-md max-w-xl md:max-w-2xl"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {image.description}
                  </p>

                  <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-end">
                    <LiveButton
                      title="Watch Live Video"
                      onClick={() => alert("Clicked!")}
                    />
                    <Button
                      title="Join The League"
                      onClick={() => alert("Clicked!")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation dots */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;

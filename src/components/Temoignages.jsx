import React, { useRef, useEffect, useState } from "react";
import { MapPin } from "lucide-react";

const testimonials = [
  {
    nom: "Marie R.",
    texte:
      "Les produits en raphia sont magnifiques ! Qualité incroyable et très élégants.",
    lieu: "Antananarivo, Madagascar",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    nom: "Thomas B.",
    texte: "Super expérience d’achat. Service client top et livraison rapide.",
    lieu: "Lyon, France",
    photo: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    nom: "Aina M.",
    texte: "Coup de cœur pour ces créations artisanales. Bravo !",
    lieu: "Fianarantsoa, Madagascar",
    photo: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];

const Temoignages = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollStep = 1;
    const scrollInterval = 20;

    const interval = setInterval(() => {
      if (!isHovered) {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollStep;
        }
      }
    }, scrollInterval);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="flex flex-col items-center gap-4 py-10 text-gray-900 bg-white">
      <h1 className="text-5xl md:text-6xl font-semibold text-center text-gray-700">
        Ce que disent nos clients
      </h1>
      <p className="sm:w-1/3 text-center text-md px-4">
        Découvrez ce que nos clients pensent de nos produits faits main et
        éco-responsables.
      </p>

      <div className=" py-16 w-full px-4 sm:px-1 overflow-hidden">
        <div
          ref={containerRef}
          className={`flex gap-6 px-2  no-scrollbar ${
            isHovered ? "" : "animate-scroll"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="min-w-[270px] sm:min-w-[320px] w-64 min-h-[260px] p-6 flex-shrink-0 transition-transform duration-300 hover:scale-[1.03] bg-white relative rounded-xl border border-gray-200 hover:border-[2px] hover:border-yellow-700 shadow-sm hover:shadow-lg"
            >
              <div className="absolute top-4 left-5 text-5xl text-gray-200 leading-none select-none">
                “
              </div>

              <div className="relative z-10 mt-6 flex flex-col justify-between h-full overflow-y-auto pr-2">
                <p className="text-sm text-gray-700 italic text-justify leading-relaxed mb-6">
                  {item.texte}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={item.photo}
                    alt={`Avatar ${item.nom}`}
                    className="w-10 h-10 rounded-full object-cover border-2 border-yellow-700"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{item.nom}</p>
                    <div className="flex items-center text-sm text-gray-500 gap-1">
                      <MapPin size={14} className="text-yellow-700" />
                      {item.lieu}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Temoignages;

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

  // Scroll automatique sauf au survol
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && containerRef.current) {
        containerRef.current.scrollLeft += 1;
      }
    }, 20);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="relative bg-white py-10">
      <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-12">
        Ce que disent nos clients
      </h2>

      {/* Flou latéral */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Liste scrollable */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto px-8 pb-4 scroll-smooth no-scrollbar"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] bg-yellow-700/10 border border-yellow-700/20 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="w-16 h-16 mb-4">
                <img
                  src={item.photo}
                  alt={item.nom}
                  className="w-full h-full object-cover rounded-full border-2 border-yellow-700"
                />
              </div>
              <p className="text-gray-700 italic mb-3 break-words">
                “{item.texte}”
              </p>
              <div className="font-semibold text-yellow-800">{item.nom}</div>
              <div className="text-sm items-center flex gap-1 text-gray-500">
                <MapPin className="text-yellow-700" size={16} />
                {item.lieu}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Temoignages;

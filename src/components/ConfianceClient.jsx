import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ConfianceClient = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 shadow-md bg-yellow-700/15 min-h-[50px]">
      {/* Partie gauche */}
      <div className="flex items-center justify-center">
        <p className="text-left text-xl md:text-2xl font-semibold text-gray-800">
          Plus de <span className="text-yellow-600 font-bold">2 000</span>{" "}
          <br />
          clients nous font confiance depuis 2023
        </p>
      </div>

      {/* Partie droite */}
      <div className="flex items-center justify-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {/* Avis client */}
          <div className="flex flex-col items-start justify-center">
            <p className="text-7xl font-semibold text-gray-800">4.5</p>
            <div className="flex items-center text-yellow-500 text-lg mb-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <p className="text-md text-gray-700">900 Avis</p>
          </div>

          {/* Produits vendus */}
          <div className="flex flex-col items-start justify-center">
            <span className="text-7xl font-semibold text-gray-800">1 000</span>
            <p className="text-md text-gray-700">produits vendus par an</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfianceClient;

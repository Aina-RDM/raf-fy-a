import React from "react";
import bannerImg from "../assets/img_header.png"; // Remplace par ton image réelle
import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texte à gauche */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            Élégance Naturelle & Artisanale
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Découvrez nos créations en raphia faites main, parfaites pour votre
            style estival.
          </p>
          <button className="inline-flex items-center gap-2 bg-yellow-700 text-white px-6 py-3 rounded-full text-lg hover:bg-yellow-800 transition">
            Explorer la collection <ArrowRight size={20} />
          </button>
        </div>

        {/* Image à droite */}
        <div className="flex-1 group perspective">
          <div className="relative w-full max-w-md mx-auto transition-transform duration-75 group-hover:-rotate-2 group-hover:scale-105">
            {/* Ombres en couches */}
            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-yellow-700/30 rounded-lg blur-sm -z-10"></div>
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-yellow-700/20 rounded-lg blur-md -z-20"></div>
            <div className="absolute inset-0 translate-x-6 translate-y-6 bg-yellow-700/10 rounded-lg blur-lg -z-30"></div>

            {/* Image principale */}
            <img
              src={bannerImg}
              alt="Produits en raphia"
              className="rounded-lg shadow-xl transition-transform duration-300 ease-in-out group-hover:rotate-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

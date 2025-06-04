import React from "react";
import headerImage from "../assets/img_header.png";
import { Truck, ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-8 py-12 relative overflow-hidden">
      {/* Cercle décoratif en fond */}
      <div className="absolute w-[360px] h-[360px] bg-yellow-700 opacity-15 rounded-full -top-60 -left-24 z-10"></div>

      {/* Petit cercle opaque par-dessus, sans mélange */}
      <div className="absolute w-20 h-20 rounded-full top-20 -left-11 z-30 border-4 border-white bg-white flex items-center justify-center">
        <div className="w-full h-full rounded-full bg-yellow-700"></div>
      </div>

      {/* Autre petit cercle à droite */}
      <div className="hidden md:block absolute w-10 h-10 rounded-full top-24 right-28 z-30 border-4 border-white bg-white items-center justify-center">
        <div className="w-full h-full rounded-full bg-yellow-700"></div>
      </div>

      {/* Contenu à gauche */}
      <div className="z-0 max-w-xl mt-20 md:mt-10">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
          <Truck className="w-5 h-5 text-yellow-700" />
          Livraison gratuite à Antsirabe
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Sublimez votre style
          <br />
          avec le Raphia
        </h1>
        <p className="text-gray-700 text-md mb-8 leading-relaxed">
          Découvrez nos accessoires artisanaux en raphia : sacs, chapeaux,
          sous-tasses, objets déco et plus encore - 100% faits main, durables et
          élégants.
        </p>
        <div className="flex items-center space-x-4">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-yellow-800 transition duration-300 shadow-lg cursor-pointer flex items-center gap-2">
            En savoir plus <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Image à droite */}
      <div className="z-0 mt-12 md:mt-10 md:w-1/2 flex justify-center">
        <img
          src={headerImage}
          alt="Produits en raphia"
          className="w-80 md:w-[450px] object-contain transition-transform duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Header;

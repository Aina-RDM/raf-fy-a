import React from "react";
import { FaGlobeAfrica, FaHandsHelping, FaLeaf } from "react-icons/fa";
import ArtisanatImage from "../assets/artisanat_raffia.png";

const ICON_SIZE = 30;

const IconBlock = ({ Icon, children }) => (
  <div className="flex items-start gap-4">
    <Icon size={ICON_SIZE} className="text-yellow-700 mt-1 shrink-0" />
    <p className="text-md">{children}</p>
  </div>
);

const ArtisanatMalagasy = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Textes à gauche */}
        <div className="w-full md:w-1/2 space-y-6 text-gray-800">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
            Artisanat Malagasy
          </h2>

          <IconBlock Icon={FaGlobeAfrica}>
            Madagascar possède un savoir-faire artisanal riche et authentique :
            raphia, broderie, tressage, bois sculpté…
          </IconBlock>

          <IconBlock Icon={FaHandsHelping}>
            Raf-Fy-A soutient les communautés locales en collaborant directement
            avec les artisans, dans une démarche éthique et équitable.
          </IconBlock>

          <IconBlock Icon={FaLeaf}>
            Chaque création reflète le respect de l’environnement, des
            traditions et une volonté de consommer autrement.
          </IconBlock>
        </div>

        {/* Image à droite */}
        <div className="w-full md:w-1/2 flex justify-center group perspective">
          <div className="relative w-96 transition-transform duration-75 group-hover:-rotate-2 group-hover:scale-105">
            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-yellow-700/5 rounded-lg blur-sm -z-10 hidden group-hover:block"></div>
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-yellow-700/10 rounded-lg blur-md -z-20 hidden group-hover:block"></div>
            <div className="absolute inset-0 translate-x-6 translate-y-6 bg-yellow-700/20 rounded-lg blur-lg -z-30 hidden group-hover:block"></div>

            <img
              src={ArtisanatImage}
              alt="Artisan malagasy en raphia"
              className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 ease-in-out group-hover:rotate-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanatMalagasy;

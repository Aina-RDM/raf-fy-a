import React from "react";
import headerImage from "../assets/img_header.png";
import { FaLeaf, FaHandsHelping, FaRecycle, FaSmile } from "react-icons/fa";

const SectionService = () => {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Titre centré */}
        <h1 className="text-6xl font-bold text-center text-gray-700 mb-12">
          Pourquoi notre Raphia est bon pour vous ?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image à gauche */}
          <div className="w-full">
            <img
              src={headerImage}
              alt="Image de Raphia"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>

          {/* Blocs icônes à droite */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {/* Élément 1 */}
            <div>
              <FaLeaf className="text-yellow-700 text-3xl mb-2" />
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                100% naturel
              </h4>
              <p className="text-sm text-gray-600">
                Fabriqué avec des matériaux naturels respectueux de
                l’environnement.
              </p>
            </div>

            {/* Élément 2 */}
            <div>
              <FaRecycle className="text-yellow-700 text-3xl mb-2" />
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                Recyclable
              </h4>
              <p className="text-sm text-gray-600">
                Biodégradable et réutilisable, parfait pour un mode de vie
                durable.
              </p>
            </div>

            {/* Élément 3 */}
            <div>
              <FaHandsHelping className="text-yellow-700 text-3xl mb-2" />
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                Soutien local
              </h4>
              <p className="text-sm text-gray-600">
                Issu de l’artisanat malagasy, chaque achat soutient la
                communauté.
              </p>
            </div>

            {/* Élément 4 */}
            <div>
              <FaSmile className="text-yellow-700 text-3xl mb-2" />
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                Design unique
              </h4>
              <p className="text-sm text-gray-600">
                Élégant et authentique, chaque pièce est soigneusement conçue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionService;

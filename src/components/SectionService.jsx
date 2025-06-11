import React, { useRef } from "react";
import headerImage from "../assets/img_header.png";
import { FaLeaf, FaHandsHelping, FaRecycle, FaSmile } from "react-icons/fa";
import { motion, useInView, AnimatePresence } from "framer-motion";

const SectionService = () => {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, {
    margin: "-150px", // Déclenchement plus tôt
  });

  return (
    <div className="py-16 px-6 bg-white" id="section-service">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center text-gray-700 mb-12">
          Pourquoi notre Raphia est bon pour vous ?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div ref={imageRef} className="w-full">
            <AnimatePresence mode="wait">
              {isInView && (
                <motion.img
                  key="raphia-image"
                  src={headerImage}
                  initial={{ x: -150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -150, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-80 md:w-[450px] object-contain"
                />
              )}
            </AnimatePresence>
          </div>

          {/* Blocs de texte */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
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

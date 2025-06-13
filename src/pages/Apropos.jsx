import React from "react";
import Equipe from "../components/Equipe";
import {
  FaRegHandshake,
  FaLeaf,
  FaHeart,
  FaShoppingBag,
  FaCompass,
} from "react-icons/fa";
import Logo_RafFyA from "../assets/logo_vertical.png";

const ICON_SIZE = 30;

// Bloc réutilisable pour chaque ligne avec icône et texte
const IconBlock = ({ Icon, children }) => (
  <div className="flex items-start gap-4">
    <Icon size={ICON_SIZE} className="text-yellow-700 mt-1 shrink-0" />
    <p className="text-lg">{children}</p>
  </div>
);

const Apropos = () => {
  return (
    <div className="py-24 px-6 max-w-6xl mx-auto text-gray-800">
      <h1 className="text-5xl md:text-6xl  font-bold text-gray-700 mb-10 text-center">
        À propos de Raf-Fy-A
      </h1>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Logo à gauche */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Logo_RafFyA}
            alt="Logo Raf-Fy-A"
            className="w-96 h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Textes à droite */}
        <div className="w-full md:w-1/2 space-y-6">
          <IconBlock Icon={FaShoppingBag}>
            <strong>Raf-Fy-A</strong> est une marque artisanale née à Antsirabe,
            capitale de l’artisanat malgache. Nous valorisons le travail manuel
            local à travers des pièces uniques et authentiques.
          </IconBlock>

          <IconBlock Icon={FaRegHandshake}>
            Notre mission est de proposer une consommation plus responsable,
            éthique et humaine en mettant en avant le talent des artisans de
            Madagascar.
          </IconBlock>

          <IconBlock Icon={FaLeaf}>
            Tous nos produits sont réalisés avec des matériaux durables,
            respectueux de l’environnement, dans un esprit zéro déchet et slow
            design.
          </IconBlock>

          <IconBlock Icon={FaHeart}>
            Chaque pièce est pensée avec amour, dans le respect des traditions,
            mais aussi de la modernité.
          </IconBlock>

          <IconBlock Icon={FaCompass}>
            Rejoignez Raf-Fy-A et explorez une autre manière de consommer : plus
            authentique, plus solidaire, plus proche de nos racines.
          </IconBlock>
        </div>
      </div>

      {/* Section Équipe */}
      <div className="mt-16">
        <Equipe />
      </div>
    </div>
  );
};

export default Apropos;

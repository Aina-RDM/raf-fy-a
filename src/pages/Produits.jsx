import React, { useState } from "react";
import sacImg from "../assets/product1.png";
import chapeauImg from "../assets/product2.png";
import decoImg from "../assets/product3.png";
import CommandeModal from "../components/CommandeModal";

const allProduits = [
  {
    id: 1,
    nom: "Sac en raphia tressé",
    description: "Sac fait main 100% naturel, parfait pour l'été.",
    image: sacImg,
    type: "sac",
    prix: "35 000 Ar",
  },
  {
    id: 2,
    nom: "Chapeau artisanal",
    description: "Chapeau léger et élégant, idéal pour le soleil.",
    image: chapeauImg,
    type: "chapeau",
    prix: "25 000 Ar",
  },
  {
    id: 3,
    nom: "Sous-tasse",
    description: "Sous-tasse tressé à la main pour la déco intérieure.",
    image: decoImg,
    type: "déco",
    prix: "30 000 Ar",
  },
  {
    id: 4,
    nom: "Sac cabas naturel",
    description: "Grand sac robuste pour les courses et sorties.",
    image: sacImg,
    type: "sac",
    prix: "40 000 Ar",
  },
];

const Produits = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filtre, setFiltre] = useState("tous");

  const produitsFiltres =
    filtre === "tous"
      ? allProduits
      : allProduits.filter((p) => p.type === filtre);

  return (
    <div className="py-20 px-6 max-w-6xl mx-auto text-gray-800">
      <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-700 mb-12">
        Nos Produits
      </h1>

      {/* Filtres */}
      <div className="flex justify-center gap-4 mb-10">
        {["tous", "sac", "chapeau", "déco"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltre(cat)}
            className={`px-4 py-2 rounded-md font-medium capitalize transition ${
              filtre === cat
                ? "bg-yellow-700 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-yellow-700 hover:text-white"
            }`}
          >
            {cat === "tous" ? "Tous" : cat}
          </button>
        ))}
      </div>

      {/* Grille produits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {produitsFiltres.map((produit) => (
          <div
            key={produit.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={produit.image}
              alt={produit.nom}
              className="w-full h-60 object-contain bg-gray-50"
            />
            <div className="p-5">
              <h2 className="text-3xl font-semibold text-gray-800 mb-1">
                {produit.nom}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {produit.description}
              </p>
              <p className="text-lg font-semibold text-yellow-800 mb-4">
                {produit.prix}
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-700 hover:bg-yellow-800 text-white font-medium py-2 px-4 rounded-md"
              >
                Commander
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Appel du composant modal */}
      <CommandeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Produits;

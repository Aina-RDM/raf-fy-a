import React, { useState, useEffect } from "react";
import { ShoppingCart, ArrowUp } from "lucide-react";
import { allProduits } from "../data/produitsData";
import CommandeModal from "../components/CommandeModal";
import { useCart } from "../context/CartContext";

const Produits = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [filtre, setFiltre] = useState("tous");
  const { addToCart } = useCart();
  const handleCommander = (produit) => {
    addToCart(produit);
    setIsModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">
                  {produit.prix.toLocaleString("fr-FR")} Ar
                </span>
                <button
                  onClick={() => handleCommander(produit)}
                  className="flex items-center gap-2 bg-yellow-700 text-white px-4 py-2 rounded-full hover:bg-yellow-800 transition cursor-pointer"
                >
                  <ShoppingCart size={18} />
                  Commander
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CommandeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      {/* Bouton retour haut */}
      {showScrollButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-yellow-700 text-white p-3 rounded-lg shadow-lg hover:bg-yellow-800 transition z-50"
          aria-label="Revenir en haut"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
};

export default Produits;

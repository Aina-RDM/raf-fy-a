import React, { useState } from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import CommandeModal from "./CommandeModal";
import { useCart } from "../context/CartContext";

const produits = [
  {
    id: 1,
    name: "Sac Raphia Élégant",
    description: "Fait main, parfait pour l’été.",
    prix: 30000,
    image: product1,
  },
  {
    id: 2,
    name: "Chapeau Soleil",
    description: "Protection et style naturel.",
    prix: 25000,
    image: product2,
  },
  {
    id: 3,
    name: "Sous-tasse Bohème",
    description: "Ajoute du charme à vos tables.",
    prix: 5000,
    image: product3,
  },
];

const BestSellers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const handleCommander = (product) => {
    addToCart(product);
    setIsModalOpen(true);
  };
  return (
    <div className="py-16 px-6 bg-white" id="best-sellers">
      <h2 className="text-6xl font-bold text-center text-gray-700 mb-12">
        Nos Meilleures Ventes
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {produits.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <div className="bg-yellow-700/15 p-4 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 object-contain"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">
                  {product.prix.toLocaleString("fr-FR")} Ar
                </span>
                <button
                  onClick={() => handleCommander(product)}
                  className="flex items-center gap-2 bg-yellow-700 text-white px-4 py-2 rounded-full hover:bg-yellow-800 transition cursor-pointer"
                >
                  <ShoppingCart size={18} /> Commander
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/produits");
          scrollTo(0, 0);
        }}
        className="bg-black text-white mt-12 mx-auto px-12 py-3 rounded-full hover:bg-yellow-800 transition duration-300 shadow-lg cursor-pointer items-center gap-2 flex"
      >
        Voir Plus <ArrowRight className="w-4 h-4" />
      </button>
      {/* Appel du composant modal */}
      <CommandeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default BestSellers;

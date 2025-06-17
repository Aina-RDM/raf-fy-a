import React, { useState } from "react";
import { X, Send, ArrowRight, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";

const CommandeModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { cart, removeFromCart, clearCart, addToCart, updateQuantity } =
    useCart();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const commandeFinale = {
      client: { nom, email, phone },
      produits: cart,
    };
    console.log("✅ Commande envoyée :", commandeFinale);
    clearCart();
    setStep(1);
    onClose();
  };

  const handleNextStep = () => {
    if (cart.length === 0) {
      alert("Votre panier est vide.");
    } else {
      setStep(2);
    }
  };

  const handleDecrease = (item) => {
    if (item.quantite > 1) {
      updateQuantity(item.id, item.quantite - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  const total = cart.reduce((acc, item) => acc + item.quantite * item.prix, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[60] overflow-y-auto">
      <div className="bg-white p-6 rounded-lg w-[95%] max-w-md shadow-lg relative flex flex-col max-h-[90vh] my-6">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={() => {
            onClose();
            setStep(1);
          }}
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-4">
          {step === 1 ? "Votre Panier" : "Vos Informations"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col overflow-hidden">
          <div className="space-y-3 overflow-y-auto pr-2 mb-4 max-h-[60vh]">
            {step === 1 &&
              (cart.length > 0 ? (
                cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border p-2 rounded"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={item.image}
                        alt={item.nom}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <p className="text-sm font-medium">{item.nom}</p>
                        <p className="text-xs text-gray-600">
                          {item.prix.toLocaleString("fr-FR")} x {item.quantite}{" "}
                          ={" "}
                          <strong>
                            {(item.prix * item.quantite).toLocaleString(
                              "fr-FR"
                            )}{" "}
                            Ar
                          </strong>
                        </p>
                        <div className="flex items-center mt-1 gap-1">
                          <button
                            type="button"
                            onClick={() => handleDecrease(item)}
                            className="px-2 py-1 text-sm border rounded hover:bg-gray-100"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-2">{item.quantite}</span>
                          <button
                            type="button"
                            onClick={() => addToCart(item)}
                            className="px-2 py-1 text-sm border rounded hover:bg-gray-100"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Supprimer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm text-center">
                  Votre panier est vide.
                </p>
              ))}

            {step === 2 && (
              <>
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  className="w-full border px-3 py-2 rounded text-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border px-3 py-2 rounded text-sm"
                  required
                />
                <input
                  type="tel"
                  placeholder="Votre téléphone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border px-3 py-2 rounded text-sm"
                  required
                />
              </>
            )}
          </div>

          {step === 1 && cart.length > 0 && (
            <div className="text-right text-sm font-medium mb-2 text-gray-700">
              Total :{" "}
              <span className="text-yellow-800">
                {total.toLocaleString("fr-FR")} Ar
              </span>
            </div>
          )}

          <div className="pt-3 border-t border-gray-200">
            {step === 1 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-yellow-700 text-white rounded hover:bg-yellow-800 text-sm"
              >
                <ArrowRight size={16} />
                Valider la commande
              </button>
            ) : (
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-yellow-700 text-white rounded hover:bg-yellow-800 text-sm"
              >
                <Send size={16} />
                Envoyer
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommandeModal;

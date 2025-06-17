import React, { useState } from "react";
import { X, Send } from "lucide-react"; // Import des icônes

const produitsDispo = [
  { id: 1, nom: "Pizza Margherita" },
  { id: 2, nom: "Burger Frites" },
  { id: 3, nom: "Tacos Poulet" },
];

const CommandeModal = ({ isOpen, onClose }) => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [commande, setCommande] = useState([{ produitId: "", quantite: 1 }]);

  if (!isOpen) return null;

  const handleChangeProduit = (index, value) => {
    const updated = [...commande];
    updated[index].produitId = value;
    setCommande(updated);
  };

  const handleChangeQuantite = (index, value) => {
    const updated = [...commande];
    updated[index].quantite = value;
    setCommande(updated);
  };

  const ajouterProduit = () => {
    setCommande([...commande, { produitId: "", quantite: 1 }]);
  };

  const supprimerProduit = (index) => {
    const updated = commande.filter((_, i) => i !== index);
    setCommande(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = { nom, email, phone, commande };
    console.log("Commande envoyée :", details);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[60] overflow-y-auto">
      <div className="bg-white p-6 rounded-lg w-[95%] max-w-md shadow-lg relative flex flex-col max-h-[90vh] my-6">
        {/* Bouton X pour fermer la modal */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-4">Passer une commande</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-grow overflow-hidden"
        >
          <div className="space-y-3 overflow-y-auto pr-2 mb-4">
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
              placeholder="Votre numéro de téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border px-3 py-2 rounded text-sm"
              required
            />

            {commande.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <select
                  value={item.produitId}
                  onChange={(e) => handleChangeProduit(index, e.target.value)}
                  className="w-2/3 border px-2 py-2 rounded text-sm"
                  required
                >
                  <option value="">Choisir un produit</option>
                  {produitsDispo.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.nom}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  min="1"
                  value={item.quantite}
                  onChange={(e) => handleChangeQuantite(index, e.target.value)}
                  className="w-1/3 border px-2 py-2 rounded text-sm"
                  required
                />
                {commande.length > 1 && (
                  <button
                    type="button"
                    onClick={() => supprimerProduit(index)}
                    className="text-red-600 hover:text-red-800"
                    title="Supprimer"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={ajouterProduit}
              className="text-sm text-yellow-700 hover:underline mt-2"
            >
              + Ajouter un autre produit
            </button>
          </div>

          {/* Bouton Envoyer centré et large */}
          <div className="pt-3 border-t border-gray-200">
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-yellow-700 text-white rounded hover:bg-yellow-800 text-sm"
            >
              <Send size={16} />
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommandeModal;

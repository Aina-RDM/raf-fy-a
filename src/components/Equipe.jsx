import React from "react";

const Equipe = () => {
  const membres = [
    {
      nom: "Larissa",
      rôle: "Fondatrice & Créatrice",
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      nom: "Nat",
      rôle: "Responsable Marketing",
      photo: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      nom: "Ando",
      rôle: "Logistique & Partenariats",
      photo: "https://randomuser.me/api/portraits/women/55.jpg",
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-5xl md:text-6xl  font-bold text-gray-700 mb-6 text-center">
        Notre équipe
      </h2>
      <p className="text-center text-gray-600 text-md max-w-2xl mx-auto mb-10">
        Une équipe passionnée, engagée et complémentaire, unie par la même
        vision pour faire rayonner l’artisanat malagasy à travers des créations
        uniques.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {membres.map((membre) => (
          <div
            key={membre.nom}
            className="text-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={membre.photo}
              alt={membre.nom}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-2 border-yellow-700"
            />
            <h2 className="text-2xl font-bold">{membre.nom}</h2>
            <p className="text-sm text-gray-600">{membre.rôle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipe;

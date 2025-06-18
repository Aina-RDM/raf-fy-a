import React from "react";

const Politique = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-5xl font-bold mb-6">Politique de Confidentialité</h1>
      <p className="mb-4">Dernière mise à jour : 18 juin 2025</p>

      <p className="mb-6">
        Chez <strong>Raf-FyA</strong>, nous respectons votre vie privée. Cette
        politique explique comment nous recueillons, utilisons et protégeons vos
        informations personnelles.
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-2">
        1. Données collectées
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Nom, adresse e-mail, numéro de téléphone</li>
        <li>Adresse de livraison et détails de commande</li>
        <li>Données techniques (IP, navigateur, appareil)</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-6 mb-2">
        2. Utilisation des données
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Traitement des commandes</li>
        <li>Amélioration de l’expérience utilisateur</li>
        <li>Envoi d’informations ou d’offres promotionnelles</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-6 mb-2">3. Cookies</h2>
      <p className="mb-4">
        Nous utilisons des cookies pour améliorer votre navigation et réaliser
        des statistiques anonymes. Vous pouvez les désactiver dans les
        paramètres de votre navigateur.
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-2">
        4. Partage des données
      </h2>
      <p className="mb-4">
        Vos données ne sont pas vendues. Elles peuvent être partagées avec des
        partenaires de confiance (paiement, livraison, statistiques).
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-2">5. Sécurité</h2>
      <p className="mb-4">
        Nous sécurisons vos données via une connexion HTTPS, des sauvegardes
        régulières et des accès limités.
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-2">6. Vos droits</h2>
      <p className="mb-4">
        Vous avez le droit d’accéder, de modifier ou de supprimer vos données.
        Pour toute demande :{" "}
        <a
          href="mailto:contact@raffya.com"
          className="text-yellow-700 underline"
        >
          contact@raffya.com
        </a>
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-2">7. Modifications</h2>
      <p>
        Cette politique peut être modifiée. Les utilisateurs seront informés en
        cas de changements importants.
      </p>
    </div>
  );
};

export default Politique;

import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto text-gray-800">
      <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-700 mb-12">
        Contactez-nous
      </h1>

      {/* Carte Google */}
      <div className="w-full h-80 mb-12 shadow-md rounded-lg overflow-hidden">
        <iframe
          title="Emplacement Raf-Fy-A"
          src="https://www.google.com/maps?q=-19.8379969,47.0399578&z=15&output=embed"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-none"
        ></iframe>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Infos */}
        <div className="space-y-6 text-gray-700 flex flex-col justify-center">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-yellow-700 mt-1" />
            <p>
              Lot 123 AB Antsirabe, Madagascar
              <br />
              (Immeuble derrière Ny Mpanarato)
            </p>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="text-yellow-700 mt-1" />
            <p>contact@raffya.com</p>
          </div>

          <div className="flex items-start gap-3">
            <FaPhone className="text-yellow-700 mt-1" />
            <p>+261 34 00 000 00</p>
          </div>

          <div className="flex items-start gap-3">
            <FaClock className="text-yellow-700 mt-1" />
            <p>
              Lundi - Vendredi : 9h - 18h <br />
              Samedi : 9h - 13h
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-700 hover:text-yellow-800 text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-700 hover:text-yellow-800 text-xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Formulaire */}
        <div className="md:col-span-2">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
              Comment pouvons-nous vous aider ?
            </h2>
            <p className="text-gray-600">
              Partagez vos questions, vos idées ou vos demandes via le
              formulaire ci-dessous. Notre équipe vous répondra dans les plus
              brefs délais avec toute l’attention requise.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="nom" className="block font-medium mb-1">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700"
                placeholder="votremail@exemple.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700"
                placeholder="Écrivez votre message ici..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-700 hover:bg-yellow-800 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

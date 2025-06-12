import React from "react";
import bgImg from "../assets/bg_news.png";

const NewsLetter = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center mx-4 rounded-lg sm:mx-[2%] px-4 sm:px-8 md:px-16 my-20 overflow-hidden bg-yellow-700/15">
      {/* Image de fond floutée */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md opacity-40"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      {/* Cercle en haut à gauche */}
      <div className="hidden md:block absolute w-[360px] h-[360px] bg-yellow-700 opacity-15 rounded-full -top-60 -left-24 z-20"></div>

      {/* Petit cercle par-dessus */}
      <div className="hidden md:block absolute w-20 h-20 rounded-full top-20 -left-11 z-30 border-4 border-white bg-white items-center justify-center">
        <div className="w-full h-full rounded-full bg-yellow-700"></div>
      </div>

      {/* Cercle en bas à droite */}
      <div className="hidden md:block absolute w-48 h-48 rounded-full bottom-[-50px] right-[-100px] z-20">
        <div className="w-full h-full rounded-full bg-yellow-700 opacity-15"></div>
      </div>
      <div className="hidden md:block absolute w-10 h-10 rounded-full bottom-[-10px] right-[70px] z-20 border-[3px] border-white bg-white">
        <div className="w-full h-full rounded-full bg-yellow-700"></div>
      </div>

      {/* Contenu */}
      <div className="text-center max-w-4xl mx-auto relative z-20">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Abonnez-vous à notre newsletter
        </h2>
        <p className="text-gray-600 mb-8 px-2">
          Recevez nos dernières nouveautés, promotions et inspirations en
          raphia.
        </p>

        {/* Formulaire */}
        <form className="w-full max-w-xl mx-auto">
          <div className="flex bg-white border border-gray-300 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-yellow-600">
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              className="flex-1 px-6 py-3 text-sm md:text-base focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-700 text-white px-6 py-3 text-sm md:text-base hover:bg-yellow-800 transition"
            >
              S’abonner
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;

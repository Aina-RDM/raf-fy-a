import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (routePath) => {
    navigate(routePath);
    setIsOpen(false);
  };

  const menus = [
    { label: "Accueil", link: "/" },
    { label: "À Propos", link: "/apropos" },
    { label: "Produits", link: "/produits" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-white bg-opacity-90 backdrop-blur-md text-black z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo / Marque */}
          <div
            className="text-2xl font-extrabold tracking-widest text-yellow-700 cursor-pointer"
            onClick={() => handleNavClick("/")}
          >
            RAF-<span className="text-black">Fy</span>-A
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menus.map((item) => (
              <span
                key={item.link}
                onClick={() => handleNavClick(item.link)}
                className={`cursor-pointer text-md font-semibold transition ${
                  location.pathname === item.link
                    ? "text-yellow-700 underline"
                    : "text-gray-700 hover:text-yellow-700 hover:underline"
                }`}
              >
                {item.label}
              </span>
            ))}
          </div>
          <button className="hidden md:block bg-yellow-700 text-white px-5 py-2 rounded-full hover:bg-yellow-800 transition shadow-md">
            Commander
          </button>

          {/* Bouton Menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-800"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-4 flex flex-col items-center space-y-3 bg-white bg-opacity-95 rounded-lg shadow-md py-4 animate-fade-in-down">
            {menus.map((item) => (
              <span
                key={item.link}
                onClick={() => handleNavClick(item.link)}
                className={`cursor-pointer text-md font-semibold transition ${
                  location.pathname === item.link
                    ? "text-yellow-700 underline"
                    : "text-gray-700 hover:text-yellow-700 hover:underline"
                }`}
              >
                {item.label}
              </span>
            ))}
            <button className="bg-yellow-700 text-white px-6 py-2 rounded-full hover:bg-yellow-800 transition shadow-md">
              Commander
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

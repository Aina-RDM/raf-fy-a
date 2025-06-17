import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo_RafFyA from "../assets/Logo_RafFyA.png";
import { useCart } from "../context/CartContext";

const Navbar = ({ openModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useCart();

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
    <nav className="fixed w-full bg-white bg-opacity-90 backdrop-blur-md text-black z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <img
            onClick={() => navigate("/")}
            className="w-52 cursor-pointer"
            src={Logo_RafFyA}
            alt="Logo Raf-FyA"
          />

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menus.map((item) => {
              const isActive = location.pathname === item.link;

              return (
                <span
                  key={item.link}
                  onClick={() => handleNavClick(item.link)}
                  className={`cursor-pointer text-md font-semibold text-gray-700 hover:text-yellow-700 transition relative px-1 ${
                    isActive ? "text-yellow-700" : ""
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-yellow-700 animate-draw" />
                  )}
                </span>
              );
            })}
          </div>

          <button
            onClick={openModal}
            className="relative hidden md:flex items-center gap-2 bg-yellow-700 text-white px-5 py-2 rounded-full hover:bg-yellow-800 transition shadow-md"
          >
            <ShoppingCart size={18} />
            Panier
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Bouton Menu mobile */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-800 relative"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-white z-50 flex flex-col items-center justify-center space-y-6 px-4 py-10 overflow-y-auto">
            {menus.map((item) => (
              <span
                key={item.link}
                onClick={() => handleNavClick(item.link)}
                className="text-xl font-semibold text-gray-800 hover:text-yellow-700 transition"
              >
                {item.label}
              </span>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                openModal();
              }}
              className="relative flex bg-yellow-700 items-center gap-2 text-white px-6 py-3 rounded-full hover:bg-yellow-800 transition shadow-md"
            >
              <ShoppingCart size={18} />
              Panier
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

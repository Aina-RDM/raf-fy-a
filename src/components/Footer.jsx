import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import Logo_RafFyA from "../assets/Logo_RafFyA.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    { label: "Accueil", link: "/" },
    { label: "À Propos", link: "/apropos" },
    { label: "Produits", link: "/produits" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo + slogan */}
          <div className="flex flex-col items-center md:items-start">
            <img
              onClick={() => navigate("/")}
              className="w-48 cursor-pointer"
              src={Logo_RafFyA}
              alt="Logo Raf-FyA"
            />
            <p className="mt-2 text-sm text-gray-600 italic">
              Artisanat responsable, élégance durable.
            </p>
          </div>

          {/* Menu de navigation */}
          <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-0 md:flex-row md:space-x-8">
            {menus.map((item) => {
              const isActive = location.pathname === item.link;
              return (
                <span
                  key={item.link}
                  onClick={() => navigate(item.link)}
                  className={`cursor-pointer text-sm font-medium transition px-1 pb-1 ${
                    isActive
                      ? "text-yellow-700 border-b-2 border-yellow-700"
                      : "text-gray-600 hover:text-yellow-700 hover:border-b-2 hover:border-yellow-700"
                  }`}
                >
                  {item.label}
                </span>
              );
            })}
          </div>

          {/* Contact & réseaux */}
          <div className="flex flex-col space-y-3 text-gray-700 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-700" />
              <span>contact@raf-fya.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-700" />
              <span>+261 34 00 000 00</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-yellow-700" />
              <span>Antsirabe, Madagascar</span>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-700 hover:text-yellow-800 transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-700 hover:text-yellow-800 transition"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Légal */}
        <div className="mt-8 border-t pt-6 text-center text-xs text-gray-500 space-y-2">
          <div className="flex justify-center gap-4 flex-wrap">
            <span
              onClick={() => navigate("/cookies")}
              className="cursor-pointer hover:underline"
            >
              Cookies
            </span>
            <span
              onClick={() => navigate("/politique-de-confidentialite")}
              className="cursor-pointer hover:underline"
            >
              Politique de confidentialité
            </span>
          </div>
          <div>
            © {new Date().getFullYear()} Raf-Fy-A. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

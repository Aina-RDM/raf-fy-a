import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Produits from "./pages/Produits";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CommandeModal from "./components/CommandeModal";
import Politique from "./pages/Politique";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Navbar openModal={() => setIsModalOpen(true)} />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/politique-de-confidentialite" element={<Politique />} />
      </Routes>
      <Footer />
      <CommandeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Produits from "./pages/Produits";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Header from "../components/Header";
import ConfianceClient from "../components/ConfianceClient";
import SectionService from "../components/SectionService";
import BestSellers from "../components/BestSellers";

const Accueil = () => {
  return (
    <div>
      <Header />
      <ConfianceClient />
      <SectionService />
      <BestSellers />
    </div>
  );
};

export default Accueil;

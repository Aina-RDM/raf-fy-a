import React from "react";
import Header from "../components/Header";
import ConfianceClient from "../components/ConfianceClient";
import SectionService from "../components/SectionService";
import BestSellers from "../components/BestSellers";
import Banner from "../components/Banner";

const Accueil = () => {
  return (
    <div>
      <Header />
      <ConfianceClient />
      <SectionService />
      <BestSellers />
      <Banner />
    </div>
  );
};

export default Accueil;

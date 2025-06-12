import React from "react";
import Header from "../components/Header";
import ConfianceClient from "../components/ConfianceClient";
import SectionService from "../components/SectionService";
import BestSellers from "../components/BestSellers";
import Banner from "../components/Banner";
import NewsLetter from "../components/NewsLetter";
import Temoignages from "../components/Temoignages";

const Accueil = () => {
  return (
    <div>
      <Header />
      <ConfianceClient />
      <SectionService />
      <BestSellers />
      <Banner />
      <NewsLetter />
      <Temoignages />
    </div>
  );
};

export default Accueil;

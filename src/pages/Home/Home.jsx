import React from "react";
import Navbar from "../../components/Navbar";
import ProductList from "../Products/ProductList";
import { HomeContainer } from "./HomeStyles";
import Hero from "../../components/Hero";
import ExtraInfo from "../../components/Extrainfo";
import Footer from "../../components/Footer";

function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <Hero />
      <ExtraInfo />
      <ProductList />
      <Footer />
    </HomeContainer>
  );
}

export default Home;

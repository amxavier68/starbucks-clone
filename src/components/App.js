import React from "react";

import "../../public/css/styles.css";

import Navbar from "./layout/Navbar";
import Header from "./layout/Header";
import Feature from "./layout/Feature";
import Special from "./layout/Special";
import Showcase from "./layout/Showcase";
import Support from "./layout/Support";
import DeliveryMedia from "./layout/Delivery-Media";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Feature />
      <Special />
      <Showcase />
      <Support />
      <DeliveryMedia />
      <div className="divider"></div>
      <Footer />
    </>
  );
};

export default App;

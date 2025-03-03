import React from "react";
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import AnalyticsFeature from "./AnalyticsFeature/AnalyticsFeature";
import Feature from "./Feature/Feature";
import Price from "./Price/Price";
import Offer from "./Offer/Offer";
// import Footer from "./Footer/Footer";
// import Review from "./Review/Review";

const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <WhyChoose />
      <AnalyticsFeature />
      <Feature />
      {/* <Review /> */}
      <Price />
      <Offer />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

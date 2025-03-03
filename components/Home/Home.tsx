import React from "react";
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import AnalyticsFeature from "./AnalyticsFeature/AnalyticsFeature";
import Feature from "./Feature/Feature";
import Price from "./Price/Price";
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
    </div>
  );
};

export default Home;

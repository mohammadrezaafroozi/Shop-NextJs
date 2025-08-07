import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import SliderComponent from "@/components/SliderComponent";
import TopSellers from "@/components/TopSellers";
import React from "react";

const HomePage = () => {
  return <div>
    <SliderComponent/>
    <Categories/>
    <NewArrivals/>
    <TopSellers/>

  </div>;
};

export default HomePage;

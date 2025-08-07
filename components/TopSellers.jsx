import React from "react";
import { products } from "../public/data/data.json";
import CardCarousel from "./CardCarousel";

const TopSellers = () => {
  const cards = products.slice(4, 12).map((item) => ({
    image: item.image,
    text: item.text,
    price: `$${item.price}`,
    id: item.id,
    category: item.category,
    inStock: item.inStock,
  }));
  return (
    <div>
      <CardCarousel title="Top Sellers" cards={cards} />
    </div>
  );
};

export default TopSellers;

import React from "react";
import {products} from "../public/data/data.json"
import CardCarousel from "./CardCarousel";

const NewArrivals = () => {
    const cards = products.slice(0, 8).map((item)=>({
        image: item.image,
        text: item.text,
        price:`$${item.price}`,
        id: item.id,
        category: item.category,
        inStock: item.inStock,
    }))
  return <div>
    <CardCarousel title="New Arrivals" cards={cards}/>
  </div>;
};

export default NewArrivals;

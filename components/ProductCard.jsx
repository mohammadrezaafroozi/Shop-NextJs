import { addToCart, removeFromCart } from "@/lib/cartSlice";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { FaCheck, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
//recieve id prop
const ProductCard = ({ id, image, text, price, category, inStock }) => {
  //setup redux dispatch
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === id);
  // price to number
  const numericPrice =
    typeof price === "string"
      ? parseFloat(price.replace("$", "")) || 0
      : Number(price) || 0;

  //handle cart icon to add/remove products and show toast
  const handleToggleCart = () => {
    if (isInCart) {
      dispatch(removeFromCart(id));
      toast.success(" Removed from shopping basket", {
        duration: 3000,
        position: "bottom-center",
        icon: <FaCheck className="text-white" />,
        style: {
          background: "#ef4444",
          color: "#ffffff",
          fontSize: "16px",
          fontWeight: 600,
          padding: "12px 20px",
          borderRadius: "6px",
          transition: "opacity .3s ease",
        },
      });
    } else {
      dispatch(
        addToCart({
          id,
          image,
          text,
          price: numericPrice,
          quantity: 1,
          category,
          inStock,
        })
      );
      toast.success(" successfully added to basket", {
        duration: 3000,
        position: "bottom-center",
        icon: <FaCheck className="text-white" />,
        style: {
          background: "#22c55e",
          color: "#ffffff",
          fontSize: "16px",
          fontWeight: 600,
          padding: "12px 20px",
          borderRadius: "6px",
          transition: "opacity .3s ease",
        },
      });
    }
  };
  return (
    <div className=" bg-white rounded-lg shadow-md overflow-visible flex flex-col h-[280px]">
      <div className="relative w-full h-[280px]">
        <Image src={image} alt="" fill style={{ objectFit: "cover" }} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 px-4 py-3 m-0">
        {text}
      </h3>
      <div className="flex items-center justify-between px-4 pt-0 pb-4 m-0">
        <span className="text-xl font-bold text-gray-700 ">
          {numericPrice.toFixed(2)}
        </span>
        <div className=" flex space-x-3">
          <FaHeart className="text-gray-600 hover:text-red-500 cursor-pointer" />
          <FaShoppingCart
            className={`cursor-pointer ${
              isInCart ? "text-green-500" : "text-gray-600 hover:text-green-500"
            }`}
            onClick={handleToggleCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

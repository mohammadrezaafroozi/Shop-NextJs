"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaBars,
  FaHeart,
  FaShoppingCart,
  FaTimes,
  FaTruck,
} from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  //  get cart items from redux to display count
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemcount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <nav className=" flex sticky top-0 z-50 bg-slate-50 px-6 py-4 justify-between">
      {/* left logo */}
      <div className="flex flex-col leading-tight">
        <span className="text-lg md:text-2xl font-bold text-[#a91f64]">
          AfrooziDev
        </span>
        <span className="text-sm text-gray-500 tracking-widest self-center ">
          Furniture Shop
        </span>
      </div>
      {/* nav center links */}
      <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
        <li>
          <Link href="/" className=" hover:text-[#a01f64]">
            {" "}
            Home
          </Link>
        </li>
        <li className="hover:text-[#a01f64] cursor-pointer">New Arrivals</li>
        <li className="hover:text-[#a01f64] cursor-pointer">Top Sellers</li>
        <li>
          <Link href="/products" className=" hover:text-[#a01f64]">
            {" "}
            Products
          </Link>
        </li>
      </ul>
      {/* right sec */}
      <div className=" flex items-center gap-6 text-gray-700 text-xl">
        <div className="flex gap-6">
          <FaTruck className=" hover:text-[#a01f64]" />
          <Link href="/" className=" hover:text-[#a01f64]">
            <FaHeart className="hover:text-[#a01f64]" />
          </Link>

          <Link href="/cart" className=" relative">
           {cartItemcount>0 &&<span
              className="absolute -top-3 -right-4 text-xs text-white
          bg-[#a91f64] rounded-full px-1.5 py-0.5"
            >
              {cartItemcount}
            </span>}
            <FaShoppingCart className="hover:text-[#a01f64]" />
          </Link>
        </div>
        {/* menu icon */}
        <div className="md:hidden flex">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-2xl hover:text-[#a01f64] cursor-pointer" />
            ) : (
              <FaBars className="text-2xl hover:text-[#a01f64] cursor-pointer" />
            )}
          </button>
        </div>
      </div>
      {/* mobile scope menu */}
      {isMenuOpen && (
        <ul
          className="absolute top-full left-0 w-full bg-white flex flex-col items-center
         gap-4 py-4 text-gray-700 font-medium md:hidden shadow-md "
        >
          <li>
            <Link
              href="/"
              className=" hover:text-[#a01f64]"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li className=" hover:text-[#a01f64]" onClick={toggleMenu}>
            New Arrivals
          </li>
          <li className=" hover:text-[#a01f64]" onClick={toggleMenu}>
            Top Sellers
          </li>
          <li>
            <Link
              href="/Products"
              className=" hover:text-[#a01f64]"
              onClick={toggleMenu}
            >
              Products
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

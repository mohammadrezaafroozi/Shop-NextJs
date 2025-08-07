"use client";

import dynamic from "next/dynamic";
import ReduxProvider from "./ReduxProvider";
import { Toaster } from "react-hot-toast";

const Navbar = dynamic(() => import("./Navbar"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

export default function LayoutWrapper({ children }) {
  return (
    <ReduxProvider>
      <Navbar />
      {children}
      <Toaster />
      <Footer />
    </ReduxProvider>
  );
}

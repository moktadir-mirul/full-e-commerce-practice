"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Nav from "./Components/Nav";
import CartProvider from "./contexts/Cart";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <CartProvider>
            <Nav />
            {children}            
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

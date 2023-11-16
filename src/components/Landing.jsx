import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Counter } from "./Counter";
import { Product } from "./Product";
import { Service } from "./Service";
import { Contact } from "./Contact";
import { Nav } from "./Nav";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Counter />} />
        <Route path="/prod" element={<Product />} />
        <Route path="/serv" element={<Service />} />
        <Route path="/cont" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

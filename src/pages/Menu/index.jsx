import React, { useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import MenuCard from "./MenuCard";
import "./Menu.css";
import Footer from "../Home/Footer";

export default function Menu() {
  const { getProduct, data } = useProductContext();
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div id="menu">
      <div className="container">
        <div className="menu">
          {data.map((el, idx) => (
            <MenuCard el={el} key={idx} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProductContext = () => useContext(productContext);
export default function ProductContext({ children }) {
  let API = "http://localhost:3000/data";

  const [data, setData] = useState([]);
  const [oneProduct, setOneProduct] = useState({});

  const postProduct = async (newObj) => {
    await axios.post(API, newObj);
  };

  const getProduct = async () => {
    const { data } = await axios(API);
    setData(data);
  };

  const removeProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProduct();
  };

  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    setOneProduct(data);
  };
  const editProduct = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`, editedProduct);
  };
  // const editProduct = async (id, editedProduct) => {
  //   await axios.patch(`${API}/${id}`, editedProduct);
  // };

  const values = {
    postProduct,
    getProduct,
    data,
    removeProduct,
    getOneProduct,
    oneProduct,
    editProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
}

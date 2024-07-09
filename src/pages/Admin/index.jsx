import React, { useState } from "react";
import "./Admin.css";
import { useProductContext } from "../../context/ProductContext";
import Footer from "../Home/Footer";

export default function Admin() {
  const { postProduct } = useProductContext();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleClick = () => {
    const newObj = {
      name: name,
      price: price,
      image: image,
    };
    postProduct(newObj);
  };

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="inputs">
            <form class="max-w-xs mx-auto">
              <div class="relative">
                <input
                  type="text"
                  id="floating-phone-number"
                  class="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder=" "
                  onChange={(e) => setName(e.target.value)}
                />
                <label
                  for="floating-phone-number"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  name
                </label>
              </div>
            </form>
          </div>
          <div className="inputs">
            <form class="max-w-xs mx-auto">
              <div class="relative">
                <input
                  type="text"
                  id="floating-phone-number"
                  class="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder=" "
                  onChange={(e) => setPrice(e.target.value)}
                />
                <label
                  for="floating-phone-number"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  price
                </label>
              </div>
            </form>
          </div>
          <div className="inputs">
            <form class="max-w-xs mx-auto">
              <div class="relative">
                <input
                  type="text"
                  id="floating-phone-number"
                  class="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder=" "
                  onChange={(e) => setImage(e.target.value)}
                />
                <label
                  for="floating-phone-number"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  URL
                </label>
              </div>
            </form>
          </div>
          <div className="inputs">
            <button
              onClick={() => handleClick()}
              style={{
                marginLeft: "100px",
              }}
              type="button"
              class="w-2/3  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Default
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

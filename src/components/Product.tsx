import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details
    ? "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded float-right"
    : "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded float right";

  const btnClasses = [
    "bg-yellow-500",
    "hover:bg-blue-700",
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
    "float-right",
    btnBgClassName,
  ];
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center mb-2">
      {/* <h2 className="text-2xl font-bold">Product Title</h2>
      <p className="text-gray-500">Product Description</p>
      <div className="mt-4">
        <span className="text-xl font-bold text-gray-800">$19.99</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right">
          Add to Cart
        </button>
      </div> */}
      <img
        src={product.image}
        alt={product.title}
        className="w-1/4  object-cover object-center"
      />
      <p>{product.title}</p>
      <p className="text-xl font-bold text-gray-800">{product.price}</p>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails(!details)}
      >
        {details ? "Hide Details" : " Show Details"}
      </button>

      {details && (
        <div>
          <p>
            Category:{" "}
            <span style={{ fontWeight: "bold" }}>{product?.category}</span>
          </p>
          <p>
            Rating:{" "}
            <span style={{ fontWeight: "bold" }}>{product?.rating?.rate}</span>
          </p>
          <p>
            Rating Count:{" "}
            <span style={{ fontWeight: "bold" }}>{product?.rating?.count}</span>
          </p>

          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
}

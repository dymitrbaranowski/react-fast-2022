import React, { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";

const productData: IProduct = {
  title: "test product",
  description: "test description",
  price: 100,
  image: "https://via.placeholder.com/150",
  category: "test category",
  rating: {
    rate: 4.5,
    count: 100,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (value.trim() === "") {
      setError("Title is required");
      return;
    }

    productData.title = value;

    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );

    onCreate(response.data);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Title"
        className="p-2 border border-gray-300 rounded outline-0"
        value={value}
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="Description"
        className="p-2 border border-gray-300 rounded outline-0"
      />
      <input
        type="number"
        placeholder="Price"
        className="p-2 border border-gray-300 rounded outline-0"
      />
      <input
        type="text"
        placeholder="Image URL"
        className="p-2 border border-gray-300 rounded outline-0"
      />
      <input
        type="text"
        placeholder="Category"
        className="p-2 border border-gray-300 rounded outline-0"
      />
      <input
        type="number"
        placeholder="Rating"
        className="p-2 border border-gray-300 rounded outline-0"
      />

      {error && (
        <div className="bg-red-500 text-white p-4 text-center">{error}</div>
      )}

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
      >
        Add Product
      </button>
    </form>
  );
}

import React, { PureComponent } from "react";
import { useProducts } from "../hooks/products";
import { Product } from "../components/Product";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Modal } from "../components/Modal";
import { CreateProduct } from "../components/CreateProduct";
import { useContext } from "react";
import { IProduct } from "../models";
import { ModalContext } from "../context/modalContext";

export function ProductsPage() {
  const { products, loading, error, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      {modal && (
        <Modal title="Create Product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      <button
        className="bottom-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
        onClick={open}
      >
        Create Product
      </button>
    </div>
  );
}

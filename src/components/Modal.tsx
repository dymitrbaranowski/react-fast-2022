import React from "react";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export function Modal({ children, title, onClose }: ModalProps) {
  return (
    <>
      {/* <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"></div> */}
      <div
        className="fixed  bg-black/50 top-0 right-0 left-0 bottom-0"
        onClick={onClose}
      ></div>
      <div className="w-1/2 bg-white p-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg">
        <h1 className="text-2xl text-center mb-2">{title}</h1>

        {children}
      </div>
    </>
  );
}

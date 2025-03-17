import React from "react";

export function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="bg-red-500 text-white p-4 text-center">
      {message}
      {/* <p className="text-center text-red-600">{error}</p> */}
    </div>
  );
}

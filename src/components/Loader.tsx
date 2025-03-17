import React from "react";

export function Loader() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900">
        <span className="sr-only">Loading...</span>
        {/* <p className="text-center">Loading...</p> */}
      </div>
    </div>
  );
}

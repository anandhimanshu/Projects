import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[...Array(20)].map((_, index) => (
        <div key={index} className="shimmer-card w-60 p-4 m-2 rounded-lg bg-gray-100">
          <div className="shimmer-image h-40 bg-gray-200 mb-4"></div>
          <div className="shimmer-details">
            <div className="shimmer-name h-4 bg-gray-200 mb-2"></div>
            <div className="shimmer-rating h-4 bg-gray-200 mb-2"></div>
            <div className="shimmer-address h-4 bg-gray-200"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

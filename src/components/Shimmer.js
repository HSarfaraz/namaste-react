import React from "react";

const Shimmer = () => {
  return (
    <div className="restaurant-list" data-testid="shimmer">
      {Array(10)
        .fill("")
        .map((e) => (
          <div className="shimmer-card">
            <div className="shimmer-img"></div>
            <h3 className="shimmer-info"></h3>
            <h4 className="shimmer-info"></h4>
            <h5 className="shimmer-info"></h5>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;

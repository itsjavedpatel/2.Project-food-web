import React from "react";
const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img"></div>
      <div className="shimmer-body">
        <div className="shimmer-restroname"></div>
        <div className="shimmer-others"></div>
        <div className="shimmer-others"></div>
      </div>
    </div>
  );
};
const Shimmer = () => {
  return (
    <div className="shimmer">
      <div className="shimmer-search">
        <div className="shimmer-sbar"></div>
        <div className="shimmer-btn"></div>
      </div>
      <div className="shimmer-container">
        {/* two ways to loop through */}
        {Array.from({ length: 10 }, (_, index) => (
          <ShimmerCard key={index} />
        ))}

        {[...Array(10)].map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    </div>
  );
};
export default Shimmer;

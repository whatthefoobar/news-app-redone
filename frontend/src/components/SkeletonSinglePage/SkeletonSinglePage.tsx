// src/components/SkeletonNewsCard/SkeletonNewsCard.tsx

import React from "react";
import "./SkeletonSinglePage.css"; // Add styles for the skeleton here

const SkeletonSinglePage = () => {
  return (
    <div className="skeleton-news-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-author"></div>
      <div className="skeleton-date"></div>
    </div>
  );
};

export default SkeletonSinglePage;

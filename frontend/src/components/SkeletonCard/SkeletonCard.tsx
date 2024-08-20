import "./SkeletonCard.css"; // Add styles for the skeleton here

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-byline"></div>
      <div className="skeleton-date"></div>
    </div>
  );
};

export default SkeletonCard;

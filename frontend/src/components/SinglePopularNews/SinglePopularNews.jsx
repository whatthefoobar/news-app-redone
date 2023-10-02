import React from "react";
import "./SinglePopularNews.css";

const SinglePopularNews = ({
  author,
  imageSrc,
  imageAlt,
  title,
  newsContent,
  imageDirection,
}) => {
  return imageDirection === "left" ? (
    <div className="singlePopularNews">
      <div className="singlePopularNews__image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="singlePopularNews__content">
        <h3>{title}</h3>
        <p>{newsContent}</p>
        <div className="singlePopularNews__author">
          <div className="singlePopularNews__author__image">
            <img src={author} alt="author" />
          </div>
          <div className="singlePopularNews__author__content">
            <h4>Grodrick Vingmarson</h4>
            <p>News Author</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="singlePopularNews">
      <div className="singlePopularNews__content">
        <h3>{title}</h3>
        <p>{newsContent}</p>
        <div className="singlePopularNews__author">
          <div className="singlePopularNews__author__image">
            <img src={author} alt="author" />
          </div>
          <div className="singlePopularNews__author__content">
            <h4>Grodrick Vingmarson</h4>
            <p>News Author</p>
          </div>
        </div>
      </div>
      <div className="singlePopularNews__image">
        <img src={news} alt="news" />
      </div>
    </div>
  );
};

export default SinglePopularNews;

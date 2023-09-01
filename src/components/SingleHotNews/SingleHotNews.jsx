import React from "react";
import "./SingleHotNews.css";

const SingleHotNews = ({ newsImage, title, authorImage }) => {
  return (
    <div className="singleHotNews">
      <div className="singleHotNews__image">
        <img src={newsImage} alt="single news" />
      </div>
      <div className="singleHotNews__content">
        <div className="singleHotNews__content__text">
          <h3>{title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            voluptatem.
          </p>
        </div>

        <div className="singleHotNews__author">
          <div className="singleHotNews__author__image">
            <img src={authorImage} alt="author" />
          </div>
          <div className="singleHotNews__author__content">
            <h4>Grodrick Vingmarson</h4>
            <p>News Author</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHotNews;

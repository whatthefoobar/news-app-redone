import React from "react";
import "./SinglePopularNews.css";
interface IProps {
  author: string;
  imageSrc: string;
  title: string;
  newsContent: string;
  imageDirection: "left" | "right";
}

const SinglePopularNews = ({
  author,
  imageSrc,
  title,
  newsContent,
  imageDirection,
}: IProps) => {
  return imageDirection === "left" ? (
    <div className="singlePopularNews">
      {imageSrc && (
        <div className="singlePopularNews__image">
          <img src={imageSrc} alt="news" />
        </div>
      )}
      <div className="singlePopularNews__content">
        <h3>{title}</h3>
        <p>{newsContent}</p>
        <div className="singlePopularNews__author">
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
          <div className="singlePopularNews__author__content">
            <h4>Grodrick Vingmarson</h4>
            <p>News Author</p>
          </div>
        </div>
      </div>
      {imageSrc !== "" && (
        <div className="singlePopularNews__image">
          <img src={imageSrc} alt="news" />
        </div>
      )}
    </div>
  );
};

export default SinglePopularNews;

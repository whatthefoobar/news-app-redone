import React from "react";
import "./SinglePopularNews.css";
import { Link } from "react-router-dom";
import news from "../../assets/images/news.jpg";

interface IProps {
  id: string | number;
  imageSrc: string;
  title: string;
  newsContent: string;
  published_date: string;
}

const SinglePopularNews = ({
  id,
  imageSrc,
  title,
  newsContent,
  published_date,
}: IProps) => {
  return (
    <div className="singlePopularNews">
      <div className="singlePopularNews__image">
        {imageSrc.length > 0 ? (
          <img src={imageSrc} alt="news" />
        ) : (
          <img src={news} alt="news" />
        )}
      </div>

      <div className="singlePopularNews__content">
        <h4>{title}</h4>
        <p>{newsContent}</p>
        <Link to={`/news/${id}`}>Read more</Link>
        {/* <a href="/">Read more</a> */}
        <div className="posted-date">
          <p>{published_date}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePopularNews;

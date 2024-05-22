import React from "react";
import "./SinglePopularNewsCard.css";
import { Link } from "react-router-dom";
import news from "../../assets/images/news.jpg";
import formatDate from "../../util/formatDate";

interface IProps {
  id: string | number;
  imageSrc: string;
  title: string;
  newsContent: string;
  byline: string;
  published_date: string;
}

const SinglePopularNewsCardCard = ({
  id,
  imageSrc,
  title,
  newsContent,
  byline,
  published_date,
}: IProps) => {
  return (
    <Link to={`/news/${id}`}>
      <div className="SinglePopularNewsCard">
        <div className="SinglePopularNewsCard__image">
          {imageSrc.length > 0 ? (
            <img src={imageSrc} alt="news" />
          ) : (
            <img src={news} alt="news" />
          )}
        </div>

        <div className="SinglePopularNewsCard__content">
          <h4>{title}</h4>
          <p>{newsContent}</p>

          <p className="author">{byline}</p>

          <Link to={`/news/${id}`}>Read more</Link>

          <div className="posted-date">
            <p>{formatDate(published_date)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SinglePopularNewsCardCard;

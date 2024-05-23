import React from "react";
import "./NewsCard.css";
import { Link } from "react-router-dom";
import news from "../../assets/images/news.jpg";
import formatDate from "../../util/formatDate";

interface IProps {
  id?: string | number;
  imageSrc: string;
  title: string;
  newsContent: string;
  byline: string;
  published_date: string;
}

const NewsCard = ({
  id,
  imageSrc,
  title,
  newsContent,
  byline,
  published_date,
}: IProps) => {
  return (
    <Link to={`/news/${id}`}>
      <div className="NewsCard">
        <div className="NewsCard__image">
          {imageSrc.length > 0 ? (
            <img src={imageSrc} alt="news" />
          ) : (
            <img src={news} alt="news" />
          )}
        </div>

        <div className="NewsCard__content">
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

export default NewsCard;

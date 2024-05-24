import React from "react";
import "./NewsCard.css";
import { Link } from "react-router-dom";
import news from "../../assets/images/news.jpg";
import formatDate from "../../util/formatDate";

interface IProps {
  type?: string;
  id?: string | number;
  imageSrc: string;
  title: string;
  newsContent: string;
  byline: string;
  published_date: string;
}

const NewsCard = ({
  type,
  id,
  imageSrc,
  title,
  newsContent,
  byline,
  published_date,
}: IProps) => {
  const path = type ? `/${type}/${id}` : `/news/${id}`;

  return (
    <Link to={path}>
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

          <Link to={path}>Read more</Link>

          <div className="posted-date">
            <p>{formatDate(published_date)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;

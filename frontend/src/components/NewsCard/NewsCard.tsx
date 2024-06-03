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
  // because of pagination i cannot use index as an id as it it maximum 3 since i have max 4 items shown per page
  //but i can take the whole object and check
  // category/:category/news/:newsId
  // /news/id is for home single news
  // category/:category/news/:newsId is for individual category id
  const path = type ? `/category/${type}/news/${title}` : `/news/${id}`;
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

          <button>Read more</button>

          <div className="posted-date">
            <p>{formatDate(published_date)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;

import { useEffect, useState } from "react";
import "./SingleNewsPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { stringToNumber } from "../../../util/stringToNumber";
import { IPopularNews } from "../../../types/api";
import formatDate from "../../../util/formatDate";
import { useGetPopularArticlesQuery } from "../../slices/apiSlice";
import SkeletonSinglePage from "../../components/SkeletonSinglePage/SkeletonSinglePage";

const SingleNewsPage = () => {
  const [article, setArticle] = useState<IPopularNews | null>(null);
  const navigate = useNavigate();
  const { newsId: id } = useParams();
  const newsId = stringToNumber(id);
  // if id no in the route is less than 100 so 2 digits max then it is an index as the category news in the navbar have no individual id other than the index number then we need to fetch the category

  const { data, isLoading, isError } = useGetPopularArticlesQuery();

  useEffect(() => {
    if (data) {
      const foundArticle = data.find((article) => article.id === newsId);
      setArticle(foundArticle || null);
    }
  }, [data, newsId]);

  const media = article?.media || [];
  const imageSrc =
    media[0] && media[0]["media-metadata"][2]
      ? media[0]["media-metadata"][2].url
      : "";

  return (
    <div className="news-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      {/* {isLoading && <Loader />} */}
      {isLoading && <SkeletonSinglePage />}
      {isError && <div>Something went wrong fetching your data.</div>}
      <div className="news-card">
        <img src={imageSrc} alt="News" className="news-image" />
        <h1 className="news-title">{article?.title}</h1>
        <p className="news-text">
          {article?.abstract}
          {"  "}
          <span>
            <a className="source" href={article?.url}>
              Source
            </a>
          </span>
        </p>{" "}
        <p className="author">{article?.byline}</p>
        <p>
          {article?.published_date ? formatDate(article.published_date) : ""}
        </p>
      </div>
    </div>
  );
};

export default SingleNewsPage;

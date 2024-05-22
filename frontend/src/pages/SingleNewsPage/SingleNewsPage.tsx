import { useEffect, useState } from "react";
import { useGetPopularArticlesQuery } from "../../slices/apiSlice";
import "./SingleNewsPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { stringToNumber } from "../../util/stringToNumber";
import { IPopularNews } from "../../types/api";

const SingleNewsPage = () => {
  const [article, setArticle] = useState<IPopularNews | null>(null);
  const navigate = useNavigate();
  const { newsId: id } = useParams();
  const newsId = stringToNumber(id);
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

  useEffect(() => {
    console.log("all popular news in the single page:", data);
    console.log("filtered article:", article);
  }, [data, article]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading articles.</p>;
  }

  return (
    <div className="news-container">
      <button className="back-button" onClick={() => navigate("/")}>
        Back
      </button>
      <div className="news-card">
        <img src={imageSrc} alt="News" className="news-image" />
        <h1 className="news-title">{article?.title}</h1>
        <p className="news-text">{article?.abstract}</p>
      </div>
    </div>
  );
};

export default SingleNewsPage;

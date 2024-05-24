import { useEffect, useState } from "react";
import { useGetCategoryArticlesQuery } from "../../slices/apiSlice";
import "./SingleCategoryNewsPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { stringToNumber } from "../../util/stringToNumber";
import { ICategoryArticle } from "../../types/api";
import formatDate from "../../util/formatDate";
import Loader from "../../components/Loader/Loader";

const SingleCategoryNewsPage = () => {
  const [categoryArticle, setCategoryArticle] =
    useState<ICategoryArticle | null>(null);
  const navigate = useNavigate();
  const { category: routeCategory, newsId: id } = useParams();
  const newsId = stringToNumber(id);
  const category = routeCategory?.toString();

  // if id no in the route is less than 100 so 2 digits max then it is an index as the category news in the navbar have no individual id other than the index number then we need to fetch the category

  const { data, isLoading, isError } = useGetCategoryArticlesQuery(
    `${category}`
  );

  useEffect(() => {
    if (data && newsId) {
      setCategoryArticle(data.topStories[newsId]);
    }
  }, [data, newsId]);

  const media = categoryArticle?.multimedia || [];
  const imageSrc = media[0] ? media[0].url : "";

  return (
    <div className="news-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      {isLoading && <Loader />}
      {isError && <div>Something went wrong fetching your data.</div>}

      <div className="news-card">
        <img src={imageSrc} alt="News" className="news-image" />
        <h1 className="news-title">{categoryArticle?.title}</h1>
        <p className="news-text">{categoryArticle?.abstract}</p>
        <p className="author">{categoryArticle?.byline}</p>
        <p>
          {categoryArticle?.published_date
            ? formatDate(categoryArticle.published_date)
            : ""}
        </p>
      </div>
    </div>
  );
};

export default SingleCategoryNewsPage;

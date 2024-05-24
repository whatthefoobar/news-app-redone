import { useEffect, useState } from "react";
import { useGetCategoryArticlesQuery } from "../../slices/apiSlice";
import "./SingleCategoryNewsPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { stringToNumber } from "../../util/stringToNumber";
import { ICategoryArticle } from "../../types/api";
import formatDate from "../../util/formatDate";
import Loader from "../../components/Loader/Loader";
import { findNewsObjectByTitle } from "../../util/findObjectByTitle";

const SingleCategoryNewsPage = () => {
  const navigate = useNavigate();
  const { category: routeCategory, newsId: title } = useParams();
  // const newsId = stringToNumber(id);
  const category = routeCategory?.toString();
  // if id no in the route is less than 100 so 2 digits max then it is an index as the category news in the navbar have no individual id other than the index number then we need to fetch the category
  const { data, isLoading, isError } = useGetCategoryArticlesQuery(
    `${category}`
  );
  let article: ICategoryArticle | undefined;

  if (data && title) article = findNewsObjectByTitle(data, title);

  // console.log("found category article", article);

  return (
    <div className="news-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      {isLoading && <Loader />}
      {isError && <div>Something went wrong fetching your data.</div>}

      <div className="news-card">
        <img
          src={article?.multimedia[0].url}
          alt="News"
          className="news-image"
        />
        <h1 className="news-title">{article?.title}</h1>
        <p className="news-text">{article?.abstract}</p>
        <p className="author">{article?.byline}</p>
        <p>
          {article?.published_date ? formatDate(article.published_date) : ""}
        </p>
      </div>
    </div>
  );
};

export default SingleCategoryNewsPage;

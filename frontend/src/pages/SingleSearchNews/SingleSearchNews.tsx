import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchArticlesQuery } from "../../slices/apiSlice";
import { findSearchNewsObjectByTitle } from "../../../util/findObjectByTitle";
import { ISingleArticleSearch } from "../../../types/api";
import Loader from "../../components/Loader/Loader";
import formatDate from "../../../util/formatDate";

const SingleSearchNews = () => {
  const navigate = useNavigate();
  const routeParams = useParams();
  const { keyword, newsId } = routeParams;
  // const keyword = routeParams.keyword || "";
  // const newsId = routeParams.newsId;
  console.log(routeParams.newsId);

  const {
    data: searchByKeywordNews,
    isLoading,
    isError,
  } = useSearchArticlesQuery(keyword!);
  console.log("searchByKeywordNews", searchByKeywordNews?.response.docs);

  let article: ISingleArticleSearch | undefined;

  if (searchByKeywordNews && newsId)
    article = findSearchNewsObjectByTitle(
      searchByKeywordNews?.response.docs,
      newsId
    );
  // console.log("newsId", newsId);
  // console.log(
  //   findSearchNewsObjectByTitle(searchByKeywordNews?.response.docs, newsId)
  // );

  console.log("keyword article", article);

  // console.log("the single search article", article);
  // Conditionally get the image source
  const imageSrc = article?.multimedia?.length
    ? `https://static01.nyt.com/${article.multimedia[0].url}`
    : "";

  if (isLoading) return <Loader />;
  if (isError) return <div>Something went wrong fetching your data.</div>;
  if (!article) return <div>No article found.</div>;

  return (
    <div className="news-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>

      <div className="news-card">
        <img src={imageSrc} alt="News" className="news-image" />
        <h1 className="news-title">{article?.headline.main}</h1>
        <p className="news-text">
          {article?.abstract}{" "}
          <span>
            <a className="source" href={article?.web_url}>
              Source
            </a>
          </span>
        </p>
        <p className="author">{article?.byline.original}</p>
        <p>{article?.pub_date ? formatDate(article.pub_date) : ""}</p>
      </div>
    </div>
  );
};

export default SingleSearchNews;

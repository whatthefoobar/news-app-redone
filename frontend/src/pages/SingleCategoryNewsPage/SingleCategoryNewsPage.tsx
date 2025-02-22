import "./SingleCategoryNewsPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { ICategoryArticle } from "../../../types/api";
import formatDate from "../../../util/formatDate";
import {
  findNewsObjectByTitle,
  normalizeAndCleanTitlesCategoryNews,
  replaceHyphensWithSpaces,
} from "../../../util/findObjectByTitle";
import { useGetCategoryArticlesQuery } from "../../slices/apiSlice";
import news from "../../assets/assets/images/news.jpg";
import SkeletonSinglePage from "../../components/SkeletonSinglePage/SkeletonSinglePage";

const SingleCategoryNewsPage = () => {
  const navigate = useNavigate();
  const { category: routeCategory, newsId: title } = useParams();

  const category = routeCategory?.toString();
  // if id no in the route is less than 100 so 2 digits max then it is an index as the category news in the navbar have no individual id other than the index number then we need to fetch the category
  const { data, isLoading, isError } = useGetCategoryArticlesQuery(
    `${category}`
  );
  let article: ICategoryArticle | undefined;

  if (data && title) {
    const updatedTitle = replaceHyphensWithSpaces(title);
    const normalizedCategoryNewsData = normalizeAndCleanTitlesCategoryNews(
      data.topStories
    );
    article = findNewsObjectByTitle(normalizedCategoryNewsData, updatedTitle);
  }

  return (
    <div className="news-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      {isLoading && <SkeletonSinglePage />}
      {isError && <div>Something went wrong fetching your data.</div>}
      {article && (
        <div className="news-card">
          {article.multimedia.length > 0 ? (
            <img
              src={article?.multimedia[0].url}
              alt="News"
              className="news-image"
            />
          ) : (
            <img src={news} alt="news" />
          )}

          <h1 className="news-title">{article?.title}</h1>
          <p className="news-text">
            {article?.abstract}{" "}
            <span>
              <a className="source" href={article?.url}>
                Source
              </a>
            </span>
          </p>
          <p className="author">{article?.byline}</p>
          <p>
            {article?.published_date ? formatDate(article.published_date) : ""}
          </p>
        </div>
      )}
    </div>
  );
};

export default SingleCategoryNewsPage;

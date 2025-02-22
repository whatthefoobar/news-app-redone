import { useNavigate, useParams } from "react-router-dom";
import { useSearchArticlesQuery } from "../../slices/apiSlice";
import {
  findSearchNewsObjectByTitle,
  normalizeAndCleanHeadlines,
  replaceHyphensWithSpaces,
} from "../../../util/findObjectByTitle";
import { ISingleArticleSearch } from "../../../types/api";
import formatDate from "../../../util/formatDate";
// import news from "../../assets/assets/images/news.jpg";
import SkeletonSinglePage from "../../components/SkeletonSinglePage/SkeletonSinglePage";

const SingleSearchNews = () => {
  const navigate = useNavigate();
  const routeParams = useParams();
  const { keyword, newsId } = routeParams;

  const {
    data: searchByKeywordNews,
    isLoading,
    isError,
  } = useSearchArticlesQuery(keyword!);

  let article: ISingleArticleSearch | undefined;

  if (searchByKeywordNews && newsId) {
    const normalizedSearchByKeywordNews = normalizeAndCleanHeadlines(
      searchByKeywordNews.response.docs
    );
    const updatedId = replaceHyphensWithSpaces(newsId);
    article = findSearchNewsObjectByTitle(
      normalizedSearchByKeywordNews,
      updatedId
    );
  }

  const imageSrc =
    article && article.multimedia.length
      ? `https://static01.nyt.com/${article.multimedia[0].url}`
      : "";

  return (
    <div className="news-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      {/* {isLoading && <Loader />} */}
      {isLoading && <SkeletonSinglePage />}
      {isError && <div>Something went wrong fetching your data.</div>}
      {!isLoading && !article && <div>No article found.</div>}
      {article && !isLoading && (
        <div className="news-card">
          {/* {article && imageSrc.length > 0 ? (
          <img src={imageSrc} alt="news" className="news-image" />
        ) : (
          <img src={news} alt="news" />
        )} */}
          <img src={imageSrc} alt="News" className="news-image" />
          <h1 className="news-title">{article.headline.main}</h1>
          <p className="news-text">
            {article?.abstract}{" "}
            <span>
              <a className="source" href={article.web_url}>
                Source
              </a>
            </span>
          </p>
          <p className="author">{article?.byline.original}</p>
          <p>{article?.pub_date ? formatDate(article.pub_date) : ""}</p>
        </div>
      )}
    </div>
  );
};

export default SingleSearchNews;

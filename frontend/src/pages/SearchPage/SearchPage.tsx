import { useNavigate, useParams } from "react-router-dom";
import { useSearchArticlesQuery } from "../../slices/apiSlice";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";
import { capitalizeFirstLetter } from "../../../util/capitalizeFirstLetter";
import NewsCard from "../../components/NewsCard/NewsCard";
import extractUUIDFromNytUrl from "../../../util/extractUUID";

const SearchPage = () => {
  const navigate = useNavigate();
  const routeParams = useParams();
  const keyword = routeParams.keyword || "";
  const page = routeParams.page || "1";
  console.log(keyword);

  const {
    data: searchByKeywordNews,
    isLoading,
    isError,
  } = useSearchArticlesQuery(keyword);

  // can also use const { data, isLoading, isError } = useSearchArticlesQuery(keyword ?? "");
  console.log(`search news by keyword : ${keyword}:`, searchByKeywordNews); // works
  // extract news id

  const itemsPerPage = 4; // Number of items per page
  const currentPage = page ? parseInt(page, 10) : 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchByKeywordNews
    ? searchByKeywordNews.response.docs.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const paginate = (pageNumber: number) => {
    navigate(`/search/${keyword}/page/${pageNumber}`);
  };
  const test = extractUUIDFromNytUrl(
    "nyt://article/e4cdd98c-4163-509a-bbdf-37c30b0207f0"
  );
  console.log(test);

  return (
    <div className="news">
      <h2>News about : {capitalizeFirstLetter(keyword)}</h2>
      <div className="news__container">
        {isLoading && <Loader />}
        {isError && <div>Error fetching data from the API.</div>}

        {!isLoading &&
          searchByKeywordNews?.response.docs &&
          currentItems.map((item) => {
            // Conditionally get the image source
            const imageSrc = item.multimedia?.length
              ? `https://static01.nyt.com/${item.multimedia[0].url}`
              : "";
            // Extract UUID from item._id using the function
            const articleId = extractUUIDFromNytUrl(item._id) || "";

            return (
              <NewsCard
                search={true}
                keyword={keyword}
                key={item._id}
                id={articleId}
                imageSrc={imageSrc}
                title={item.headline.main}
                newsContent={item.lead_paragraph}
                byline={item.byline.original}
                published_date={item.pub_date}
              />
            );
          })}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(
          (searchByKeywordNews?.response.docs.length || 0) / itemsPerPage
        )}
        onPageChange={paginate}
      />
    </div>
  );
};

export default SearchPage;

import { useNavigate, useParams } from "react-router-dom";
import { useSearchArticlesQuery } from "../../slices/apiSlice";
import Pagination from "../../components/Pagination/Pagination";
import { capitalizeFirstLetter } from "../../../util/capitalizeFirstLetter";
import NewsCard from "../../components/NewsCard/NewsCard";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";

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

  return (
    <div className="news">
      <h2>News about : {capitalizeFirstLetter(keyword)}</h2>
      <div className="news__container">
        {/* {isLoading && <Loader />} */}
        {isLoading && (
          <>
            {Array.from({ length: itemsPerPage }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </>
        )}
        {isError && <div>Error fetching data from the API.</div>}

        {!isLoading &&
          searchByKeywordNews?.response.docs &&
          currentItems.map((item) => {
            const imageSrc = item.multimedia?.length
              ? `https://static01.nyt.com/${item.multimedia[0].url}`
              : "";

            return (
              <NewsCard
                key={item._id}
                search={true}
                keyword={keyword}
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

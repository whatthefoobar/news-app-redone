import "./PopularNews.css";
import useApiFetch from "../../util/useApiFetch";
import {
  DummyPopularNews,
  IApiResponseObject,
  IPopularNews,
} from "../../types/api";
import { useEffect, useState } from "react";
import SinglePopularNews from "../SinglePopularNews/SinglePopularNews";
import Pagination from "../Pagination/Pagination";

const PopularNews = () => {
  const { data, isLoading, isError } = useApiFetch<IApiResponseObject[]>({
    url: "/api/popular",
  });

  // Define filteredPopularNews state
  const [filteredPopularNews, setFilteredPopularNews] = useState<
    IPopularNews[]
  >([
    {
      id: 0,
      byline: "",
      title: "",
      abstract: "",
      url: "",
      imageSrc: "",
      imageDirection: "left",
    },
  ]);

  useEffect(() => {
    if (isLoading) {
      // Handle loading state, e.g., show a loading spinner
      return;
    }

    if (isError) {
      // Handle error state, e.g., display an error message
      return;
    }

    if (data) {
      // Data is available, proceed with rendering or processing
      console.log("fetched popular news", data);

      const filteredNews = data.map(
        (newsItem: IApiResponseObject, index: number) => {
          const media = newsItem.media || [];
          const imageSrc =
            media[0] && media[0]["media-metadata"][2]
              ? media[0]["media-metadata"][2].url
              : "";

          return {
            id: newsItem.id || "",
            byline: newsItem.byline || "",
            title: newsItem.title || "",
            abstract: newsItem.abstract || "",
            url: newsItem.url || "",
            imageSrc: imageSrc,
            imageDirection: index % 2 === 0 ? "left" : "right",
          };
        }
      );
      console.log("filtered news", filteredNews);

      // Update the filteredPopularNews state
      setFilteredPopularNews(filteredNews);
    }
  }, [data, isLoading, isError]);

  const itemsPerPage = 2; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPopularNews.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  console.log("current items:", currentItems);

  return (
    <div className="popularNews">
      <h2>Popular News</h2>
      <div className="container">
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching data from the API.</div>}

        {filteredPopularNews !== null &&
          filteredPopularNews.length !== 0 &&
          filteredPopularNews.map((item) => (
            <SinglePopularNews
              key={item.id}
              author={item.byline}
              imageSrc={item.imageSrc}
              title={item.title}
              newsContent={item.abstract}
              imageDirection={item.imageDirection}
            />
          ))}

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredPopularNews.length / itemsPerPage)}
          onPageChange={paginate}
        />
      </div>
    </div>
  );
};

export default PopularNews;

// const { data: popularNews, isLoading, isError, error } = useApi();
// console.log("popularNews from api:", popularNews);

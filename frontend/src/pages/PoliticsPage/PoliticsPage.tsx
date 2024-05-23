import "./PoliticsPage.css";
import { IFilteredPopularNews, IPopularNews } from "../../types/api";
import { useEffect, useState } from "react";
import {
  useGetCategoryArticlesQuery,
  useGetPopularArticlesQuery,
} from "../../slices/apiSlice";

import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import NewsCard from "../../components/NewsCard/NewsCard";
import { log } from "console";

const PopularNews = () => {
  // Define filteredPopularNews state
  const [filteredPopularNews, setFilteredPopularNews] = useState<
    IFilteredPopularNews[]
  >([
    {
      id: 0,
      byline: "",
      title: "",
      abstract: "",
      url: "",
      imageSrc: "",
      published_date: "",
    },
  ]);
  const { data, isLoading, isError } = useGetCategoryArticlesQuery("politics");

  useEffect(() => {
    console.log("politics news:", data);

    // if (data) {
    //   console.log("data fetched from /api/popular", data);
    //   //filter the data obj to only the props we need
    //   const filteredNews = data.map((newsItem: IPopularNews, index: number) => {
    //     const media = newsItem.media || [];
    //     const imageSrc =
    //       media[0] && media[0]["media-metadata"][2]
    //         ? media[0]["media-metadata"][2].url
    //         : "";

    //     return {
    //       id: newsItem.id || "",
    //       byline: newsItem.byline || "",
    //       title: newsItem.title || "",
    //       abstract: newsItem.abstract || "",
    //       url: newsItem.url || "",
    //       imageSrc: imageSrc,
    //       published_date: newsItem.published_date || "",
    //     };
    //   });

    //   // Update the filteredPopularNews state
    //   setFilteredPopularNews(filteredNews);
    // }
  }, [data]);

  const itemsPerPage = 4; // Number of items per page
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

  return (
    <div className="politics">
      <h2>Politics News</h2>
      {/* <div className="politics__container">
        {isLoading && <Loader />}
        {isError && <div>Error fetching data from the API.</div>}

        {currentItems.map((item) => (
          <NewsCard
            key={item.id}
            id={item.id}
            imageSrc={item.imageSrc}
            title={item.title}
            newsContent={item.abstract}
            byline={item.byline}
            published_date={item.published_date}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredPopularNews.length / itemsPerPage)}
        onPageChange={paginate}
      /> */}
    </div>
  );
};

export default PopularNews;

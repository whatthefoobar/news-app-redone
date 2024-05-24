import "./PopularNews.css";
import { IFilteredPopularNews, IPopularNews } from "../../types/api";
import { useEffect, useState } from "react";

import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";
import { useGetPopularArticlesQuery } from "../../slices/apiSlice";
import NewsCard from "../NewsCard/NewsCard";
import { useNavigate, useParams } from "react-router-dom";

const PopularNews = () => {
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
  const { data, isLoading, isError } = useGetPopularArticlesQuery();
  const { page } = useParams<{ page: string }>(); // Reading the page number from the URL
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      //filter the data obj to only the props we need
      const filteredNews = data.map((newsItem: IPopularNews, index: number) => {
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
          published_date: newsItem.published_date || "",
        };
      });

      // Update the filteredPopularNews state
      setFilteredPopularNews(filteredNews);
    }
  }, [data]);

  const itemsPerPage = 4; // Number of items per page
  // const [currentPage, setCurrentPage] = useState(1);
  const currentPage = page ? parseInt(page, 10) : 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPopularNews.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber: number) => {
    // setCurrentPage(pageNumber);
    navigate(`/${pageNumber}`);
  };

  return (
    <div className="popularNews">
      <h2>Popular News</h2>
      <div className="popularNews__container">
        {isLoading && <Loader />}
        {isError && <div>Error fetching data from the API.</div>}

        {!isLoading &&
          data &&
          currentItems.map((item) => (
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
      />
    </div>
  );
};

export default PopularNews;

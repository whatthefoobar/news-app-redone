import React, { useState } from "react";
import SinglePopularNews from "../SinglePopularNews/SinglePopularNews";
import author from "../../assets/images/author.jpg";
import news1 from "../../assets/images/news1.jpg";
import Pagination from "../Pagination/Pagination";
import "./PopularNews.css";
// import { useApi } from "../../util/useApi";
import useApiFetch from "../../util/useApiFetch";

const PopularNews = () => {
  const { data, isLoading, isError } = useApiFetch("/api/popular");
  console.log("fetched popular news", data);

  const filteredPopularNews = data.map((newsItem, index) => ({
    id: newsItem.id || "",
    byline: newsItem.byline || "",
    title: newsItem.title || "",
    abstract: newsItem.abstract || "",
    url: newsItem.url || "",
    imageData: newsItem.media[0]["media-metadata"][2].url || "",
    imageDirection: index % 2 === 0 ? "left" : "right",
  }));

  console.log("filteredPopularNews:", filteredPopularNews);

  const itemsPerPage = 2; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPopularNews.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // console.log("current items:", currentItems);

  return (
    <div className="popularNews">
      <h2>Popular News</h2>
      <div className="container">
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching data from the API.</div>}

        {currentItems.map((item) => (
          <SinglePopularNews
            key={item.id}
            author={item.byline}
            autorImg={author}
            imageSrc={imageData}
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

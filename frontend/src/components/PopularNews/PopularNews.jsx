import React, { useState } from "react";
import SinglePopularNews from "../SinglePopularNews/SinglePopularNews";

import author from "../../assets/images/author.jpg";
import news1 from "../../assets/images/news1.jpg";
import news2 from "../../assets/images/news2.jpeg";
import news4 from "../../assets/images/news4.jpg";
import news5 from "../../assets/images/news5.jpg";
import news6 from "../../assets/images/news6.jpg";
import Pagination from "../Pagination/Pagination";
import "./PopularNews.css";

const PopularNews = () => {
  // Sample news data
  const data = {
    news: [
      {
        author: author,
        news: news1,
        title: "Eskimos began to build hut",
        imageDirection: "left",
      },
      {
        author: author,
        news: news2,
        title: "Ozone layer was repaired",
        imageDirection: "right",
      },
      {
        author: author,
        news: news4,
        title: "Title3",
        imageDirection: "left",
      },
      {
        author: author,
        news: news5,
        title: "Title4",
        imageDirection: "right",
      },
      {
        author: author,
        news: news6,
        title: "Title5",
        imageDirection: "left",
      },
      {
        author: author,
        news: news2,
        title: "Title6",
        imageDirection: "right",
      },
      // Add more news items here
    ],
  };

  const itemsPerPage = 2; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.news.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="popularNews">
      <h2>Popular News</h2>
      <div className="container">
        {currentItems.map((item, index) => (
          <SinglePopularNews
            key={index}
            author={item.author}
            news={item.news}
            title={item.title}
            imageDirection={item.imageDirection}
          />
        ))}
        {/* Pagination component */}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.news.length / itemsPerPage)}
          onPageChange={paginate}
        />
      </div>
    </div>
  );
};

export default PopularNews;

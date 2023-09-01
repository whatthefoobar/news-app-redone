import React, { useState } from "react";
import SingleHotNews from "../SingleHotNews/SingleHotNews";

import news3 from "../../assets/images/news3.jpg";
import news4 from "../../assets/images/news4.jpg";
import news5 from "../../assets/images/news5.jpg";
import author from "../../assets/images/author.jpg";
import VerticalPagination from "../VerticalPagination/VerticalPagination";
import "./HotNews.css";

const HotNews = () => {
  // Sample news data
  const data = {
    news: [
      {
        newsImage: news3,
        title: "Amazon in blackout",
        authorImage: author,
      },
      {
        newsImage: news4,
        title: "Amazon in blackout",
        authorImage: author,
      },
      {
        newsImage: news5,
        title: "Amazon in blackout",
        authorImage: author,
      },
      {
        newsImage: news3,
        title: "Amazon in blackout",
        authorImage: author,
      },
      // Add more news items here
    ],
  };

  const [currentPage, setCurrentPage] = useState(1);

  const navigateToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= data.news.length) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="hotNews">
      <h2>Hot news</h2>
      <div className="container">
        <SingleHotNews
          newsImage={data.news[currentPage - 1].newsImage}
          title={data.news[currentPage - 1].title}
          authorImage={data.news[currentPage - 1].authorImage}
        />

        <VerticalPagination
          currentPage={currentPage}
          totalPages={data.news.length}
          onBackClick={() => navigateToPage(currentPage - 1)}
          onForwardClick={() => navigateToPage(currentPage + 1)}
        />
      </div>
    </div>
  );
};

export default HotNews;

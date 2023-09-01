import React from "react";
import "./PopularNews.css";
import SinglePopularNews from "../SinglePopularNews/SinglePopularNews";
import author from "../../assets/images/author.jpg";
import news1 from "../../assets/images/news1.jpg";
import news2 from "../../assets/images/news2.jpeg";

const PopularNews = () => {
  return (
    <div className="popularNews">
      <h2>Popular News</h2>
      <div className="container">
        <SinglePopularNews
          author={author}
          news={news1}
          title={"Eskimos began to build hut"}
          imageDirection={"left"}
        />
        <SinglePopularNews
          author={author}
          news={news2}
          title={"Ozone layer was repaired"}
          imageDirection={"right"}
        />
      </div>

      {/* pagination component */}
    </div>
  );
};

export default PopularNews;

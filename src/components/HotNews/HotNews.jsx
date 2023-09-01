import React from "react";
import "./HotNews.css";
import SingleHotNews from "../SingleHotNews/SingleHotNews";
import news3 from "../../assets/images/news3.jpg";
import author from "../../assets/images/author.jpg";

const HotNews = () => {
  return (
    <div>
      <h2>Hot news</h2>
      <SingleHotNews
        newsImage={news3}
        title={"Amazon in blackout"}
        authorImage={author}
      />
    </div>
  );
};

export default HotNews;

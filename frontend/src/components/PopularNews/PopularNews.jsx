import React, { useState } from "react";
import SinglePopularNews from "../SinglePopularNews/SinglePopularNews";
import author from "../../assets/images/author.jpg";
import news1 from "../../assets/images/news1.jpg";
// import news2 from "../../assets/images/news2.jpeg";
// import news4 from "../../assets/images/news4.jpg";
// import news5 from "../../assets/images/news5.jpg";
// import news6 from "../../assets/images/news6.jpg";
import Pagination from "../Pagination/Pagination";
import "./PopularNews.css";
import { useApi } from "../../util/useApi";

const PopularNews = () => {
  const { data: popularNews, isLoading, isError, error } = useApi();
  console.log("popularNews from api:", popularNews);

  const filteredPopularNews = popularNews.map((newsItem, index) => ({
    id: newsItem.id || "",
    byline: newsItem.byline || "",
    title: newsItem.title || "",
    abstract: newsItem.abstract || "",
    url: newsItem.url || "",
    // imageData: newsItem.media[0]["media-metadata"][2].url || "",
    //cannot filter by this img source to get img url src from api
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

  console.log("current items:", currentItems);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="popularNews">
      <h2>Popular News</h2>
      <div className="container">
        {isLoading && <h4>Loading...</h4>}
        {isError && <h4>An error ocurred.</h4>}

        {currentItems.map((item) => (
          <SinglePopularNews
            key={item.id}
            author={item.byline}
            autorImg={author}
            imageSrc={news1}
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

{
  /* {data.map((item) => (
          <p>{item.imageData[0]["media-metadata"][1].url}</p>
        ))} */
}

{
  /* {isLoading ? (
          <h4>Loading....</h4>
        ) : (
          popularNews.map((news) => <p key={news.id}>{news.title}</p>)
        )} */
}

// img format:
// ("https://static01.nyt.com/images/2023/09/30/multimedia/00xp-wyeth-mgtp/00xp-wyeth-mgtp-mobileMasterAt3x.jpg?quality=75&auto=webp&disable=upscale&width=1200");
// works

// <SinglePopularNews
//   key={index}
//   author={item.author}
//   news={item.news}
//   title={item.title}
//   newsContent={item.newsContent}
//   imageDirection={item.imageDirection}
// />

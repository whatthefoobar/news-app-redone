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
import { useApi } from "../../util/useApi";

const PopularNews = () => {
  const { data, isLoading, isError, error } = useApi();
  console.log("popularNews:", data);
  // console.log("isError:", isError);

  // const filteredPopularNews = popularNews.map((newsItem, index) => ({
  //   id: newsItem.id || "",
  //   byline: newsItem.byline || "",
  //   title: newsItem.title || "",
  //   abstract: newsItem.abstract || "",
  //   url: newsItem.url || "",
  //   imageData: newsItem.media || [],
  //   imageDirection: index % 2 === 0 ? "left" : "right",
  // }));
  // console.log("filteredPopularNews:", filteredPopularNews);

  // Sample news data
  // const data = {
  //   news: [
  //     {
  //       author: author,
  //       news: news1,
  //       title: "Eskimos began to build hut",
  //       newsContent:
  //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,atque! Alias consequuntur quas maxime sint quae rem excepturi mollitia nulla?",
  //       imageDirection: "left",
  //     },
  //     {
  //       author: author,
  //       news: news2,
  //       title: "Ozone layer was repaired",
  //       newsContent:
  //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,atque! Alias consequuntur quas maxime sint quae rem excepturi mollitia nulla?",
  //       imageDirection: "right",
  //     },
  //     {
  //       author: author,
  //       news: news4,
  //       title: "Title3",
  //       newsContent:
  //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,atque! Alias consequuntur quas maxime sint quae rem excepturi mollitia nulla?",
  //       imageDirection: "left",
  //     },
  //     {
  //       author: author,
  //       news: news5,
  //       title: "Title4",
  //       newsContent:
  //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,atque! Alias consequuntur quas maxime sint quae rem excepturi mollitia nulla?",
  //       imageDirection: "right",
  //     },
  //     {
  //       author: author,
  //       news: news6,
  //       title: "Title5",
  //       newsContent:
  //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,atque! Alias consequuntur quas maxime sint quae rem excepturi mollitia nulla?",
  //       imageDirection: "left",
  //     },
  //     {
  //       author: author,
  //       news: news2,
  //       title: "Title6",
  //       newsContent:
  //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,atque! Alias consequuntur quas maxime sint quae rem excepturi mollitia nulla?",
  //       imageDirection: "right",
  //     },
  //     // Add more news items here
  //   ],
  // };

  // const itemsPerPage = 2; // Number of items per page
  // const [currentPage, setCurrentPage] = useState(1);

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="popularNews">
      <h2>Popular News</h2>
      <div className="container">
        {isLoading && <h4>Loading...</h4>}
        {isError && <h4>An error ocurred.</h4>}
        {data.map((item) => (
          <SinglePopularNews
            key={item.id}
            author={item.byline}
            imageSrc={item.imageData[0]["media-metadata"][1].url}
            imageAlt={item.imageData[0].caption}
            title={item.title}
            newsContent={item.abstract}
            imageDirection={item.imageDirection}
          />
        ))}

        {/* <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / itemsPerPage)}
          onPageChange={paginate}
        /> */}
      </div>
    </div>
  );
};

export default PopularNews;

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

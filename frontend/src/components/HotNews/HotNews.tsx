import { useState, useEffect } from "react";
import VerticalPagination from "../VerticalPagination/VerticalPagination";
import "./HotNews.css";
import useApiFetch from "../../util/useApiFetch";
import { IApiResponseObject2 } from "../../types/api";
import SingleHotNews from "../SingleHotNews/SingleHotNews";

const HotNews = () => {
  const { data, isLoading, isError } = useApiFetch<IApiResponseObject2[]>({
    url: "/api/live-news",
  });
  console.log("fetched live news", data);

  const [filteredLiveNews, setFilteredLiveNews] = useState<
    IApiResponseObject2[]
  >([]);

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
      console.log("fetched live news", data);

      const filteredNews = data.map((newsItem, index) => ({
        author: newsItem.author || "",
        category: newsItem.category || "",
        country: newsItem.country || "",
        description: newsItem.description || "",
        image: newsItem.image || "",
        language: newsItem.language || "",
        published_at: newsItem.published_at || "",
        source: newsItem.source || "",
        title: newsItem.title || "",
        url: newsItem.url || "",
      }));
      console.log("filteredLiveNews: ", filteredNews);

      // Update the filteredLiveNews state
      setFilteredLiveNews(filteredNews);
    }
  }, [data, isLoading, isError]);

  const [currentPage, setCurrentPage] = useState(1);

  const navigateToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= filteredLiveNews.length) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="hotNews">
      <h2>Hot news</h2>
      <div className="container">
        <SingleHotNews
          newsImage={filteredLiveNews[currentPage - 1].image}
          title={filteredLiveNews[currentPage - 1].title}
          newsContent={filteredLiveNews[currentPage - 1].description}
        />

        <VerticalPagination
          currentPage={currentPage}
          totalPages={filteredLiveNews.length}
          onBackClick={() => navigateToPage(currentPage - 1)}
          onForwardClick={() => navigateToPage(currentPage + 1)}
        />
      </div>
    </div>
  );
};

export default HotNews;

//  <SingleHotNews
//    newsImage={data.news[currentPage - 1].newsImage}
//    title={data.news[currentPage - 1].title}
//    newsContent={data.news[currentPage - 1].newsContent}
//    authorImage={data.news[currentPage - 1].authorImage}
//  />;

// Sample news data
// const data = {
//   news: [
//     {
//       newsImage: news3,
//       title: "Amazon in blackout",
//       newsContent:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,atque! Alias consequuntur quas maxime sint quae rem excepturi mollitia nulla?",
//       authorImage: author,
//     },
//     {
//       newsImage: news4,
//       title: "Amazon in blackout",
//       newsContent:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,atque! Alias consequuntur quas maxime sint quae rem excepturi mollitia nulla?",
//       authorImage: author,
//     },
//     {
//       newsImage: news5,
//       title: "Amazon in blackout",
//       authorImage: author,
//     },
//     {
//       newsImage: news3,
//       title: "Amazon in blackout",
//       newsContent:
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,atque! Alias consequuntur quas maxime sint quae rem excepturi mollitia nulla?",
//       authorImage: author,
//     },
//     // Add more news items here
//   ],
// };
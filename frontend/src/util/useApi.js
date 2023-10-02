import axios from "axios";
import { useQuery } from "react-query";

const API_ENDPOINT = "/api/popular";

// Create a function to fetch data
const fetchData = async () => {
  const response = await axios.get(API_ENDPOINT);
  const popularNews = response.data.map((newsItem, index) => ({
    id: newsItem.id || "",
    byline: newsItem.byline || "",
    title: newsItem.title || "",
    abstract: newsItem.abstract || "",
    url: newsItem.url || "",
    imageData: newsItem.media || [],
    imageDirection: index % 2 === 0 ? "left" : "right",
  }));
  console.log("popularNews:", popularNews);
  return popularNews;
};

// Create a custom hook to use in your components
export function useApi() {
  return useQuery("apiData", fetchData);
}

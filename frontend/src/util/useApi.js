import axios from "axios";
import { useQuery } from "react-query";

const API_ENDPOINT = "/api/popular";

// Create a function to fetch data
const fetchData = async () => {
  const response = await axios.get(API_ENDPOINT);
  return response.data;
};

// Create a custom hook to use in your components
export function useApi() {
  return useQuery("apiData", fetchData);
}

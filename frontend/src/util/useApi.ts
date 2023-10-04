import axios from "axios";
import { useQuery } from "react-query";

// Create a function to fetch data with a generic type parameter
const fetchData = async <T>(url: string): Promise<T> => {
  const response = await axios.get<T>(url);
  return response.data;
};

// Create a custom hook with generic type parameters for the response and endpoint
export function useApi<T>(endpoint: string) {
  return useQuery<T, Error>("apiData", () => fetchData<T>(endpoint));
}

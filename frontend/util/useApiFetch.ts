import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface IProps {
  url: string;
}

const useApiFetch = <T>({ url }: IProps) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response: AxiosResponse<T> = await axios.get(url);
        setData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setIsError(true);
        } else {
          // or creating a new error
          throw new Error("different error than axios");
        }
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useApiFetch;

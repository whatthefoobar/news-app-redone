import { log } from "console";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const routeParams = useParams();
  console.log("query from Serach", routeParams);

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //   useEffect(() => {
  //     // Define a function to fetch data from your backend
  //     const fetchData = async () => {
  //       try {
  //         setIsLoading(true);

  //         // Replace 'your-backend-url' with the actual URL of your backend
  //         const response = await fetch(`/articlesearch?q=query`);
  //         const data = await response.json();

  //         setSearchResults(data); // Update state with the fetched data
  //         setIsLoading(false);
  //       } catch (error) {
  //         console.error("Error:", error);
  //         setIsLoading(false);
  //       }
  //     };

  //     fetchData(); // Call the fetchData function when the component mounts
  //     console.log("searchResults", searchResults);
  //   }, []);

  return (
    <div>
      <h1>News List</h1>
      <p>Display news cards based on the search: </p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {/* {searchResults?.response?.docs.map((article) => (
            <li key={article._id}>{article.headline.main}</li>
          ))} */}
          Search....
        </ul>
      )}
    </div>
  );
};

export default Search;

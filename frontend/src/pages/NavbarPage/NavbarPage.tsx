import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCategoryArticlesQuery } from "../../slices/apiSlice";
import { capitalizeFirstLetter } from "../../util/capitalizeFirstLetter";
import Loader from "../../components/Loader/Loader";
import { ICategoryArticle, IFilteredCategoryArticle } from "../../types/api";
import NewsCard from "../../components/NewsCard/NewsCard";
import Pagination from "../../components/Pagination/Pagination";
import "./NavbarPage.css";

const NavbarPage = () => {
  const { category, page } = useParams<{ category: string; page: string }>(); // Read category and page from the URL
  const navigate = useNavigate();

  // Provide a default value for category if it's undefined
  const categoryName = category || "politics"; // Replace 'defaultCategory' with a valid default category

  const { data, isLoading, isError } =
    useGetCategoryArticlesQuery(categoryName);
  const [filteredData, setFilteredData] = useState<IFilteredCategoryArticle[]>(
    []
  );

  useEffect(() => {
    if (data !== undefined && !isLoading) {
      const filteredData = data.topStories.map((article: ICategoryArticle) => ({
        title: article.title || "",
        byline: article.byline || "",
        abstract: article.abstract || "",
        imgUrl: article.multimedia?.[1]?.url || "",
        published_date: article.published_date || "",
      }));
      setFilteredData(filteredData);
    }
  }, [data, isLoading]);

  // Pagination logic
  const itemsPerPage = 4; // Number of items per page
  const currentPage = page ? parseInt(page, 10) : 1;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(
    indexOfFirstItem,
    indexOfFirstItem + itemsPerPage
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    navigate(`/category/${categoryName}/page/${pageNumber}`);
  };

  return (
    <div className="navbarpage">
      <h2>{capitalizeFirstLetter(categoryName)} News</h2>
      <div className="navbarpage__container">
        {isLoading && <Loader />}
        {isError && <div>Error fetching data from the API.</div>}

        {!isLoading &&
          currentItems.map((item, index) => (
            <NewsCard
              type={categoryName}
              key={index}
              title={item.title}
              newsContent={item.abstract}
              byline={item.byline}
              imageSrc={item.imgUrl}
              published_date={item.published_date}
            />
          ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={paginate}
      />
    </div>
  );
};

export default NavbarPage;

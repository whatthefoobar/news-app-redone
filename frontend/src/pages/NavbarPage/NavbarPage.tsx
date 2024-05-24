import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useGetCategoryArticlesQuery } from "../../slices/apiSlice";
import { capitalizeFirstLetter } from "../../util/capitalizeFirstLetter";
import Loader from "../../components/Loader/Loader";
import { ICategoryArticle, IFilteredCategoryArticle } from "../../types/api";
import NewsCard from "../../components/NewsCard/NewsCard";
import Pagination from "../../components/Pagination/Pagination";
import "./NavbarPage.css";

const NavbarPage = () => {
  const { category } = useParams();
  // console.log("the news category for this page", category);

  const location = useLocation();
  const pathName = location.pathname.split("/")[1];
  const { data, isLoading, isError } = useGetCategoryArticlesQuery(pathName);
  const [filteredData, setFilteredData] = useState<IFilteredCategoryArticle[]>([
    {
      title: "",
      abstract: "",
      byline: "",
      imgUrl: "",
      published_date: "",
    },
  ]);

  useEffect(() => {
    if (data !== undefined && !isLoading) {
      console.log(`for ${category} news data from api`, data);

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
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="navbarpage">
      <h2>{capitalizeFirstLetter(pathName)} News</h2>
      <div className="navbarpage__container">
        {isLoading && <Loader />}
        {isError && <div>Error fetching data from the API.</div>}

        {/* how about i send the whole data object data.topStories and for each object in there run it to see which one matches the title coompletely */}
        {!isLoading &&
          data &&
          currentItems.map((item, index) => (
            <NewsCard
              type={pathName}
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

//a custom hook to help with the variables and functions used with the Pagination component to avoid code repetition
// not working yet dunno leave it for now
import { useNavigate } from "react-router-dom";

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  urlPath: string;
}

const usePagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  urlPath,
}: UsePaginationProps) => {
  const navigate = useNavigate();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginate = (pageNumber: number) => {
    navigate(`${urlPath}/page/${pageNumber}`);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  return {
    currentPage,
    totalPages,
    indexOfFirstItem,
    indexOfLastItem,
    paginate,
  };
};

export default usePagination;

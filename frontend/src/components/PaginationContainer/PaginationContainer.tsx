import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";

interface PaginationContainerProps {
  items: any[];
  itemsPerPage: number;
  renderItems: (currentItems: any[]) => JSX.Element;
}

const PaginationContainer: React.FC<PaginationContainerProps> = ({
  items,
  itemsPerPage,
  renderItems,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {renderItems(currentItems)}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={paginate}
      />
    </div>
  );
};

export default PaginationContainer;

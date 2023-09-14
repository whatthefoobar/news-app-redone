import React from "react";
import "./VerticalPagination.css";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const VerticalPagination = ({
  currentPage,
  totalPages,
  onBackClick,
  onForwardClick,
}) => {
  return (
    <div className="vertical-pagination">
      <button onClick={onBackClick} disabled={currentPage === 1}>
        <MdOutlineKeyboardArrowUp />
      </button>
      <div className="page-number">{currentPage}</div>
      <button onClick={onForwardClick} disabled={currentPage === totalPages}>
        <MdOutlineKeyboardArrowDown />
      </button>
    </div>
  );
};

export default VerticalPagination;

import React from "react";
import "./VerticalPagination.css";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
interface IProps {
  currentPage: number;
  totalPages: number;
  onBackClick: () => void;
  onForwardClick: () => void;
}

const VerticalPagination = ({
  currentPage,
  totalPages,
  onBackClick,
  onForwardClick,
}: IProps) => {
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

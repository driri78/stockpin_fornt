import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const Paging = ({ first, last, currentPage, setCurrentPage }) => {
  const pageArr = Array.from({ length: last - first + 1 }, (v, i) => first + i);
  console.log(first);
  return (
    <nav className="paging_container">
      <ul>
        <li className="img_box">
          <FaAngleLeft />
        </li>
        {pageArr.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "active" : ""}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </li>
        ))}
        <li className="img_box">
          <FaAngleRight />
        </li>
      </ul>
    </nav>
  );
};

export default Paging;

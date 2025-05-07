import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const Paging = ({ first, last, currentPage, setCurrentPage }) => {
  const pageArr = Array.from({ length: last - first + 1 }, (v, i) => first + i);

  const arrowHandle = (pageStep) => {
    const nextPage = currentPage + pageStep;
    if (pageArr[0] <= nextPage && nextPage <= pageArr[pageArr.length - 1]) {
      setCurrentPage(nextPage);
    }
  };

  return (
    <nav className="paging_container">
      <ul>
        <li className="img_box" onClick={() => arrowHandle(-1)}>
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
        <li className="img_box" onClick={() => arrowHandle(1)}>
          <FaAngleRight />
        </li>
      </ul>
    </nav>
  );
};

export default Paging;

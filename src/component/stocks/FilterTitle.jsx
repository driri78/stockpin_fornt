import React from "react";

const FilterTitle = ({ filterInfo, filterId }) => {
  const result = filterInfo.find((item) => item.id === filterId);
  return (
    <div className="filter_title_container">
      <h3>{result.title}</h3>
      <p>{result.content}</p>
    </div>
  );
};

export default FilterTitle;

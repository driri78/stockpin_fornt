import React from "react";

const FilterList = ({ filterInfo, filterId, setFilterId }) => {
  return (
    <div className="stockPin_create_filter_box">
      <h3>StockPin 추천 필터</h3>
      <ul>
        {filterInfo.map((info) => (
          <li key={info.id} onClick={() => setFilterId(info.id)}>
            <h4 className={info.id == filterId ? "active" : ""}>
              {info.title}
            </h4>
            <div className="hover_content_box">
              <div>
                <span>{info.title}</span>
                <p>{info.content}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterList;

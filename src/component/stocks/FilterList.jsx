import React from "react";

const FilterList = ({ filterId, setFilterId }) => {
  const filterInfo = [
    {
      id: "2",
      title: "연속 상승세",
      content: "일주일 연속 상승세를 보이는 주식",
    },
    {
      id: "3",
      title: "꾸준한 배당주",
      content: "배당을 꾸준히 하는 주식",
    },
    {
      id: "4",
      title: "돈 잘 버는 회사",
      content: "매출과 이익을 크게 내는 회사",
    },
    {
      id: "5",
      title: "안정 성장주",
      content: "꾸준하게 이익이 늘고 있는 회사",
    },
  ];

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

import React, { useEffect, useState } from "react";
import "@assets/css/stocks/stocks.css";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import FilterList from "./FilterList";
import FilterTitle from "./FilterTitle";
import FilterElement from "./FilterElement";
import StockList from "./StockList";
const FilterStocks = () => {
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

  const [filterId, setFilterId] = useState("2");
  const [data, setData] = useState("");

  useEffect(() => {
    const getStockFilter = async () => {
      const apiUrl = import.meta.env.VITE_PRICE_API_URL;
      axios
        .get(`${apiUrl}/screener/${filterId}`)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("에러 발생:", error);
        });
    };
    getStockFilter();
  }, [filterId]);
  return (
    <div className="stock_list_container">
      <aside>
        <h2>주식 모아보기</h2>
        <div className="user_create_filter_box">
          <h3>나만의 필터</h3>
          <ul>
            <li>
              <span>내가 직접 만든 필터</span>
            </li>
            <li>
              <button>
                <div className="img_box">
                  <FaPlusCircle
                    style={{ width: "1.25rem", height: "1.25rem" }}
                  />
                </div>
                <span>직접 만들기</span>
              </button>
            </li>
          </ul>
        </div>
        <FilterList
          filterInfo={filterInfo}
          filterId={filterId}
          setFilterId={setFilterId}
        />
      </aside>
      <main>
        <FilterTitle filterInfo={filterInfo} filterId={filterId} />
        <FilterElement stockListCnt={data.length} />
        <StockList filterStockList={data} />
      </main>
    </div>
  );
};

export default FilterStocks;

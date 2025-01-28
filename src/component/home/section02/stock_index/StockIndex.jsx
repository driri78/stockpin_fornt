import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import "../../../../assets/css/home/section02/StockIndex.css";

const StockIndex = () => {
  useEffect(() => {
    // 차트 옵션 설정
    let options = {
      chart: {
        width: 100,
        height: 100,
        type: "area",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: "Series 1",
          data: [45, 52, 38, 45, 19, 23, 2],
        },
      ],
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical", // (vertical, horizontal 등)
          shadeIntensity: 0.5,
          gradientToColors: ["#318bf6"],
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0.3,
        },
      },
      grid: {
        show: false,
        padding: {
          left: 0,
        },
      },
      xaxis: {
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
        ],
        labels: {
          show: false, // x축 레이블 숨기기
        },
        axisTicks: {
          show: false, // x축 눈금선 숨기기
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false, // y축 레이블 숨기기
        },
      },
      tooltip: {
        enabled: false,
      },
      annotations: {
        yaxis: [
          {
            y: 52,
            borderColor: "#ddd",
            strokeDashArray: 5,
          },
        ],
      },
    };

    // 차트 렌더링
    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // 컴포넌트가 언마운트될 때 차트를 정리
    return () => {
      chart.destroy();
    };
  }, []); // 빈 배열을 넣어 컴포넌트가 처음 마운트될 때만 실행되도록 설정

  return (
    <div className="stock_index_container">
      <ul>
        <li className="active">
          <h2>인기 테마</h2>
        </li>
        <li>
          <h2>인기 업종</h2>
        </li>
      </ul>
      <div className="content">
        <div className="item">
          <div id="chart"></div>
          <div className="info">
            <h3>코스피</h3>
            <div className="value down">
              <span>2,536.80</span>
              <span>-21.31</span>
              <span>(0.8%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockIndex;

import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import "../../../../assets/css/home/section01/StockIndex.css";

const StockIndex = () => {
  useEffect(() => {
    // 차트 옵션 설정
    let options = {
      chart: {
        width: 150,
        height: 150,
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
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
      grid: {
        show: false,
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
        <li className="active">지수 · 환율</li>
        <li>원자재</li>
      </ul>
      <div>
        <div id="chart"></div>
      </div>
    </div>
  );
};

export default StockIndex;

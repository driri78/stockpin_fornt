import React from "react";
import ChartList from "../../component/chart_list/ChartList";
import { Outlet } from "react-router-dom";

const ChartListPage = () => {
  return (
    <div>
      <ChartList />
    </div>
  );
};

export default ChartListPage;

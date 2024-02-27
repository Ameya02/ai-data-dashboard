import React, { useState } from "react";
import { LineChart } from "../components/LineChart";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png";
import Sidebar from "../components/Sidebar";
import { useAppSelector } from "../hooks/hooks";

interface SectionProps {}

const ResponseTimes: React.FC<SectionProps> = () => {
  const [chartType, setChartType] = useState("day_wise");

  const { data, error } = useAppSelector((state) => state.data);
  const responseTimes = data.response_times;
  const handleSelectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setChartType(event.target.value);
  };
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
        {!error ?<>
        <h2>
          {chartType === "day_wise" ? "Day Wise" : "Week Wise"} Response Time
        </h2>
        <div className="line-chart-heading">
          <select
            style={{
              borderRadius: "10%",
              alignItems: "center",
              border: "3px solid",
            }}
            onChange={handleSelectChange}
            value={chartType}
          >
            <option value="day_wise">Day Wise</option>
            <option value="week_wise">Week Wise</option>
          </select>
        </div>
        <div className="line-chart">
            {responseTimes && 
          <LineChart
            data={responseTimes[chartType] || []}
            label="Average Time"
            borderColor="rgb(53, 162, 255)"
            backgroundColor="rgba(53, 162, 255, 0.5)"
            isWeekWise={chartType === "week_wise"}
          />
            }
        </div></>:<></>}
      </main>
    </div>
  );
};

export default ResponseTimes;
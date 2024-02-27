import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { useAppSelector } from '../hooks/hooks';

const BarChart = () => {
    const [usageChartType, setUsageChartType] = useState("by_platform");

    const { data, } = useAppSelector((state) => state.data);
 
      const usageChart = usageChartType === "by_platform" ? data.usage_statistics.by_platform : data.usage_statistics.by_country;

    const chartData = {
      labels: Object.keys(usageChart),
      datasets: [
        {
          label: "Usage Statistics",
          data: Object.values(usageChart),
          backgroundColor: [
            "rgb(0, 115, 255)",
            "rgb(0, 198, 202)",
            "rgb(255, 196, 0)",
            "rgb(76, 0, 255)",
          ],
          barThickness: "flex" as const,
          barPercentage: 1,
          categoryPercentage: 0.4,
        },
      ],
    };
  
    // Options for the Bar chart
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: "Number of Users",
          },
          beginAtZero: true,
          grid: {
            display: false,
          },
          max: 1000,
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    };
  
    // Event handler for changing the usage chart type
    const handleUsageChartSelectChange = (event: {
      target: { value: React.SetStateAction<string> };
    }) => {
      setUsageChartType(event.target.value);
    };
  
  return (
    <>
      <div className="">
        <div
          style={{
            display: "flex",
            marginTop: "1rem",
          }}
        >
          <h3 style={{ marginRight: "0.5rem" }}>
            <label>Usage Statistics:</label>
          </h3>
          <select
            onChange={handleUsageChartSelectChange}
            value={usageChartType}
            style={{
              borderRadius: "10%",
              alignItems: "center",
              border: "2px solid",
            }}
          >
            <option value="by_platform">By Platform</option>
            <option value="by_country">By Country</option>
          </select>
        </div>
        <Bar options={options} data={chartData} />
      </div>
    </>
  )
}

export default BarChart
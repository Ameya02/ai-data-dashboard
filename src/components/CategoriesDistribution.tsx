import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

interface CategoryDistributionProps {}

const CategoryDistribution: React.FC<CategoryDistributionProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const category_distribution = useSelector((state) => state.data.data.category_distribution);

  const chartData = {
    labels: Object.keys(category_distribution),
    datasets: [
      {
        label: "Category Distribution",
        data: Object.values(category_distribution),
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
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 50,
          max: 1000,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <Bar options={options} data={chartData} />
    </>
  );
};

export default CategoryDistribution;
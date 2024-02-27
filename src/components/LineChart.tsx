import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

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

interface DataPoint {
  date?: string;
  week?: string;
  average_time: number;
}

// Define props for the LineChart component
interface LineChartProps {
  data: DataPoint[];
  label: string;
  backgroundColor: string;
  borderColor: string;
  isWeekWise?: boolean;
}

// LineChart component
export const LineChart = ({
  data,
  label,
  backgroundColor,
  borderColor,
  isWeekWise = false,
}: LineChartProps) => {
  // Extract labels from data based on whether it is week-wise
  const labels = isWeekWise
    ? data.map((entry) => entry.week || "")
    : data.map((entry) => entry.date || "");

  // Options for the Line chart
  const options: ChartOptions<"line"> = {
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
        max: 1,
        title: {
          display: true,
          text: "Average time in Seconds",
        },
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  // Data structure for the Line chart
  const lineChartData: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        fill: true,
        label,
        data: data.map((entry) => entry.average_time),
        backgroundColor,
        borderColor,
      },
    ],
  };

  return <Line options={options} data={lineChartData} />;
};
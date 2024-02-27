import React from 'react'
import Sidebar from '../components/Sidebar';
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import userImg from "../assets/userpic.png";
import { useAppSelector } from '../hooks/hooks';
import CategoryDistribution from '../components/CategoriesDistribution';
const Dashboard = () => {
  const { data, error } = useAppSelector((state) => state.data);
  const insights_summary = data.insight_summary;
  return (
    <div className="dashboard-container">
      <Sidebar/>
<main className="dashboard">
<div className="bar">
<BsSearch />
<input type="text" placeholder="Search for data, users,
docs" />
<FaRegBell />
<img src={userImg} alt="User" />
</div>
{!error ? <>
<h3>Insight Summary</h3>
<section className="widget-container">
   {insights_summary && (<>
   {Object.keys(insights_summary).map((key) => (
      <WidgetItem
        key={key}
        heading={key}
        value={insights_summary[key]}
        percent={Number.isInteger(insights_summary[key]) ? insights_summary[key]/insights_summary["total_queries"]*100 : insights_summary[key]*100}
        color={"#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")}
      />
    ))}

   </>)}
   
  </section>
  </> : <>
   </>
   }
  <section className="graph-container">
            <div className="category-distribution">
              <h3>Category Distribution</h3>
              <CategoryDistribution />
            </div>

           
          </section>
</main>
  

  </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => (
  
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      { heading !=="failed_queries" ? (
        <span className="green">
          <HiTrendingUp /> +{percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> -{percent}%{" "}
        </span>
      )}
    </div>
    <div
      className="widget-circle"
      style={{
        background: `conic-gradient(
        ${heading !=="failed_queries"?color: "red"} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255, 255, 255) 0
      )`,
      }}
    >
      <span
        style={{
          color: heading !=="failed_queries"?color: "red",
        }}
      >
        {percent}%
      </span>
    </div>
  </article>
);



export default Dashboard
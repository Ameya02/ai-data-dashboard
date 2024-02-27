import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconType } from 'react-icons';
import { HiMiniHome, HiShoppingBag } from 'react-icons/hi2';
import { IoIosPeople, IoMdSettings } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { FcRating } from "react-icons/fc";
import { IoTime } from "react-icons/io5";

interface SidebarItemProps {
  url: string;
  text: string;
  icon: IconType;
}

const SidebarItems: React.FC<SidebarItemProps> = ({ url, text, icon: Icon }) => {
  const location = useLocation();
  return (
    <li style={{
      backgroundColor: location.pathname.includes(url)
      ? "rgba(0,115,255,0.1)"
      : "white",}}>
      <Link to={url}
      style={{
        color: location.pathname.includes(url)
        ? "rgb(0,115,255)"
        : "black",
      }}
      >
        <Icon /> {text}
      </Link>
    </li>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside>
    <img className='logo' src={"./ai.png"} alt='AI' />
    <div>
      <h5>Dashboard</h5>
      <ul>
        <SidebarItems url="/" text="Home" icon={HiMiniHome}  />
        <SidebarItems url="#" text="Customers" icon={IoIosPeople}   />
          <SidebarItems url="#" text="Products" icon={HiShoppingBag}  />
          <SidebarItems url="#" text="Account" icon={IoMdSettings}  />
      </ul>
    </div>
    <div>
      <h5>Charts</h5>
      <ul>
        <SidebarItems url="/response-times" text="Response Times" icon={IoTime}  />
        <SidebarItems url="/usage-statistics" text="Usage Statistics" icon={IoStatsChart}  />
          <SidebarItems url="/user-satisfaction" text="User Satisfaction" icon={FcRating}  />
      </ul>
    </div>

  </aside>
  );
};

export default Sidebar;

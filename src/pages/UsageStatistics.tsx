import React from 'react'
import Sidebar from '../components/Sidebar'
import { BsSearch } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import userImg from "../assets/userpic.png";
import BarChart from '../components/BarChart';

const UsageStatistics = () => {
    
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
      <BarChart/>
      </main>
      </div>
  )
  
}

export default UsageStatistics
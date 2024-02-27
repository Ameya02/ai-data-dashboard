import React from 'react'
import userImg from "../assets/userpic.png";
import Sidebar from '../components/Sidebar';
import { BsSearch } from 'react-icons/bs';
import { FaRegBell } from 'react-icons/fa';
import { PieChart } from '../components/PieChart';

const UserSatisfaction = () => {
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
      <h2
          style={{

            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          <label>User Satisfaction</label>
        </h2>
        
        <PieChart />
      </main>
    </div>
     
  )
}

export default UserSatisfaction
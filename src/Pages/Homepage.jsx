import { useLocation } from "react-router";
import "./Homepage.css";
import Header from "./Header";
import Sidebar from "../Home/Sidebar";

import React from 'react'

const Homepage = () => {
    const location = useLocation();
  console.log(location);
  return (
    
      <div className="home">
      <Header/>
        <Sidebar />
        </div>
  )
}

export default Homepage




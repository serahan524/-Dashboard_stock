import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillRobot } from "react-icons/ai";

import {Sidebar} from "./Sidebar"
import "../App.css";

const Navbar = ({children}) => { 
 
  return (
    <div className="container">
        <div className="top_section">
                <h1 style={{display:"block"}} className="logo"><AiFillRobot /></h1>
                <div style={{marginLeft: "20px"}} className="bars"></div>
            </div>
        <div style={{width:"70px"}} className="sidebar">
            

            {Sidebar.map((item, index) => {
                return (                 
                <li key={index} className={item.cName} activeclassname="active">                
                    <NavLink to={item.path}>
                    <div>{item.icon}</div>
                    </NavLink> 
                </li>               
                );              
            })}   
        </div>
       <main>{children}</main>
    </div>
  );
};

export default Navbar;
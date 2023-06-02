import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";

export const Sidebar = [
  {
    title: "home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "client",
    path: "/client",
    icon: <BsIcons.BsFillPersonFill />,
    cName: "nav-text",
  },
  {
    title: "company",
    path: "/company",
    icon: <FaIcons.FaChartBar />,
    cName: "nav-text",
  },

];
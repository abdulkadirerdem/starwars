import React from "react";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import { FaHome } from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome />,
    cName: "nav-text",
  },
  {
    title: "People",
    path: "/people",
    icon: <GiIcons.GiMonsterGrasp />,
    cName: "nav-text",
  },
  {
    title: "Starships",
    path: "/starships",
    icon: <GiIcons.GiSpaceship />,
    cName: "nav-text",
  },
];

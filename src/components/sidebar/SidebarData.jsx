import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Peak Shaving & Alert",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Ventillation",
        path: "ventillation",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Revenue",
        path: "revenue",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Peak Shaving",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Ventillation",
        path: "ventillation",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Revenue",
        path: "revenue",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Peak Shaving",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Ventillation",
        path: "ventillation",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Revenue",
        path: "revenue",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];

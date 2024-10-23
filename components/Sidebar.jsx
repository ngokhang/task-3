"use client";
import { FaTableColumns } from "react-icons/fa6";
import { FaThumbtack } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import classes from "./Sidebar.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const queueItems = [
  {
    id: 1,
    name: "All Tickets",
    path: "/queue/all-ticket",
  },
  {
    id: 2,
    name: "Application Support",
    path: "/queue/all-ticket",
  },
  {
    id: 3,
    path: "/queue/all-ticket",
    name: "Incident",
  },
  {
    id: 4,
    path: "/queue/all-ticket",
    name: "Change Request",
  },
  {
    id: 5,
    path: "/queue/all-ticket",
    name: "Problem",
  },
];

const Sidebar = () => {
  const [showQueue, setShowQueue] = useState(false);
  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowQueue(!showQueue);
  };
  const router = useRouter();

  return (
    <section className={classes.sidebar}>
      <ul>
        <li>
          <a href="#">
            <FaTableColumns />
            Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <FaThumbtack />
            My Board
          </a>
        </li>
        <li className="dropdown" onClick={toggleDropdown}>
          <a href="#" className={classes.dropdownToggle}>
            <FaChartColumn />
            Queue
            {showQueue ? (
              <FaAngleUp className="fa-angle-up" />
            ) : (
              <FaAngleDown className="fa-angle-down" />
            )}
          </a>
          {showQueue && (
            <ul className={classes.dropdownMenu}>
              {queueItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className={
                      router.pathname === item.path ? classes.active : ""
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;

"use client";

import { FaArrowsRotate } from "react-icons/fa6";
import classes from "./TableFilters.module.css";

const TableFilters = () => {
  return (
    <section className={classes.allTickets}>
      <h2>All Tickets</h2>
      <div className={classes.filterControls}>
        <input
          type="text"
          placeholder="Search Key or Summary"
          className={classes.searchInput}
        />
        <select>
          <option value>App</option>
          <option value="app1">App 1</option>
          <option value="app2">App 2</option>
        </select>
        <select>
          <option value>Service Type</option>
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
        </select>
        <select>
          <option value>Status</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
        <select>
          <option value>Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button className={classes.addFilterBtn}>+ Add Filter</button>
        <FaArrowsRotate style={{ color: "#6b6b6b" }} />
      </div>
    </section>
  );
};

export default TableFilters;

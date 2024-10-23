"use client";

import classes from "./Header.module.css";
import { FaRegBell } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logoHeader}>
        <img src="/logo-ticket.png" alt="Ticketing System" />
      </div>
      <div className={classes.headerContent}>
        <div className={classes.headerCompany}>
          <span>Company</span>
          <select id="company" name="company">
            <option value="company1">CMC Global</option>
            <option value="company2">CMC Global</option>
          </select>
        </div>
        <div className={classes.headerUser}>
          <button>Create</button>
          <FaRegBell />
          <FaRegCircleQuestion />
          <img src="/user.png" alt="user_avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;

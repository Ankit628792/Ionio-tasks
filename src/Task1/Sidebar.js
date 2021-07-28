import React, { useState } from "react";

import { MdHome, MdBookmark, MdExplore, MdNotifications, MdAccountCircle, MdSettings } from 'react-icons/md';
import { NavLink } from "react-router-dom";

const iconStyle = (fontsize) => {
  return {
    fill: "transparent",
    stroke: "#1a1a2c",
    strokeWidth: 1,
    fontSize: fontsize,
  };
};

function Sidebar() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const toggleSidebar = () =>
    setSidebarActive((sidebarActive) => !sidebarActive);

  return (
    <div className={`sidebar ${sidebarActive ? "active" : ""}`}>
      <div className="logo">

        <div className="sidebar__icon" onClick={toggleSidebar}>
          <img src="ionio.jfif" alt="" />
        </div>
        <h1>
          Ionio
        </h1>
      </div>
      <div className="sidebar__menu">
        <NavLink
          to="/task1"
          exact
          className="sidebar__menuItem"
          activeClassName="active"
          onClick={toggleSidebar}
        >
          <MdHome
            className="sidebar__menuIcon"
            style={iconStyle(36)}
          />
          Home
        </NavLink>
        <NavLink
          to="/explore"
          className="sidebar__menuItem"
          activeClassName="active"
          onClick={toggleSidebar}
        >
          <MdExplore
            className="sidebar__menuIcon"
            style={iconStyle(34)}
          />
          Explore
        </NavLink>
        <NavLink
          to="/notifications"
          className="sidebar__menuItem"
          activeClassName="active"
          onClick={toggleSidebar}
        >
          <MdNotifications
            className="sidebar__menuIcon"
            style={iconStyle(34)}
          />
          Notifications
        </NavLink>
        <NavLink
          to="/bookmarks"
          className="sidebar__menuItem"
          activeClassName="active"
          onClick={toggleSidebar}
        >
          <MdBookmark
            className="sidebar__menuIcon"
            style={iconStyle(32)}
          />
          Bookmarks
        </NavLink>
        <NavLink
          to="/setting"
          className="sidebar__menuItem"
          activeClassName="active"
          onClick={toggleSidebar}
        >
          <MdSettings
            className="sidebar__menuIcon"
            style={iconStyle(30)}
          />
          Setting
        </NavLink>

        <NavLink
          to="/accont"
          className="sidebar__menuItem"
          activeClassName="active"
          onClick={toggleSidebar}
        >
          <MdAccountCircle
            className="sidebar__menuIcon"
            style={iconStyle(32)}
          />
          Account
        </NavLink>
      </div>

    </div>
  );
}
export default Sidebar;
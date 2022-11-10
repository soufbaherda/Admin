import React from "react";
import "./Sidebar.css";
import {
  LineStyle,
  Person,
  PlayArrow,
  Menu,
  ExitToAppOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className=" sidebar">
        <div className="sidebar-box">

          <div className="sidebartitle mt-3">LISTS</div>
          <div className="sidebarList">
            {/* users link which render to userlist page */}
            <li className="sidebarItems mt-1">
              <Link className="link" to="/list">
                <Person className="sidebarIcons" style={{ marginRight: 8 }} />
                Users
              </Link>
            </li>

            {/* product link */}
            <Link className="link" to="/product">
              <li className="sidebarItems mt-1">
                <PlayArrow
                  className="sidebarIcons"
                  style={{ marginRight: 8 }}
                />
                Courses
              </li>
            </Link>
            {/* List page */}
          </div>

          <div className="sidebartitle mt-3">USER</div>
          <div className="sidebarList">
            {/* feedback page */}
            <li className="sidebarItems mt-1">
              <ExitToAppOutlined
                className="sidebarIcons"
                style={{ marginRight: 8 }}
              />
              Logout
            </li>
          </div>  
        </div>
      </div>
    </>
  );
};

export default Sidebar;

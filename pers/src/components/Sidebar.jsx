import React from "react";
import logo from "../assets/sidebarlogo.png";
import dashboardIcon from "../assets/dashboard.png";
import violationIcon from "../assets/violation records.png";
import gisIcon from "../assets/GIS map.png";
import gpsIcon from "../assets/enforcer tracking.png";
import manageEnforcersIcon from "../assets/manage enforcers.png";
import manageViolationsIcon from "../assets/manage violations.png";
import reportsIcon from "../assets/reports.png";
import userManagementIcon from "../assets/user management.png";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <img src={logo} alt="TMEO Logo" className="sidebar-logo" />
        <div>
          <h2 className="sidebar-title">TMEO</h2>
          <p className="subtitle">Lucena City</p>
        </div>
      </div>

      <div className="sidebar-divider"></div>

      <p className="admin-label">ADMINISTRATOR</p>

      <ul>
        <li className="active"><img src={dashboardIcon} alt="Dashboard" className="nav-icon" />Dashboard</li>
        <li><img src={violationIcon} alt="Violation Records" className="nav-icon" />Violation Records</li>
        <li><img src={gisIcon} alt="GIS Violation Map" className="nav-icon" />GIS Violation Map</li>
        <li><img src={gpsIcon} alt="GPS Enforcer Tracking" className="nav-icon" />GPS Enforcer Tracking</li>
        <li><img src={manageEnforcersIcon} alt="Manage Enforcers" className="nav-icon" />Manage Enforcers</li>
        <li><img src={manageViolationsIcon} alt="Manage Violation Types" className="nav-icon" />Manage Violation Types</li>
        <li><img src={reportsIcon} alt="Reports" className="nav-icon" />Reports</li>
        <li><img src={userManagementIcon} alt="User Management" className="nav-icon" />User Management</li>
      </ul>

      <button className="logout">LOGOUT</button>
    </div>
  );
};

export default Sidebar;
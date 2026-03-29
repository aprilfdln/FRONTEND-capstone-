import React from "react";

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>{title}</h4>
        {icon && <img src={icon} alt="icon" className="card-icon" />}
      </div>
      <h2>{value}</h2>
    </div>
  );
};

export default StatCard;
import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Administrator Dashboard</h2>
      <p>Overview of traffic enforcement activities and system analytics</p>

      <div className="cards">
        <div className="card">
          <div className="card-header">
            <h3>TOTAL VIOLATIONS RECORDED</h3>
            <img src="/src/assets/total violation.png" alt="icon" className="card-icon" />
          </div>
          <p>0</p>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>VIOLATIONS TODAY</h3>
            <img src="/src/assets/violations today.png" alt="icon" className="card-icon" />
          </div>
          <p>0</p>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>PENDING ASSESSMENTS</h3>
            <img src="/src/assets/pending assessments.png" alt="icon" className="card-icon" />
          </div>
          <p>0</p>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>APPROVED VIOLATIONS</h3>
            <img src="/src/assets/approved violations.png" alt="icon" className="card-icon" />
          </div>
          <p>0</p>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>ACTIVE ENFORCERS</h3>
            <img src="/src/assets/active traffic enforcers.png" alt="icon" className="card-icon" />
          </div>
          <p>0</p>
        </div>
      </div>

      <div className="charts">
        <div className="box">
          <h3>Violation by Type</h3>
          <p>Distribution of violation categories</p>
        </div>
        <div className="box">
          <h3>Violation Trends</h3>
          <p>Monthly violation records over the past 7 months</p>
        </div>
      </div>

      <div className="bottom">
        <div className="mini green">
          <h4>Violation Hotspots</h4>
          <p>Top 3 locations with most violations</p>
          <div className="item-row">
            <span>Quezon Avenue</span>
            <span className="value">0 violation</span>
          </div>
          <div className="item-row">
            <span>Maharlika Highway</span>
            <span className="value">0 violation</span>
          </div>
          <div className="item-row">
            <span>Diversion Road</span>
            <span className="value">0 violation</span>
          </div>
        </div>

        <div className="mini blue">
          <h4>Top Enforcers (This Month)</h4>
          <p>Most active enforcement officers</p>
          <div className="item-row">
            <span>Officer Emradora</span>
            <span className="value">0 ticket</span>
          </div>
          <div className="item-row">
            <span>Officer Fedelino</span>
            <span className="value">0 ticket</span>
          </div>
          <div className="item-row">
            <span>Officer Dosay</span>
            <span className="value">0 ticket</span>
          </div>
        </div>

        <div className="mini orange">
          <h4>Collection Summary</h4>
          <p>Revenue from penalties (This Month)</p>
          <div className="item-row">
            <span>Total Collected</span>
            <span className="value">₱0</span>
          </div>
          <div className="item-row">
            <span>Pending Payments</span>
            <span className="value">₱0</span>
          </div>
          <div className="item-row">
            <span>Collection Rate</span>
            <span className="value">0%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
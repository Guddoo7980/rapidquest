import React, { useState } from "react";
import "../styles/Tabs.css";

function Tabs() {
  const [active, setActive] = useState("Hiring Challenge");

  return (
    <div className="tabs-container">
      {["Hiring Challenge", "Problem Statements", "Announcements", "Top Submissions"]
        .map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${active === tab ? "active" : ""}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
    </div>
  );
}

export default Tabs;

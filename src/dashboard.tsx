import React, { useState } from "react";
import "./dashboard.css";

const Dashboard: React.FC = () => {
    const [searchText, setSearchText] = useState("");


    return (
        <div>
            <div className = "dashboard-top">
                <div className="search-box">
                    <input 
                    type="text" 
                    className="search-input"
                    placeholder="search prescriptions, medications, or patients"
                    value ={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <div className ="find-button">
                    <button className = "find-button" type="submit">
                    + FIND
                    </button>
                </div>
            </div>
            <div className="dashboard-word">
              <h1>Dashboard</h1>
            </div>
        </div>
    );
};

export default Dashboard;


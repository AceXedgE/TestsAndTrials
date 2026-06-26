import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTachometerAlt, faPrescriptionBottle, faBoxes, faChartBar, faCog, faUser, faHospital } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";

interface SidebarProps {
    onProfileClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({onProfileClick}) => {
    const currentPath = window.location.pathname;

    return (
        <aside className = "sidebar-content">
            <div className = "sidebar">
                <h2 className = "logo"><FontAwesomeIcon icon = {faHospital} />Logo</h2>
                <nav>
                    <a href="/dashboard" className={currentPath === "/dashboard" ? "nav-link active" : "nav-link"}><FontAwesomeIcon icon = {faTachometerAlt} /> Dashboard</a>
                    <a href="/prescriptions" className={currentPath === "/prescriptions" ? "nav-link active" : "nav-link"}><FontAwesomeIcon icon = {faPrescriptionBottle} />Prescriptions</a>
                    <a href="/inventory" className={currentPath === "/inventory" ? "nav-link active" : "nav-link"}><FontAwesomeIcon icon = {faBoxes} />Inventory</a>
                    <a href="/reports" className={currentPath === "/reports" ? "nav-link active" : "nav-link"}><FontAwesomeIcon icon = {faChartBar} />Reports</a>
                    <a href="/settings" className={currentPath === "/settings" ? "nav-link active" : "nav-link"}><FontAwesomeIcon icon = {faCog} />Settings</a>
                    <a href="#" 
                       className="nav-link" 
                       onClick={(e) => {
                       e.preventDefault(); 
                       onProfileClick();
                    }}><FontAwesomeIcon icon = {faUser} />Proflie</a>
                    
                </nav>
                <div className='username'>
                    <img src="src/img/profileimage.gif" alt="profile" />
                    <span>UserName</span>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
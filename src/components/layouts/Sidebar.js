import React from "react";
import { NavLink } from "react-router-dom";
import { BsListTask, BsBattery, BsBatteryHalf, BsBatteryFull } from "react-icons/bs";
import { FaChartPie, FaRegPlusSquare } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";

const Sidebar = ({handleMenuToggle}) => {
    return(
        <section id="sidebar-wrapper" className={`animate__animated animate__fadeInLeft bg-white`}>
            <div className={`border-bottom fs-4 fw-bold primary-text py-4 sidebar-heading text-center`}>
                <BsListTask></BsListTask> Tasks
            </div>
            <div className={`list-group list-group-flush my-3`}>
                <NavLink to="/dashboard" className={`bg-transparent list-group-item list-group-item-action second-text`}>
                    <FaChartPie></FaChartPie> Dashboard
                </NavLink>
                <NavLink to="/add_task" className={`bg-transparent list-group-item list-group-item-action second-text`}>
                    <FaRegPlusSquare></FaRegPlusSquare> Add
                </NavLink>
                <NavLink to="/pendings" className={`bg-transparent list-group-item list-group-item-action second-text`}>
                    <BsBattery></BsBattery> Pendings
                </NavLink>
                <NavLink to="/in_progress" className={`bg-transparent list-group-item list-group-item-action second-text`}>
                    <BsBatteryHalf></BsBatteryHalf> In progress
                </NavLink>
                <NavLink to="/finished" className={`bg-transparent list-group-item list-group-item-action second-text`}>
                    <BsBatteryFull></BsBatteryFull> Finished
                </NavLink>
                <NavLink to="/logout" className={`bg-transparent list-group-item list-group-item-action second-text`}>
                    <GrLogout></GrLogout> Logout
                </NavLink>
            </div>
        </section>
    )
}

export default Sidebar;
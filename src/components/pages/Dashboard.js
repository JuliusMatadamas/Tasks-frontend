import React, { useRef } from "react";
import "./Dashboard.css";

import Sidebar from "../layouts/Sidebar";
import Navbar from "../layouts/Navbar";

const Dashboard = () => {
    const wrapper = useRef(null);

    const handleMenuToggle = () => {
        wrapper.current.classList.toggle("toggled");
    }

    return(
        <main ref={wrapper} id="wrapper" className={`d-flex`}>
            <Sidebar></Sidebar>
            <section id="page-content-wrapper">
                <Navbar handleMenuToggle={handleMenuToggle}></Navbar>
                <div className={`animate__animated animate__fadeInRight container-fluid px-4`}>
                    <div className={`align-items-center bg-white justify-content-around p-3 rounded shadow-sm`}>
                        <h3>Dashboard</h3>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Dashboard;
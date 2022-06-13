import React, { useRef } from "react";
import "./Dashboard.css";

import Sidebar from "../layouts/Sidebar";
import Navbar from "../layouts/Navbar";

const NotFound = () => {
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
                        <h3>Error 404</h3>
                        <p>The requested page was not found.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default NotFound;
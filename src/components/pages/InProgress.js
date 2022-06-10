import React, { useRef } from "react";
import "./Dashboard.css";

import Sidebar from "../layouts/Sidebar";
import Navbar from "../layouts/Navbar";

const InProgress = () => {
    const wrapper = useRef(null);

    const handleMenuToggle = () => {
        wrapper.current.classList.toggle("toggled");
    }

    return(
        <main ref={wrapper} id="wrapper" className={`d-flex`}>
            <Sidebar></Sidebar>
            <section id="page-content-wrapper">
                <Navbar handleMenuToggle={handleMenuToggle}></Navbar>
                <div className={`container-fluid px-4`}>
                    <div className={`align-items-center bg-white justify-content-around p-3 rounded shadow-sm`}>
                        <h3>Tasks in progress</h3>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default InProgress;
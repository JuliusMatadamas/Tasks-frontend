import React from "react";
import MenuUser from "./MenuUser";
import { FaBars } from "react-icons/fa";

const Navbar = ({handleMenuToggle, handleLogout}) => {
    return(
        <nav className={`animate__animated animate__fadeInDown bg-transparent px-4 py-4 navbar navbar-expand-lg navbar-light zindex-dropdown`}>
            <div className={`align-items-center d-flex`}>
                <FaBars id="menu-toggle" onClick={handleMenuToggle} className={`primary-text fs-4 me-3`}></FaBars>
                <h2 className={`fs-5 m-0`}>Menu</h2>
            </div>
            <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className={`navbar-toggler`} data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
                <span className={`navbar-toggler-icon`}></span>
            </button>
            <MenuUser handleLogout={handleLogout}></MenuUser>
        </nav>
    )
}

export default Navbar;
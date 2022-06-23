import React from "react";
import { Link } from "react-router-dom";

import { FaUserAlt } from "react-icons/fa";
import { GrLogout, GrUser, GrUserSettings } from "react-icons/gr";

const MenuUser = ({handleLogout}) => {
    return(
        <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
            <ul className={`mb-2 mb-lg-0 ms-auto navbar-nav`}>
                <li className={`dropdown-center nav-item-dropdown`}>
                    <Link to="#" aria-expanded="false" className={`dropdown-toggle fw-bold nav-link second-text`} data-bs-toggle="dropdown" id="navbarDropdown" role="button">
                        <FaUserAlt className={`me-2`}></FaUserAlt> John Doe
                    </Link>
                    <ul aria-labelledby="navbarDropdown" className={`dropdown-menu`}>
                        <li>
                            <Link to="#" className={`dropdown-item`}>
                                <GrUser className={`me-2`}></GrUser> Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className={`dropdown-item`}>
                                <GrUserSettings className={`me-2`}></GrUserSettings> Settings
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleLogout} to="" className={`dropdown-item`}>
                                <GrLogout className={`me-2`}></GrLogout> Logout
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default MenuUser;
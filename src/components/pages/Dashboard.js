import React, {useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import AuthContext from "../../context/authentication/authContext";
import "./Dashboard.css";

import Sidebar from "../layouts/Sidebar";
import Navbar from "../layouts/Navbar";

const Dashboard = () => {
    const navigate = useNavigate();

    // extraer valores del context
    const authContext = useContext(AuthContext);
    const { auth, authUser, userLoggedIn, userNotLoggedIn, logoutUser } = authContext;

    // Al renderizar el componente, se verifica el estado del usuario
    useEffect(() => {
        authUser().then(res => {
            // Si hay un response
            if (res.response !== undefined)
            {
                // console.log(res.response);
                // Si no hay un token en el localStorage
                if(res.response.data.msg == "Not token!") userNotLoggedIn();

                // Si hay un token en el localStorage pero ya no es válido
                if (res.response.data.msg == "Token not valid!") userNotLoggedIn();
            }
            else
            {
                // Si hay un user en la respuesta, significa que el usuario está logueado
                if (res.data.user !== undefined) userLoggedIn(res.data.user);
            }
        })
    }, []);

    useEffect(() => {
        // Si el estado del auth no es verdadero significa que el usuario no está autenticado, se le redirige al login
        if (!auth) navigate('/')
    }, [auth]);

    // Se crea la referencia wrapper
    const wrapper = useRef(null);

    // Cuando se haga clic en el botón del menú, por medio de la referencia wrapper se mostrará u ocultará el menú
    const handleMenuToggle = () => {
        wrapper.current.classList.toggle("toggled");
    }

    // Cuando se haga clic en alguno de los botones para cerrar sesión
    const handleLogout = e => {
        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "Confirm if you want to logout",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((confirmLogout) => {
            if (confirmLogout) {
                logoutUser();
                navigate('/');
            }
        });
    }

    return(
        <main ref={wrapper} id="wrapper" className={`d-flex`}>
            <Sidebar handleLogout={handleLogout}></Sidebar>
            <section id="page-content-wrapper">
                <Navbar handleMenuToggle={handleMenuToggle} handleLogout={handleLogout}></Navbar>
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
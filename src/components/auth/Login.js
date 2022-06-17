import React, {useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import AuthContext from "../../context/authentication/authContext";


const Login = () => {
    const navigate = useNavigate();

    // extraer valores del context
    const authContext = useContext(AuthContext);
    const { auth, message, token, authUser, userLoggedIn, userNotLoggedIn, loginUser } = authContext;

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

    //
    useEffect(() => {
        // Si el estado del auth es verdadero
        if (auth)
        {
            navigate('/dashboard');
        }
        else
        {
            if (message !== null)
            {
                swal({
                    title: "An error has occurred!",
                    text: message,
                    icon: "warning",
                    dangerMode: true,
                });
            }
        }
    }, [auth, message, token]);

    // referencias a los elementos del form
    const refEmail = useRef(null);
    const refPassword = useRef(null);

    // state del login
    const [login, setLogin] = useState({
        email : '',
        emailValid : '',
        emailFeedback : '',
        emailFeedbackMsg : '&nbsp;',
        emailOk : false,
        password : '',
        passwordValid : '',
        passwordFeedback : '',
        passwordFeedbackMsg : '&nbsp;',
        passwordOk : false
    });

    const { email, emailValid, emailFeedback, emailFeedbackMsg, emailOk, password, passwordValid, passwordFeedback, passwordFeedbackMsg, passwordOk } = login;

    const handleEmailChange = e => {
        if (e.target.value.length === 0)
        {
            setLogin({
                ...login,
                email : e.target.value,
                emailValid : '',
                emailFeedback : '',
                emailFeedbackMsg : '&nbsp;',
                emailOk : false
            });
        }
        else
        {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(e.target.value))
            {
                setLogin({
                    ...login,
                    email : e.target.value,
                    emailValid : 'is-invalid',
                    emailFeedback : 'invalid-feedback',
                    emailFeedbackMsg : 'Please enter a valid email address!',
                    emailOk : false
                });
            }
            else
            {
                setLogin({
                    ...login,
                    email : e.target.value,
                    emailValid : 'is-valid',
                    emailFeedback : 'valid-feedback',
                    emailFeedbackMsg : 'Looks good!',
                    emailOk : true
                });
            }
        }
    }

    const handlePasswordChange = e => {
        if (e.target.value.length === 0)
        {
            setLogin({
                ...login,
                password : e.target.value,
                passwordValid : '',
                passwordFeedback : '',
                passwordFeedbackMsg : '&nbsp;',
                passwordOk : false
            });
        }
        else
        {
            if (e.target.value.length < 6)
            {
                setLogin({
                    ...login,
                    password : e.target.value,
                    passwordValid : 'is-invalid',
                    passwordFeedback : 'invalid-feedback',
                    passwordFeedbackMsg : 'Please enter at least 6 characters!',
                    passwordOk : false
                });
            }
            else
            {
                setLogin({
                    ...login,
                    password : e.target.value,
                    passwordValid : 'is-valid',
                    passwordFeedback : 'valid-feedback',
                    passwordFeedbackMsg : 'Looks good!',
                    passwordOk : true
                });
            }
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (!emailOk)
        {
            swal({
                title: "Email required!!",
                text: "Please, complete the email input with a valid email address.",
                icon: "warning",
                dangerMode: true,
            })
            .then(() => {
                refEmail.current.focus();
            });
            return;
        }
        else
        {
            if (!passwordOk) {
                swal({
                    title: "Password required!!",
                    text: "Please fill in the password field with at least 6 characters.",
                    icon: "warning",
                    dangerMode: true,
                })
                .then(() => {
                    refPassword.current.focus();
                });
                return;
            }
            else
            {
                loginUser({
                    email,
                    password
                });
            }
        }
    }

    return(
        <main className={`App`}>
            <section className={`animate__animated animate__fadeInDown card p-4 rounded shadow`}>
                <h1 className={`fs-5 fw-bold`}>Welcome to Task App</h1>
                <p>Please, input your data to log in.</p>

                <form onSubmit={handleSubmit}>
                    <div className={`row`}>
                        <div className={`col-12`}>
                            <label
                                htmlFor="email"
                                className={`form-label`}
                            >Email</label>
                            <input
                                type="email"
                                className={`form-control form-control-sm ${emailValid}`}
                                id="email"
                                name="email"
                                ref={refEmail}
                                onChange={handleEmailChange}
                                value={email}
                                placeholder="example@email.com"/>
                            <div
                                className={`${emailFeedback}`}
                                dangerouslySetInnerHTML={{__html: emailFeedbackMsg}}
                            ></div>
                        </div>
                    </div>

                    <div className={`row`}>
                        <div className={`col-12`}>
                            <label
                                htmlFor="password"
                                className={`form-label`}
                            >Password</label>
                            <input
                                type="password"
                                className={`form-control form-control-sm ${passwordValid}`}
                                id="password"
                                name="password"
                                ref={refPassword}
                                onChange={handlePasswordChange}
                                value={password}
                                placeholder="At least 6 characters"/>
                            <div
                                className={`${passwordFeedback}`}
                                dangerouslySetInnerHTML={{__html: passwordFeedbackMsg}}
                            ></div>
                        </div>
                    </div>

                    <div className={`mt-3 row`}>
                        <div className={`col-12`}>
                            <button
                                type="submit"
                                className={`btn btn-sm btn-success w-100`}
                            >Login</button>
                        </div>
                    </div>
                </form>

                <div
                    className={`mt-3 row`}
                >
                    <p>Not registered? click <span className={``}><a href="register">here</a></span></p>
                </div>
            </section>
        </main>
    )
};

export default Login;
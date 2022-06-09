import React, { useState } from "react";
import swal from 'sweetalert';

const Login = () => {
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
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
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

        if (!emailOk || !passwordOk)
        {
            swal({
                title: "Something is missing!!",
                text: "One or both fields are missing or do not meet the requirements!",
                icon: "warning",
                dangerMode: true,
            });
        }
        else
        {
            // Login mediante ajax
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!",
            });
        }
    }

    return(
        <section className={`card p-4 rounded shadow`}>
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
    )
};

export default Login;
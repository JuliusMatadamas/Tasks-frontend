import React, { useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import "./Register.css";
import AuthContext from "../../context/authentication/authContext";

const Register = () => {
    const navigate = useNavigate();

    // extraer valores del context
    const authContext = useContext(AuthContext);
    const { auth, message, token, registerUser, authUser, userLoggedIn, userNotLoggedIn } = authContext;

    // console.log(auth);
    useEffect(() => {
        authUser().then(res => {
            if(res.data.user)
            {
                userLoggedIn();
            }
            else
            {
                userNotLoggedIn();
            }
        });
    }, []);

    useEffect(() => {
        if (!auth)
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
        else
        {
            navigate('/dashboard');
        }
    },[auth, message, token]);

    // se obtiene la fecha actual
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (parseInt(currentDate.getMonth()) + 1) < 10 ? "0" + (parseInt(currentDate.getMonth()) + 1) : (parseInt(currentDate.getMonth()) + 1);
    const day = parseInt(currentDate.getDate()) < 10 ? "0" + parseInt(currentDate.getDate()) : parseInt(currentDate.getDate());
    const currentDateFormat = year + "-" + month + "-" + day;

    // ref del register
    const refFirstName = useRef(null);
    const refLastName = useRef(null);
    const refBirthDay = useRef(null);
    const refEmail = useRef(null);
    const refPassword = useRef(null);
    const refPasswordConfirm = useRef(null);

    // state del register
    const [register, setRegister] = useState({
        firstName : '',
        firstNameValid : '',
        firstNameFeedback : '',
        firstNameFeedbackMsg : '&nbsp;',
        firstNameOk : false,
        lastName : '',
        lastNameValid : '',
        lastNameFeedback : '',
        lastNameFeedbackMsg : '&nbsp;',
        lastNameOk : false,
        birthday : currentDateFormat,
        birthdayValid : '',
        birthdayFeedback : '',
        birthdayFeedbackMsg : '&nbsp;',
        birthdayOk : false,
        email : '',
        emailValid : '',
        emailFeedback : '',
        emailFeedbackMsg : '&nbsp;',
        emailOk : false,
        password : '',
        passwordValid : '',
        passwordFeedback : '',
        passwordFeedbackMsg : '&nbsp;',
        passwordOk : false,
        passwordConfirm : '',
        passwordConfirmValid : '',
        passwordConfirmFeedback : '',
        passwordConfirmFeedbackMsg : '&nbsp;',
        passwordConfirmOk : false
    });

    const { firstName, firstNameValid, firstNameFeedback, firstNameFeedbackMsg, firstNameOk, lastName, lastNameValid, lastNameFeedback, lastNameFeedbackMsg, lastNameOk, birthday, birthdayValid, birthdayFeedback, birthdayFeedbackMsg, birthdayOk, email, emailValid, emailFeedback, emailFeedbackMsg, emailOk, password, passwordValid, passwordFeedback, passwordFeedbackMsg, passwordOk, passwordConfirm, passwordConfirmValid, passwordConfirmFeedback, passwordConfirmFeedbackMsg, passwordConfirmOk } = register;

    const handleFirstNameChange = e => {
        if (e.target.value.length === 0)
        {
            setRegister({
                ...register,
                firstName : e.target.value,
                firstNameValid : '',
                firstNameFeedback : '',
                firstNameFeedbackMsg : '&nbsp;',
                firstNameOk : false
            });
        }
        else
        {
            if (e.target.value.length < 2) {
                setRegister({
                    ...register,
                    firstName : e.target.value,
                    firstNameValid : 'is-invalid',
                    firstNameFeedback : 'invalid-feedback',
                    firstNameFeedbackMsg : 'Enter at least 2 characters!',
                    firstNameOk : false
                });
            }
            else
            {
                let regex = /^[A-Za-zÁÉÍÓÚÜáéíóúüñÑ ]+$/g;
                if (!regex.test(e.target.value)) {
                    setRegister({
                        ...register,
                        firstName : e.target.value,
                        firstNameValid : 'is-invalid',
                        firstNameFeedback : 'invalid-feedback',
                        firstNameFeedbackMsg : 'Enter only letters and spaces in the name!',
                        firstNameOk : false
                    });
                }
                else
                {
                    setRegister({
                        ...register,
                        firstName : e.target.value,
                        firstNameValid : 'is-valid',
                        firstNameFeedback : 'valid-feedback',
                        firstNameFeedbackMsg : 'Looks good!',
                        firstNameOk : true
                    });
                }
            }
        }
    }

    const handleLastNameChange = e => {
        if (e.target.value.length === 0)
        {
            setRegister({
                ...register,
                lastName : e.target.value,
                lastNameValid : '',
                lastNameFeedback : '',
                lastNameFeedbackMsg : '&nbsp;',
                lastNameOk : false
            });
        }
        else
        {
            if (e.target.value.length < 2) {
                setRegister({
                    ...register,
                    lastName : e.target.value,
                    lastNameValid : 'is-invalid',
                    lastNameFeedback : 'invalid-feedback',
                    lastNameFeedbackMsg : 'Enter at least 2 characters!',
                    lastNameOk : false
                });
            }
            else
            {
                let regex = /^[A-Za-zÁÉÍÓÚÜáéíóúüñÑ ]+$/g;
                if (!regex.test(e.target.value)) {
                    setRegister({
                        ...register,
                        lastName : e.target.value,
                        lastNameValid : 'is-invalid',
                        lastNameFeedback : 'invalid-feedback',
                        lastNameFeedbackMsg : 'Enter only letters and spaces in the name!',
                        lastNameOk : false
                    });
                }
                else
                {
                    setRegister({
                        ...register,
                        lastName : e.target.value,
                        lastNameValid : 'is-valid',
                        lastNameFeedback : 'valid-feedback',
                        lastNameFeedbackMsg : 'Looks good!',
                        lastNameOk : true
                    });
                }
            }
        }
    }

    const handleBirthdayChange = e => {
        let selectDate = e.target.value.split("-");
        let selectYear = selectDate[0];
        let selectMonth = parseInt(selectDate[1]) - 1;
        let selectDay = parseInt(selectDate[2]);
        let selectBirthday = new Date(selectYear, selectMonth, selectDay);
        currentDate.setHours(0,0,0,0);
        selectBirthday.setHours(0,0,0,0);

        if((selectBirthday.getTime() - currentDate.getTime())/(1000*60*60*24) > (((18*365.25)-1)*-1))
        {
            setRegister({
                ...register,
                birthday : e.target.value,
                birthdayValid : 'is-invalid',
                birthdayFeedback : 'invalid-feedback',
                birthdayFeedbackMsg : 'You must be at least 18 years old!',
                birthdayOk : false
            });
        }
        else
        {
            setRegister({
                ...register,
                birthday : e.target.value,
                birthdayValid : 'is-valid',
                birthdayFeedback : 'valid-feedback',
                birthdayFeedbackMsg : 'Looks good!',
                birthdayOk : true
            });
        }
    }

    const handleEmailChange = e => {
        if (e.target.value.length === 0)
        {
            setRegister({
                ...register,
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
                setRegister({
                    ...register,
                    email : e.target.value,
                    emailValid : 'is-invalid',
                    emailFeedback : 'invalid-feedback',
                    emailFeedbackMsg : 'Please enter a valid email address!',
                    emailOk : false
                });
            }
            else
            {
                setRegister({
                    ...register,
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
            setRegister({
                ...register,
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
                setRegister({
                    ...register,
                    password : e.target.value,
                    passwordValid : 'is-invalid',
                    passwordFeedback : 'invalid-feedback',
                    passwordFeedbackMsg : 'Please enter at least 6 characters!',
                    passwordOk : false
                });
            }
            else
            {
                setRegister({
                    ...register,
                    password : e.target.value,
                    passwordValid : 'is-valid',
                    passwordFeedback : 'valid-feedback',
                    passwordFeedbackMsg : 'Looks good!',
                    passwordOk : true
                });
            }
        }
    }

    const handlePasswordConfirmChange = e => {
        if (e.target.value.length === 0)
        {
            setRegister({
                ...register,
                passwordConfirm : e.target.value,
                passwordConfirmValid : '',
                passwordConfirmFeedback : '',
                passwordConfirmFeedbackMsg : '&nbsp;',
                passwordConfirmOk : false
            });
        }
        else
        {
            if (e.target.value.length < 6)
            {
                setRegister({
                    ...register,
                    passwordConfirm : e.target.value,
                    passwordConfirmValid : 'is-invalid',
                    passwordConfirmFeedback : 'invalid-feedback',
                    passwordConfirmFeedbackMsg : 'Please enter at least 6 characters!',
                    passwordConfirmOk : false
                });
            }
            else
            {
                setRegister({
                    ...register,
                    passwordConfirm : e.target.value,
                    passwordConfirmValid : 'is-valid',
                    passwordConfirmFeedback : 'valid-feedback',
                    passwordConfirmFeedbackMsg : 'Looks good!',
                    passwordConfirmOk : true
                });
            }
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (!firstNameOk)
        {
            swal({
                title: "The first name field does not meet the requirements!",
                text: "Please complete the first name field with at least 2 characters, only letters and spaces!",
                icon: "warning",
                dangerMode: true,
            })
            .then(() => {
                refFirstName.current.focus();
            });
            return;
        }

        if (!lastNameOk)
        {
            swal({
                title: "The last name field does not meet the requirements!",
                text: "Please complete the last name field with at least 2 characters, only letters and spaces!",
                icon: "warning",
                dangerMode: true,
            })
            .then(() => {
                refLastName.current.focus();
            });
            return;
        }

        if (!birthdayOk)
        {
            swal({
                title: "The birthday field does not meet the requirements!",
                text: "Enter your birthday, you must be 18 years old to be able to register.",
                icon: "warning",
                dangerMode: true,
            })
            .then(() => {
                refBirthDay.current.focus();
            });
            return;
        }

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

        if (!passwordConfirmOk) {
            swal({
                title: "Password confirm required!!",
                text: "Please fill in the password confirm field with at least 6 characters.",
                icon: "warning",
                dangerMode: true,
            })
            .then(() => {
                refPasswordConfirm.current.focus();
            });
            return;
        }

        if (password !== passwordConfirm) {
            swal({
                title: "The passwords do not match!!",
                text: "Check that both passwords are the same.",
                icon: "warning",
                dangerMode: true,
            })
            .then(() => {
                refPasswordConfirm.current.focus();
            });
            return;
        }

        // se manda la información al servidor
        registerUser({
            firstName,
            lastName,
            birthday,
            email,
            password
        });

        /*
        if (!auth && auth !== null) {
            swal({
                title: "An error occurred!",
                text: message,
                icon: "warning",
                dangerMode: true,
            })
        }*/
    };

    return(
        <main className={`App`}>
            <section id="container__register" className={`animate__animated animate__fadeInDown card p-4 rounded shadow`}>
                <h1 className={`fs-5 fw-bold`}>Welcome to Task App</h1>
                <p>Please, input your data to register.</p>

                <form onSubmit={handleSubmit}>
                    <div className={`row`}>
                        <div className={`col-md-6 col-lg-6`}>
                            <div className={`row`}>
                                <div className={`col-12`}>
                                    <label
                                        htmlFor="firstName"
                                        className={`form-label`}
                                    >Firstname</label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${firstNameValid}`}
                                        id="firstName"
                                        name="firstName"
                                        ref={refFirstName}
                                        onChange={handleFirstNameChange}
                                        value={firstName}
                                        placeholder="Only letters, at least 2"/>
                                    <div
                                        className={`${firstNameFeedback}`}
                                        dangerouslySetInnerHTML={{__html: firstNameFeedbackMsg}}
                                    ></div>
                                </div>
                            </div>

                            <div className={`row`}>
                                <div className={`col-12`}>
                                    <label
                                        htmlFor="lastName"
                                        className={`form-label`}
                                    >Lastname</label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm ${lastNameValid}`}
                                        id="lastName"
                                        name="lastName"
                                        ref={refLastName}
                                        onChange={handleLastNameChange}
                                        value={lastName}
                                        placeholder="Only letters, at least 2"/>
                                    <div
                                        className={`${lastNameFeedback}`}
                                        dangerouslySetInnerHTML={{__html: lastNameFeedbackMsg}}
                                    ></div>
                                </div>
                            </div>

                            <div className={`row`}>
                                <div className={`col-12`}>
                                    <label
                                        htmlFor="birthday"
                                        className={`form-label`}
                                    >Birthday</label>
                                    <input
                                        type="date"
                                        className={`form-control form-control-sm ${birthdayValid}`}
                                        id="birthday"
                                        name="birthday"
                                        ref={refBirthDay}
                                        onChange={handleBirthdayChange}
                                        value={birthday}/>
                                    <div
                                        className={`${birthdayFeedback}`}
                                        dangerouslySetInnerHTML={{__html: birthdayFeedbackMsg}}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div className={`col-md-6 col-lg-6`}>
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

                            <div className={`row`}>
                                <div className={`col-12`}>
                                    <label
                                        htmlFor="passwordConfirm"
                                        className={`form-label`}
                                    >Confirm password</label>
                                    <input
                                        type="password"
                                        className={`form-control form-control-sm ${passwordConfirmValid}`}
                                        id="passwordConfirm"
                                        name="passwordConfirm"
                                        ref={refPasswordConfirm}
                                        onChange={handlePasswordConfirmChange}
                                        value={passwordConfirm}
                                        placeholder="At least 6 characters"/>
                                    <div
                                        className={`${passwordConfirmFeedback}`}
                                        dangerouslySetInnerHTML={{__html: passwordConfirmFeedbackMsg}}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`justify-content-evenly mt-3 row`}>
                        <div className={`col-md-4`}>
                            <button
                                type="submit"
                                className={`btn btn-success w-100`}
                            >Sign in</button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Register;
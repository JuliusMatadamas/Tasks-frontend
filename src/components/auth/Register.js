import React, { useState } from "react";
import "./Register.css";

const Register = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (parseInt(currentDate.getMonth()) + 1) < 10 ? "0" + (parseInt(currentDate.getMonth()) + 1) : (parseInt(currentDate.getMonth()) + 1);
    const day = parseInt(currentDate.getDate()) < 10 ? "0" + parseInt(currentDate.getDate()) : parseInt(currentDate.getDate());
    const currentDateFormat = year + "-" + month + "-" + day;

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

    const { firstName, firstNameValid, firstNameFeedback, firstNameFeedbackMsg, lastName, lastNameValid, lastNameFeedback, lastNameFeedbackMsg, birthday, birthdayValid, birthdayFeedback, birthdayFeedbackMsg, email, emailValid, emailFeedback, emailFeedbackMsg, password, passwordValid, passwordFeedback, passwordFeedbackMsg, passwordConfirm, passwordConfirmValid, passwordConfirmFeedback, passwordConfirmFeedbackMsg } = register;

    const handleFirstNameChange = e => {
        console.log(e.target.value);
    }

    const handleLastNameChange = e => {
        console.log(e.target.value);
    }

    const handleBirthdayChange = e => {
        console.log(e.target.value);
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

    return(
        <main className={`App`}>
            <section id="container__register" className={`animate__animated animate__fadeInDown card p-4 rounded shadow`}>
                <h1 className={`fs-5 fw-bold`}>Welcome to Task App</h1>
                <p>Please, input your data to register.</p>

                <form>
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
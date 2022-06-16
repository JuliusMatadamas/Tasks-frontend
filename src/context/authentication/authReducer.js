import {
    REGISTRATION_SUCCESSFUL,
    REGISTRATION_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOG_OUT,
    NOT_LOGGED_IN,
    LOGGED_IN,
    INVALID_TOKEN
} from "../../types";

export default (state, action) => {
    switch (action.type) {
        case REGISTRATION_SUCCESSFUL:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                auth: true,
                message: "Registro exitoso"
            }
        case REGISTRATION_ERROR:
            return {
                ...state,
                token: null,
                auth: false,
                message: action.payload
            }
        case NOT_LOGGED_IN:
            return {
                ...state,
                token: null,
                auth: false,
                message: action.payload
            }
        case LOGGED_IN:
            return {
                ...state,
                token: action.payload,
                auth: true,
                message: null
            }
        /*case INVALID_TOKEN:
            return {
                ...state,
                token: null,
                auth: false,
                message: action.payload
            }
        /*case NOT_LOGGED_IN:
            return {
                ...state,
                auth: false,
                token: null,
                message: action.payload
            }
        case LOGIN_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                auth: false,
                message: action.payload
            }
        case GET_USER:
            return {
            }
        case LOGIN_SUCCESSFUL:
            return {
            }
        case LOG_OUT:
            return {
            }*/
        default:
            return state;
    }
}
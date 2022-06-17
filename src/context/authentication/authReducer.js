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
                message: null,
                user: null
            }
        case REGISTRATION_ERROR:
            return {
                ...state,
                token: null,
                auth: false,
                message: action.payload,
                user: null
            }
        case NOT_LOGGED_IN:
            return {
                ...state,
                token: null,
                auth: false,
                message: null,
                user: null
            }
        case LOGGED_IN:
            return {
                ...state,
                auth: true,
                message: null,
                user: action.payload
            }
        case LOGIN_SUCCESSFUL:
            return {
                ...state,
                auth: true,
                message: null,
                token: action.payload
            }
        case LOGIN_ERROR:
            return {
                ...state,
                auth: false,
                token: null,
                message: action.payload,
                user: null
            }
        default:
            return state;
    }
}
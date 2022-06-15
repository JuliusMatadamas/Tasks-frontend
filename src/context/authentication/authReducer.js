import { REGISTRATION_SUCCESSFUL, REGISTRATION_ERROR, GET_USER, LOGIN_SUCCESSFUL, LOGIN_ERROR, LOG_OUT } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case REGISTRATION_SUCCESSFUL:
            return {
            }
        case REGISTRATION_ERROR:
            return {
            }
        case GET_USER:
            return {
            }
        case LOGIN_SUCCESSFUL:
            return {
            }
        case LOGIN_ERROR:
            return {
            }
        case LOG_OUT:
            return {
            }
        default:
            return state;
    }
}
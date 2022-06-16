import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import { REGISTRATION_SUCCESSFUL, REGISTRATION_ERROR, GET_USER, LOGIN_SUCCESSFUL, LOGIN_ERROR, LOG_OUT } from "../../types";
import clientAxios from "../../config/axios";

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        message: null
    }

    // Registrar un usuario
    const registerUser = async data => {
        try {
            const resp = await clientAxios.post('/api/users/', data);
            dispatch({
                type: REGISTRATION_SUCCESSFUL,
                payload: resp.data
            });
        } catch (error) {
            dispatch({
                type: REGISTRATION_ERROR,
                payload: error.response.data.msg
            });
        }
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);
    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message,
                registerUser
            }}
        >{ props.children }
        </AuthContext.Provider>
    )
}

export default AuthState;
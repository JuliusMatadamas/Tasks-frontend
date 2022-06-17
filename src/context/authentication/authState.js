import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
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
import clientAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

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

    // Login de usuario
    const loginUser = async data => {
        try {
            const resp = await clientAxios.post('/api/auth', data);
            localStorage.setItem('token', resp.data.token);
            dispatch({
                type: LOGIN_SUCCESSFUL,
                payload: resp.data.token
            });
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            });
        }
    }

    // Retornar si el usuario está autenticado
    const authUser = async () => {
        // Se obtiene el token de localStorage
        let t = localStorage.getItem('token');

        // Se establece el header 'x-auth-token'
        tokenAuth(t);

        let resp;

        // Se valida el token
        try {
            resp = await clientAxios.get('/api/auth');
        } catch (error) {
            resp = await error;
        }

        return resp;
    }

    // Registrar que el usuario está logueado
    const userLoggedIn = (data) => {
        dispatch({
            type: LOGGED_IN,
            payload: data
        })
    }

    // Registrar que el usuario no está logueado
    const userNotLoggedIn = () => {
        dispatch({
            type: NOT_LOGGED_IN,
            payload: null
        })
    }

    // Registrar que el token almacenado ya no es válido
    const invalidToken = () => {
        dispatch({
            type: INVALID_TOKEN,
            payload: "The token does not exist, is not valid or has already expired."
        })
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);
    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message,
                registerUser,
                authUser,
                userLoggedIn,
                userNotLoggedIn,
                invalidToken,
                loginUser
            }}
        >{ props.children }
        </AuthContext.Provider>
    )
}

export default AuthState;
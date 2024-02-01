import axios from 'axios';
import { setLoading, setError, setUser, setEnrolledCourses, logoutUser } from '../sclice/userSclice';
const basePath = 'http://localhost:3001'

export const loginUser = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const { data } = await axios.post(`${basePath}/user/login`, { ...userData });
        const { token, user } = data;
        dispatch(setUser(user))
        localStorage.setItem('token', token);
    } catch (error) {
        console.error(error);
        if (error.message) {
            dispatch(setError(error.message));
        } else {
            console.log(error.response?.data?.message);
            dispatch(setError(error.response?.data?.message));
        }
    }
}

export const registerUser = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const { data } = await axios.post(`${basePath}/user/register`, { ...userData });
        const { token, user } = data;
        dispatch(setUser(user));
        localStorage.setItem('token', token);
    } catch (error) {
        console.error(error);
        dispatch(setError(error.response?.data?.message));
    }
}

export const getUserJwt = () => async (dispatch) => {
    try {
        dispatch(setLoading());

        const { data } = await axios.post(`${basePath}/user/jwt`, { token: localStorage.getItem('token') }, {
            headers: {
                'authorization': `${localStorage.getItem('token')}`
            }
        });
        const { token, user } = data;
        dispatch(setUser(user));
        localStorage.setItem('token', token);
    } catch (error) {
        console.error(error);
        dispatch(setError(error.response?.data?.message));
    }
}


export const Avatar = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const data = await axios.post(`${basePath}/user/avatar`, userData, {
            headers: {
                'authorization': `${localStorage.getItem('token')}`
            }
        });
        console.log(data, "avatar");
    } catch (error) {
        dispatch(setError(error.message));
    }
}


export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const data = await axios.post(`${basePath}/user/update-profile`, userData, {
            headers: {
                'authorization': `${localStorage.getItem('token')}`
            }
        } );
        console.log(data, "profile updated");
    } catch (error) {
        console.log(error);
        dispatch(setError(error.response?.data?.message));
    }
}



export const fetchEnrolledCourses = () => async (dispatch) => {
    try {
        dispatch(setLoading());
        const data = await axios.get(`${basePath}/user/EnrolledCourses`);
        // handle response and dispatch setEnrolledCourses
    } catch (error) {
        dispatch(setError(error.message));
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch(setLoading());
        const data = await axios.get(`${basePath}/user/logout`);
        // handle response and dispatch logoutUser
    } catch (error) {
        dispatch(setError(error.message));
    }
}

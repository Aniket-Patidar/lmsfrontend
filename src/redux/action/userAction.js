import axios from 'axios';
import { setLoading, setError, setUser, setEnrolledCourses, logoutUser } from '../sclice/userSclice';
const basePath = `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}`

export const loginUser = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const { data } = await axios.post(`${basePath}/user/login`, { ...userData });
        const { token, user } = data;
        dispatch(setUser(user))
        localStorage.setItem('token', token);
    } catch (error) {
        dispatch(setError(error.response?.data?.message || "login failed"));
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
        dispatch(setError(error.response?.data?.message));
    }
}

export const getUserJwt = () => async (dispatch) => {
    try {
        dispatch(setLoading());

        const token = localStorage.getItem('token');

        if (!token) {
            return;
        }

        const config = {
            headers: {
                'Authorization': `${token}`
            }
        };

        const { data } = await axios.post(`${basePath}/user/jwt`, { token }, config);

        const { token: newToken, user } = data;
        dispatch(setUser(user));
        localStorage.setItem('token', newToken);
    } catch (error) {
        dispatch(setError(error.message || 'Failed to fetch user JWT'));
    }
};


export const Avatar = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const data = await axios.post(`${basePath}/user/avatar`, userData, {
            headers: {
                'authorization': `${localStorage.getItem('token')}`
            }
        });
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
        });
    } catch (error) {
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




import axios from 'axios';
import { setLoading, setError, setCourses, setByIDCourse } from '../sclice/courseSclice';

const apiUrl = process.env.NEXT_PUBLIC_REACT_APP_API_URL;
const basePath = `${apiUrl}/course`;

export const fetchCourses = () => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await axios.get(`${basePath}`);
        dispatch(setCourses(response.data.courses));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const fetchByIdCourse = (id) => async (dispatch) => {
    try {
        if (!id) {

            return;
        }
        dispatch(setLoading());
        const response = await axios.get(`${basePath}/${id}`);
        dispatch(setByIDCourse(response.data.course));
    } catch (error) {
        dispatch(setError(error.message));
    }
};


export const createCourse = (courseData) => async (dispatch) => {
    console.log(courseData);
    try {
        dispatch(setLoading());
        await axios.post(`${basePath}/create`, courseData, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token'),
            },
        });
        dispatch(fetchCourses());
    } catch (error) {
        dispatch(setError(error.response?.data?.message || "enter correct data"));
        dispatch(setError(error.message));
    }
};

export const updateCourse = (courseId, courseData) => async (dispatch) => {
    try {
        dispatch(setLoading());
        await axios.post(`${basePath}/update/${courseId}`, courseData, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token'),
            },
        });
        dispatch(fetchCourses());
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const deleteCourse = (courseId) => async (dispatch) => {
    try {
        dispatch(setLoading());
        await axios.post(`${basePath}/delete/${courseId}`, null, {
            headers: {
                'authorization': localStorage.getItem('token'),
            },
        });
        dispatch(fetchCourses());
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const enrollCourse = (courseId) => async (dispatch) => {

    if (!courseId) {
        courseId = localStorage.getItem("currentID");
    }

    try {
        dispatch(setLoading());
        await axios.post(`${basePath}/enrolled-course`, { courseId }, {
            headers: {
                'authorization': localStorage.getItem('token'),
            },
        });
    } catch (error) {
        dispatch(setError(error.response?.data));
    }
};

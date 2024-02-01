import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
        enrolledCourses: [],
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;
        },
        setLoading: (state) => {
            state.loading = true;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        clearError: (state) => {
            state.error = null;
        },
        logoutUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
            state.enrolledCourses = [];
        },
        setEnrolledCourses: (state, action) => {
            state.enrolledCourses = action.payload;
        }
    },
})

export const { setUser, setLoading, setError, clearError, logoutUser, setEnrolledCourses } = userSlice.actions

export default userSlice.reducer

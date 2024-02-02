import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './sclice/userSclice'
import courseSlice from './sclice/courseSclice'

export default configureStore({
    reducer: {
        user: counterSlice,
        course: courseSlice
    },
})
import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './sclice/userSclice'

export default configureStore({
    reducer: {
        user: counterSlice
    },
})
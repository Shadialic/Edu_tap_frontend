
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from '../Redux/userSlice/userSlice';
import tutorReducer from './TutorSlice/tutorSlice'
import courseReducer from './CourseSlice/CourseSlice'
const store = configureStore({
     reducer:{
        user:rootReducer ,
        tutor:tutorReducer,
        course:courseReducer
     } 
    })

export default store

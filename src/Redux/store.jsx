
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from '../Redux/userSlice/userSlice';
import tutorReducer from './TutorSlice/tutorSlice'

const store = configureStore({
     reducer:{
        user:rootReducer ,
        tutor:tutorReducer,
     } 
    })

export default store

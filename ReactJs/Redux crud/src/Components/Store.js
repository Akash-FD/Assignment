import { configureStore } from "@reduxjs/toolkit";
import UserReducer from '../Components/UserReducer'

const store = configureStore({
    reducer:{
        user: UserReducer

    }
})

export default store
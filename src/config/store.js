import {configureStore} from "@reduxjs/toolkit"
import rubdyaReducer from "./rubidyaSlice.js"

export const store=configureStore({
    reducer:rubdyaReducer
})
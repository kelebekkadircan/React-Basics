import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import countryReducer from "../features/country/countrySlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        country: countryReducer
    }
})
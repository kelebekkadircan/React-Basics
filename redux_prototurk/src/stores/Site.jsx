import { createSlice } from "@reduxjs/toolkit";

export const Site = createSlice({
    name: 'counter',
    initialState: {
        dark: false,
        language: 'tr'
    },
    reducers: {
        setDarkMode: state => { state.dark = !state.dark },
        setLanguage: (state, action) => { state.language = action.payload }
    }
})

export const { setDarkMode, setLanguage } = Site.actions

export default Site.reducer





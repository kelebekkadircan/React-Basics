import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState =
{
    country: []
}
export const getCountry = createAsyncThunk('getCountry', async () => {
    const { data } = axios.get('https://restcountries.com/v3.1/all')
    return data
})
export const counterySlice = createSlice({
    name: "countery",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getCountry.fulfilled, (state, action) => {
            state.country = action.payload
        })
    }
})


export default counterySlice.reducer;









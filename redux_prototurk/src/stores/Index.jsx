import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './CounterSlice'

import Site from './Site'

export const Store = configureStore({
    reducer: {
        counter: CounterSlice,
        site: Site
    },
})

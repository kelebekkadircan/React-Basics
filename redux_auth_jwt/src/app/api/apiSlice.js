import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8800',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;

        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result?.error?.originalStatus === 403) {
        // api.dispatch(logOut());
        console.log('Sending refresh token')
        // send refresh token 
        const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);
        console.log(refreshResult)
        if (refreshResult.data) {
            const user = api.getState().auth.user;
            // store new token
            api.dispatch(setCredentials({ ...refreshResult.data, user }));
            // retry original query with new token
            result = await baseQuery(args, api, extraOptions);

        } else {
            api.dispatch(logOut());
        }
    }

    return result;
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({

    })
})





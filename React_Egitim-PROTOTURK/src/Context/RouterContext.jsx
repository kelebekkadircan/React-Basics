import React, { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'

const Context = createContext();
// authprovider = routercontext
export const RouterContext = ({ children }) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || false)
    const data = {
        user,
        setUser
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <>
            <Context.Provider value={data}>

                {children}
            </Context.Provider>


        </>
    )
}

export const useAuthRouter = () => useContext(Context)


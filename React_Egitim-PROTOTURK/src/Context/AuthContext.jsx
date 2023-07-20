// import React from 'react'
import { createContext, useContext } from 'react'
import { useState } from 'react'

const Context = createContext()

const Providerr = ({ children }) => {


    const [user, setUser] = useState(false)


    const data =
    {
        user,
        setUser,
    }

    return (
        <Context.Provider value={data}>

            {children}


        </Context.Provider>
    )
}

export const useAuth = () => useContext(Context)



export default Providerr
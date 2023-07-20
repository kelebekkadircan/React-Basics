// import React from 'react'
import { createContext, useContext, useReducer } from 'react'
import { useState } from 'react'
import siteReducer from '../Reducer/SiteReducer'

const Context = createContext()

const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(siteReducer, {
        theme: 'light',
        language: 'Tr'
    })

    // const [theme, setTheme] = useState('light')
    // const [language, setLanguage] = useState('Tr')



    const data =
    {
        ...state,
        dispatch
        // theme,
        // setTheme,
        // language,
        // setLanguage
    }

    return (
        <Context.Provider value={data}>

            {children}


        </Context.Provider>
    )
}

export const useSite = () => useContext(Context)



export default Provider
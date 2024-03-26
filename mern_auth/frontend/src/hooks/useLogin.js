import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'


export const useLogin = () => {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()

    const login = async (email, password) => {

        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:4000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        console.log("RESPONSE : ", response);
        const json = await response.json()
        console.log("JSON : ", json);

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))

            //update the user in the context
            dispatch({ type: 'LOGIN', payload: json })
            setIsLoading(false)
            navigate('/')


        }
    }

    return { login, error, isLoading }




}
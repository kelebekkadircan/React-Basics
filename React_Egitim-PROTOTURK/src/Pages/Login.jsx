import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthRouter } from '../Context/RouterContext'
import { useNavigate, useLocation } from 'react-router-dom'



function Login() {

    const navigate = useNavigate()

    const location = useLocation()


    const { setUser } = useAuthRouter()

    const loginHandle = () => {
        setUser(
            {
                id: 1,
                username: 'Kadircan Kelebek'
            }
        )
        navigate(location?.state?.return_url || '/')
    }

    return (
        <>
            <div>
                Login Page
                <button className='flex max-w-xs container mx-auto items-center justify-center bg-blue-300 cursor-pointer py-2 px-4 rounded shadow-sm' onClick={loginHandle}>Giriş Yap</button>
            </div>

            <NavLink to={'/'} className="hover:scale-110 hover:bg-gray-800 hover:text-white transition-all flex mx-auto container mt-20 justify-center items-center bg-gray-400 py-2 px-4  max-w-xs rounded-lg shadow-md text-2xl " >Home</NavLink>

        </>

    )
}

export default Login
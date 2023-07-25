import React from 'react'
import { useAuthRouter } from '../Context/RouterContext'

function Profile() {

    const { setUser } = useAuthRouter();

    const logoutHandle = () => {
        setUser(false)
    }



    return (
        <>
            <div className='container mx-auto max-w-sm'>

                Profil Sayfası <br />
                <button className='border-2 bg-gray-300 hover:scale-105 py-2 px-4 rounded' onClick={logoutHandle}>Çıkış Yap</button>
            </div>

        </>
    )
}

export default Profile
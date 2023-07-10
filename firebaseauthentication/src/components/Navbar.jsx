import React from 'react'
import '../styles/components/Navbar.css'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { toast } from 'react-toastify'


function Navbar() {
    const logoutFunc = async () => {
        toast.success("Çıkış işlemi gerçekleştiriliyor...")
        await signOut(auth)

        setTimeout(() => {

            window.location = "/"
        }, 2500);

    }

    return (

        <>
            <div className='navbar'>

                <div className='navbar-left'>FIREBASE </div>
                <div className='navbar-right' onClick={logoutFunc}>Logout </div>

            </div>
        </>
    )
}

export default Navbar
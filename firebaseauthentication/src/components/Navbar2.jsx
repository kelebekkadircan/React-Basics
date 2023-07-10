import React from 'react'
import '../styles/components/Navbar.css'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { toast } from 'react-toastify'


function Navbar2() {
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

            </div>
        </>
    )
}

export default Navbar2
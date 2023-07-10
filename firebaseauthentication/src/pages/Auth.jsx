import React, { useState } from 'react'
import '../styles/pages/Auth.css'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import Navbar2 from '../components/Navbar2'

const provider = new GoogleAuthProvider();

function Auth() {

    const [signUp, setSignUp] = useState(true)
    const [authData, setAuthData] = useState({ email: '', password: '' })

    const onChangeFunc = (e) => {
        setAuthData({ ...authData, [e.target.name]: e.target.value })
    }

    const authFunc = async () => {
        if (signUp) {
            // Registerla
            try {
                const data = await createUserWithEmailAndPassword(auth, authData.email, authData.password)
                const user = data;
                if (user) {
                    window.location = "/dashboard"
                }
            } catch (error) {
                toast.error(error.message)
            }

        }
        else {
            // Logla
            try {
                const data = await signInWithEmailAndPassword(auth, authData.email, authData.password)
                const user = data;
                if (user) {
                    window.location = "/dashboard"
                }
            } catch (error) {
                toast.error(error.message)
            }

        }
    }

    const googleLogin = async () => {
        try {
            const data = await signInWithPopup(auth, provider)
            const credential = GoogleAuthProvider.credentialFromResult(data);
            const token = credential.accessToken;

            const user = data.user;
            if (user) {
                window.location = "/dashboard"
            }
        } catch (error) {
            const credential = GoogleAuthProvider.credentialFromError(error);

            toast.error(credential)
        }

    }


    return (

        <>
            {/* <Navbar2 /> */}
            <div className='auth'>
                <div className='auth-container'>
                    <h2>{signUp ? "REGISTER" : "LOGIN"}</h2>
                    <input type="email" name='email' value={authData.email} onChange={onChangeFunc} placeholder='Email' />
                    <input type="password" name='password' value={authData.password} onChange={onChangeFunc} placeholder='Password' />
                    <div onClick={googleLogin} className='auth-container-google'>
                        Google ile Giriş Yap
                    </div>
                    <p onClick={() => setSignUp(!signUp)} >{signUp ? "Daha önceden kayıt oldunuz mu" : "Kayıt olmak mı istiyorsunuz"}</p>
                    <div onClick={authFunc} className='auth-container-button'>{signUp ? "REGISTER" : "LOGIN"}</div>
                </div>
            </div>
        </>
    )
}

export default Auth
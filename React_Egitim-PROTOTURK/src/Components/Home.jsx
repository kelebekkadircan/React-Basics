import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useAuth } from '../Context/AuthContext'


function Home() {

    const { user } = useAuth()



    return (
        <>
            <div>Home</div>
            <Header />
            <br />
            {user && (
                <div className='m-2 p-2 border rounded bg-slate-300'>
                    Bu alan Sadece Giriş yapılınca gösterilir
                </div>
            )}
            <br />
            <Footer />

        </>
    )
}

export default Home
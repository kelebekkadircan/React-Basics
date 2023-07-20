import React from 'react'
import SwitchTheme from "./SwitchTheme";
import SwitchLanguage from './SwitchLanguage';
import { useAuth } from '../Context/AuthContext';


function Header() {

    const { user, setUser } = useAuth()

    const login = () => {
        setUser(
            {
                name: 'Kadircan',
                id: 1
            }
        )
    }

    const logout = () => {
        setUser(
            false
        )
    }

    return (




        < div >
            HEADER
            <br />
            {user && <button onClick={logout} className='rounded border'>Çıkış Yap</button> || <button onClick={login} className='rounded border' >Giris Yap</button>}
            <hr />
            <SwitchTheme />
            <SwitchLanguage />
            HEADER
        </div >
    )
}

export default Header
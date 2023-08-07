import React from 'react'
import { useSelector } from 'react-redux'

function Header() {

    const { dark, language } = useSelector(state => state.site)

    return (
        <>
            <div>Header</div>

            <div>
                Dark Mode = {dark ? 'evet' : 'hayır'} <br />
                Mevcut Dil = {language}
            </div>

        </>
    )
}

export default Header
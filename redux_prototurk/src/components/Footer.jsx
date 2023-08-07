import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { setDarkMode, setLanguage } from '../stores/Site'

function Footer() {

    const dispatch = useDispatch()
    const { dark, language } = useSelector(state => state.site)
    const languages = ['tr', 'eng']

    const handleLanguage = lang => {
        dispatch(setLanguage(lang))
    }

    // const handleDarkMode = () => {
    //     dispatch(setDarkMode(!dark))
    // }

    return (


        <>
            <div>Footer</div>

            <div>
                {languages.map((lang, index) => (
                    <button onClick={() => handleLanguage(lang)} className={lang === language ? ' active' : ''} key={index}>{lang}</button>
                ))}
            </div>

            <div>
                <button onClick={() => dispatch(setDarkMode())}>
                    {dark ? 'Light Moda Geç' : 'Dark Moda Geç'}
                </button>
            </div>

        </>
    )
}

export default Footer
import React from 'react'
import { useSite } from '../Context/SiteContext'
// import Provider from '../Context/SiteContext';



function SwitchTheme() {

    const switchTheme = () => {
        dispatch({
            type: 'TOGGLE_THEME'
        })
    }


    const { theme, dispatch } = useSite()

    // console.log(data);


    return (
        <>
            < br />

            Mevcut Tema = {theme} < br />

            <button onClick={switchTheme} className='rounded border bg-slate-200 px-3'>Temayı Değiştir</button>
            <br />


        </>
    )
}

export default SwitchTheme
import React from 'react'
import { useSite } from '../Context/SiteContext'


function SwitchLanguage() {


    const { language, dispatch } = useSite()

    const switchLanguage = () => {

        dispatch({
            type: 'TOGGLE_LANGUAGE',

        })

    }


    return (
        <>

            < br />

            Mevcut Tema = {language} < br />

            <button onClick={switchLanguage} className='rounded border bg-slate-200 px-3'>Dili Değiştir</button>
            <br />



        </>
    )
}

export default SwitchLanguage
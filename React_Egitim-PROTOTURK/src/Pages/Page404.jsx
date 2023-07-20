import React from 'react'
import { NavLink } from 'react-router-dom'

function Page404() {
    return (
        <>
            <div>Page404</div>
            <NavLink className='text-center  justify-center px-5 py-3 mb-20 ml-20  rounded border-2 bg-blue-200' to="/">EVE DÖNÜŞ </NavLink>

            <div className='font-bold text-5xl mt-10 '>SAYFA BULUNAMADI</div>
        </>
    )
}

export default Page404
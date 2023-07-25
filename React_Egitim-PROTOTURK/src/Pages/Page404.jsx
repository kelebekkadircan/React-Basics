import React from 'react'
import { NavLink } from 'react-router-dom'

function Page404() {
    return (
        <>
            <div>
                <p className='flex mr-16 justify-center items-center text-3xl mt-9 py-2 top-0 left-0'>
                    Page404
                </p>
            </div>

            <div className='flex items-center justify-center font-bold text-5xl mt-10 '>SAYFA BULUNAMADI</div>
            <NavLink className=' mt-20 text-center flex max-w-sm justify-center px-5 py-3 mb-20 ml-20 items-center  rounded border-2 bg-blue-200 ' to="/">EVE DÖNÜŞ </NavLink>
        </>
    )
}

export default Page404
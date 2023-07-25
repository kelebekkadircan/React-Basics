import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function HomeLayout() {
    return (
        <>
            <div> HOME LAYOUT</div>


            <nav className="mb-5 ml-5 mt-5 ">

                <NavLink to="/" className={({ isActive }) => isActive && 'aktif'} > Anasayfa</NavLink>

                <NavLink to="/contact" style={({ isActive }) => ({
                    backgroundColor: isActive ? 'red' : 'transparent'
                })} className="rounded border bg-blue-200 hover:bg-amber-300 transition-all px-4 py-2 m-3"> İletişim</NavLink>

                <NavLink to="/blog" className="rounded border bg-blue-200 hover:bg-amber-300 transition-all px-4 py-2 m-3">
                    {({ isActive }) => (
                        <>
                            Blog
                            {isActive && '(AKTİF)'}
                        </>
                    )}

                </NavLink>

                <NavLink to="/profile" style={({ isActive }) => ({
                    backgroundColor: isActive ? 'red' : 'transparent'
                })} className="rounded border bg-blue-200 hover:bg-amber-300 transition-all px-4 py-2 m-3"> Profil </NavLink>

            </nav>


            <Outlet />

        </>
    )
}

export default HomeLayout
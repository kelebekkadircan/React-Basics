import React from 'react'
import { Route, Routes, NavLink } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import Blog from './Pages/blog/Blog';
import Categories from './Pages/blog/Categories';
import Post from './Pages/blog/Post';
import Page404 from './Pages/Page404';
import BlogLayout from './Pages/blog/BlogPage'








function RouterUsing() {
    return (
        <>
            <div>RouterUsing</div>


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

            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogLayout />} >
                    <Route index={true} element={<Blog />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="post/:url/:id" element={<Post />} />
                </Route>
                <Route path="*" element={<Page404 />} />
            </Routes>






        </>
    )
}

export default RouterUsing
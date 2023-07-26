import React from 'react'
// import { Route, Routes } from 'react-router-dom'
import HomeLayout from './HomeLayout'
import HomePage from './HomePage'
import ContactPage from './ContactPage'
import Blog from './blog/Blog'
import AuthLayout from './AuthLayout'
import Login from './Login'
import PrivateRoute from '../Components/PrivateRoute'
import Page404 from './Page404'
import Profile from './Profile'
import Post from './blog/Post'
import Categories from './blog/Categories'
import BlogPage from './blog/BlogPage'
// import Home from '../Components/Home'



const routes = [
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
            {
                path: 'blog',
                element: <BlogPage />,
                children: [
                    {
                        index: true,
                        element: <Blog />
                    },
                    {
                        path: 'categories',
                        element: <Categories />
                    },
                    {
                        path: 'post/:url/:id',
                        element: <Post />
                    },
                    {
                        path: '*',
                        element: <Page404 />
                    }
                ]
            },
            {
                path: 'profile',
                element: <PrivateRoute> <Profile /> </PrivateRoute>
            }

        ]

    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: '*',
                element: <Page404 />
            }
        ]
    },
    {

        path: '*',
        element: <Page404 />

    }
]

export default routes;
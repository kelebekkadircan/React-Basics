import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthRouter } from '../Context/RouterContext'
import { useNavigate, useLocation } from 'react-router-dom'
import { useFormik, Formik, Form, Field } from 'formik'
import { Helmet } from 'react-helmet'






function Login() {

    const navigate = useNavigate()

    const location = useLocation()


    const { setUser } = useAuthRouter()

    const loginHandle = () => {
        setUser(
            values
        )
        navigate(location?.state?.return_url || '/', {
            replace: true

        })
    }

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            setUser(values)
            navigate(location?.state?.return_url || '/', {
                replace: true

            })
        }
    })




    return (
        <>
            <div className='mb-8'>
                Login Page
                <button className='flex max-w-xs container mx-auto items-center justify-center bg-blue-300 cursor-pointer py-2 px-4 rounded shadow-sm' onClick={loginHandle}>Giriş Yap</button>
            </div>

            <Helmet>
                <title>Login</title>
            </Helmet>


            <Formik initialValues={
                {
                    username: '',
                    password: ''
                }
            } onSubmit={values => {
                setUser(values)
                navigate(location?.state?.return_url || '/', {
                    replace: true

                })
                console.log(values);
            }}>
                {props => (
                    <Form className='bg-gray-300 p-5 m-5 rounded'>
                        <Field className='p-2 m-2 border-2 ' name='username' /> <br />
                        <Field name='password' type='password' className='p-2 m-2 border-2 ' /> <br />
                        <button type='submit' className='font-bold text-2xl ml-4 bg-slate-300 hover:scale-105'  >Giriş Yap</button>
                    </Form>
                )}

            </Formik>




            {<form onSubmit={handleSubmit}>
                <label htmlFor="username">Kullanıcı Adı</label>
                <input id='username' className='border-2 border-gray-300 ml-2 rounded px-4 py-2 ' type="text" value={values.username} onChange={handleChange} />
                <br />
                <label htmlFor="password">Parola</label>
                <input id='password' className='border-2 mt-2  border-gray-300 ml-10 rounded px-4 py-2 ' type="password" value={values.password} onChange={handleChange} />
                <br />

                <button className='px-4 py-2 bg-blue-300 rounded-md m-2 hover:scale-105' type='submit'> Kayıt Ol</button>
            </form>}

            <NavLink to={'/'} className="hover:scale-110 hover:bg-gray-800 hover:text-white transition-all flex mx-auto container mt-20 justify-center items-center bg-gray-400 py-2 px-4  max-w-xs rounded-lg shadow-md text-2xl " >Home</NavLink>

        </>

    )
}

export default Login
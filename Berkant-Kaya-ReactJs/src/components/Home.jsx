import React from 'react'
import arr from '../Data'
// import { redirect } from 'react-router-dom'

function Home() {






    const redirectFunc = (id) => {
        window.location = `/detail/${id}`
    }

    return (
        <>
            {
                arr.map((array, index) => (
                    <div key={index} onClick={() => redirectFunc(array.id)} style={{ margin: "10px", cursor: "pointer", border: "1px solid black", padding: "5px" }}>{array.name} <br /> {array.id}</div>
                ))
            }


            <div>Yeni React router dom kullanımı Homedasın abi

            </div>
            <button onClick={redirectFunc} className='bg-blue-500 rounded-xl w-30 p-6' > tIKLA VE DETAYA GİT </button>
        </>
    )
}

export default Home
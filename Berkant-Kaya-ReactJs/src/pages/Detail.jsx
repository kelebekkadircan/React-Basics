import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import arr from '../Data'



function Detail() {


    const { id } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        setData(arr)
        arr.filter(ar => ar.id === id)
    }, [id])

    console.log(data);

    const redirectFunce = () => {
        window.location = "/"
    }


    return (
        <>
            <div>Detay sayfası</div>
            <button onClick={redirectFunce} className='bg-red-500 rounded-xl w-30 p-6' > tIKLA VE Eve git </button>
            <div> Kadircan</div>
            {
                data.filter(dt => dt.id == id).map((dat, index) => (
                    <div key={index}> {dat.name} </div>
                ))
            }

        </>
    )
}

export default Detail
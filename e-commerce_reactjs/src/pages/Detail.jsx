import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productsActionDetail } from '../redux/actions/product';
import { CgMathMinus, CgMathPlus } from 'react-icons/cg'
import { productsCard } from '../redux/actions/card';

function Detail() {
    const { id } = useParams();

    const dispatch = useDispatch();

    const { product } = useSelector(state => state.product);

    const [count, setCount] = useState(0)




    useEffect(() => {
        dispatch(productsActionDetail(id))
    }, [dispatch])


    const decrement = () => { if (count > 0) setCount(count - 1) }

    const increment = () => {
        setCount(count + 1)
    }

    const addCard = () => {
        dispatch(productsCard(id, count))
        dispatch({ type: "DRAWER", payload: true })
    }


    return (
        <>
            <div className='w-full flex justify-center space-x-5'>
                <img className='w-1/3' src={product?.image} alt="" />
                <div className='w-2/3 space-y-5 space-x-2'>
                    <div className='font-bold text-xl' >{product?.title}</div>
                    <div className='opacity-70 text-sm' >{product?.description}</div>
                    <div className='opacity-70 text-sm' > Category: {product?.category}</div>
                    <div className='opacity-70 text-sm' > Rate: {product?.rating?.rate} - Stock: {product?.rating?.count}  </div>
                    <div className='opacity-70 text-lg' > Fiyat: {product?.price} </div>

                    <div className='flex items-center space-x-4'>
                        <CgMathMinus onClick={decrement} className='cursor-pointer border rounded-full p-1 ' size={30} />
                        <span className='text-2xl' > {count} </span>
                        <CgMathPlus onClick={increment} className='cursor-pointer border rounded-full p-1' size={30} />
                    </div>

                    <button onClick={addCard} className='w-full p-3 text-center rounded-lg text-white text-lg bg-indigo-600 hover:text-indigo-600 hover:bg-slate-200 ' >SEPETE EKLE</button>

                </div>
            </div>


        </>
    )
}

export default Detail
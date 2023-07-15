import React, { useEffect, useState } from 'react'
import { BsLightbulb, BsBasketFill, BsMoonStarsFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {

    const [color, setColor] = useState(false);
    const dispatch = useDispatch();

    const { cardItems } = useSelector(state => state.card)

    const menudonus = () => {
        window.location = '/'
    }

    useEffect(() => {
        const root = document.getElementById('root');
        if (color) {
            root.style.background = 'black';
            root.style.color = 'white';
        }
        else {
            root.style.background = 'white';
            root.style.color = 'black';
        }
    }, [color])

    return (
        <>
            <div className=' flex items-center justify-between px-3 h-28'>
                <div onClick={menudonus} className='cursor-pointer  text-2xl font-bold tracking-wider ' >
                    KADİRCAN KELEBEK
                </div>
                <div className='flex items-center space-x-4' >
                    <input type="text" placeholder='search' className='border p-3 outline-none rounded-lg' />
                    <div onClick={() => setColor(!color)}>
                        {
                            color ? <BsLightbulb size={25} className='cursor-pointer' /> : <BsMoonStarsFill size={25} className='cursor-pointer' />

                        }

                    </div>
                    <div onClick={() => dispatch({ type: "DRAWER", payload: true })} className='relative'>
                        <BsBasketFill size={25} className='cursor-pointer' />
                        <span className=' absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm' >3</span>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar
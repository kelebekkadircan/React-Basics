import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

function Card() {

    const dispatch = useDispatch()

    const { cardItems } = useSelector(state => state.card)

    console.log(cardItems);

    return (
        <>
            <div className='w-1/3 h-full border fixed top-0 right-0 p-3 z-50 bg-white'>
                <div className='flex items-center h-20 justify-between' >
                    <h1 className='text-2xl '>Sepetim:</h1>
                    <AiOutlineClose onClick={() => dispatch({ type: 'DRAWER', payload: false })} size={25} className='cursor-pointer' />
                </div>

                {
                    cardItems?.map((card, i) => (
                        <div key={i} className='h-28 flex items-center justify-between border-b py-4 mt-3' >
                            <img className='h-24 ' src={card?.image} alt="" />
                            <div className='w-44'>
                                <div className='font-bold'>
                                    {card.title} ({card?.qty})
                                </div>

                                <div className='opacity-70 text-xs mb-4 py-4'>
                                    {(card?.description).substring(0, 40)}...
                                </div>

                            </div>
                            <div className='font-bold text-xl'>
                                {card?.price}
                            </div>
                            <div className='bg-red-500 w-20 p-2 text-center rounded-lg cursor-pointer text-white '>Sil</div>
                        </div>

                    ))
                }

                {/* <div className='h-28 flex items-center justify-between border-b py-4 mt-3' >
                    <img className='h-24 ' src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/389289/01/sv01/fnd/TUR/w/1000/h/1000/fmt/png" alt="" />
                    <div className='w-44'>
                        <div className='font-bold'>
                            Puma - Sneaker
                        </div>

                        <div className='font-bold text-xl'>
                            249.99 Tl
                        </div>
                        <div className='bg-red-500 w-20 p-2 text-center rounded-lg cursor-pointer text-white '>Sil</div>
                    </div>
                </div>

                <div className='h-28 flex mt-3s items-center justify-between border-b py-4' >
                    <img className='h-24 ' src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/389289/01/sv01/fnd/TUR/w/1000/h/1000/fmt/png" alt="" />
                    <div className='w-44'>
                        <div className='font-bold'>
                            Puma - Sneaker
                        </div>

                        <div className='font-bold text-xl'>
                            249.99 Tl
                        </div>
                        <div className='bg-red-500 w-20 p-2 text-center rounded-lg cursor-pointer text-white '>Sil</div>
                    </div>
                </div> */}
            </div>

        </>
    )
}

export default Card
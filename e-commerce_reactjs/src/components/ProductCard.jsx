import React from 'react'

function ProductCard({ prd }) {
    return (
        <>
            <div className='w-1/5 h-[350px] border rounded-lg m-2'>
                <img className='h-16' src={prd?.image} alt="" />

            </div>

        </>
    )
}

export default ProductCard
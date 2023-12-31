import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsAction } from '../redux/actions/product';
import ProductCard from '../components/ProductCard';

function Home() {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products)
    const { cardItems } = useSelector(state => state.cardItems)


    useEffect(() => {
        dispatch(productsAction())

    }, [dispatch])

    console.log(products);

    return (
        <>
            <div className='flex flex-wrap justify-center'>
                {
                    products && products.map((prd, i) => (
                        <ProductCard key={i} prd={prd} />
                    ))
                }
            </div>

        </>
    )
}

export default Home
import React from 'react'
import { increment, decrement, incrementByAmount } from '../stores/CounterSlice'
import { useDispatch } from 'react-redux'

function CounterActions() {


    const dispatch = useDispatch()



    return (
        <>

            <div>
                <button onClick={() => dispatch(decrement())}> Azalt (-) </button>
            </div>
            <div>
                <button onClick={() => dispatch(increment())} > Arttır (+) </button>

            </div>
            <div>
                <button onClick={() => dispatch(incrementByAmount(2))} >2 Arttır (+) </button>

            </div>
        </>)
}

export default CounterActions
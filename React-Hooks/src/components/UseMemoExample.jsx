import React from 'react'
import { useState, useEffect, useRef, useMemo } from 'react'

function UseMemoExample() {

    const [number, setNumber] = useState(1)
    const [inc, setInc] = useState(0)


    // const sqrt = getSqrt(number)

    const sqrt = useMemo(() => getSqrt(number), [number])

    const renders = useRef(1)

    useEffect(() => {
        renders.current = renders.current + 1
    },)

    const onClick = () => {
        setInc((prev) => {
            console.log(prev + 1);
            return prev + 1
        })
    }


    return (
        <>
            <div>
                <input className='form-control rounded w-40 bg-slate-100 ' type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                <button onClick={onClick} className='btn btn-primary'>ReRender</button>
                <h2 className='my-3'>The Square root of {number} is {sqrt} </h2>
                <h3>Renders: {renders.current}</h3>
            </div>
        </>
    )
}
function getSqrt(n) {

    for (let i = 0; i <= 100; i++) {
        console.log(i);
    }

    console.log('Expensive Function Called!');
    return Math.sqrt(n)
}


export default UseMemoExample
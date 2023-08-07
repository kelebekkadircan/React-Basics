import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

function Counter() {

    const count = useSelector(state => state.counter.value)



    return (
        <>
            <div> {count} </div>

        </>
    )
}

export default Counter
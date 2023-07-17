import React from 'react'

import { forwardRef, useRef } from "react";

const Input = forwardRef((props, ref) => {
    return <input ref={ref} type="text" {...props} />

})



function Refex() {

    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus()
        console.log(inputRef.current);
    }




    return (
        <>
            <div>Refex</div>
            <h1>useRef - forwardRef</h1>

            <button onClick={focusInput} className=" mr-2 rounded border p-2 bg-slate-200" >Focusla</button>
            <Input ref={inputRef} className="rounded border" />


        </>
    )
}

export default Refex
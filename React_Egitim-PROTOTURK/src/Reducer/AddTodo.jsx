import React, { memo } from 'react'

function AddTodo({ submitHandle, onChange, todo }) {

    console.log("adtodo rendered");

    return (
        <>

            {/* <div>AddTodo</div> */}
            <form onSubmit={submitHandle}>
                <input className=" mr-4 rounded p-1 border-2 " type="text" value={todo} onChange={onChange} />
                <button className='rounded border bg-blue-200 p-1 hover:bg-amber-300 transition-colors' disabled={!todo} type="submit">Ekle</button>
            </form>
        </>
    )
}

export default memo(AddTodo)
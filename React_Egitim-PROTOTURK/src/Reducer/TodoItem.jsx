import React, { memo } from 'react'

function TodoItem({ todo }) {

    console.log("Todo Item rendered", todo);
    return (
        <>
            {/* <div>TodoItem</div> */}
            <li > {todo} </li>

        </>
    )
}

export default memo(TodoItem)
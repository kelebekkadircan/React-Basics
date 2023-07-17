import React, { memo } from 'react'
import TodoItem from './TodoItem.jsx';


function Todos({ todos }) {

    console.log("Todos rendered");


    return (
        <>
            {/* <div>Todos</div> */}
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem todo={todo} key={index} />
                ))}
            </ul>

        </>
    )
}

export default memo(Todos)
// import { Button } from 'bootstrap'
import React from 'react'
import { useState, useCallback } from 'react'


function UseCallbackExample() {

    const [tasks, setTasks] = useState([])

    const addTask = useCallback(() => {
        setTasks((prevState) => [...prevState, 'Some Task'])


    }, [setTasks])


    return (
        <>
            <div>UseCallbackExample</div>
            <div className='bg-slate-300 btn hover:text-amber-400 w-40 rounded-xl'>

                <Buton addTask={addTask} />
            </div>
            <div >
                {tasks.map((task, index) => (
                    <p className='mt-4 bg-amber-400 hover:bg-slate-300 hover:text-amber-400 w-40 rounded-xl p-2 text-center' key={index}>{task}</p>
                ))}
            </div>


        </>
    )
}

const Buton = React.memo(({ addTask }) => {
    console.log('buton Rendered');
    return <div>
        <button onClick={addTask}>AddTask</button>
    </div>
})



export default UseCallbackExample
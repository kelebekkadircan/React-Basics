import React from 'react'
// import { useState } from 'react'

import useLocalStorage from '../hooks/useLocalStorage'

function CustomHooksExample2() {

    const [task, setTask] = useLocalStorage('task', '')
    const [tasks, setTasks] = useLocalStorage('tasks', [])

    const onSubmit = e => {
        e.preventDefault()

        const taskObj =
        {
            task,
            completed: false,
            date: new Date().toLocaleDateString()
        }

        setTasks([...tasks, taskObj])
    }


    return (
        <>
            <form className='w-50' onSubmit={onSubmit}>
                <div className='mb-3'>
                    <label className='mr-2 form-label'>Task:  </label>
                    <input className='form-control p-1 rounded-xl bg-slate-100' type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                    <button type='submit' className='mt-2 p-2 w-40 btn bg-slate-50 rounded-md hover:text-orange-300 '>Submit</button>
                </div>
            </form>

            <hr className='mt-4' />

            <div className='mt-3 ml-3 text-2xl'>
                <div className='mt-3'>
                    {tasks.map((task) => (
                        <h3 key={task.date}>{task.task}</h3>
                    ))}

                </div>
            </div>

        </>
    )
}

export default CustomHooksExample2
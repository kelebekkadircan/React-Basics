import React, { useState } from 'react'
import { useReducer, useCallback, useMemo } from "react";
import Header from "./Reducer/Header";
import AddTodo from './Reducer/AddTodo';
import Todos from './Reducer/Todos';


function reducer(state, action) {

    console.log('reducer rendered');

    switch (action.type) {
        case 'SET_TODO':
            return {
                ...state,
                todo: action.value
            }
        case 'ADD_TODO':
            return {
                ...state,
                todo: '',
                todos:
                    [
                        ...state.todos,
                        action.todo

                    ]

            }
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.value
            }

        default:
            break;
    }


}


function Reducers() {

    const [state, dispatch] = useReducer(reducer, {

        todos: [],
        todo: '',
        search: ''

    });


    // const [todos, setTodos] = useState([])
    // const [todo, setTodo] = useState('')

    const submitHandle = useCallback((e) => {
        e.preventDefault();

        dispatch(
            {
                type: 'ADD_TODO',
                todo: state.todo
            }
        )

        // setTodos([...todos, todo])
        // setTodo('')

    }, [state.todo])

    const onChange = useCallback((e) => {
        dispatch(
            {
                type: 'SET_TODO',
                value: e.target.value
            }
        )
    }, [])

    const [count, setCount] = useState(0)

    const searchHandle = (e) => {
        dispatch(
            {
                type: 'SET_SEARCH',
                value: e.target.value
            }
        )
    }

    const filteredTodos = useMemo(() => {
        return state.todos.filter(todo => todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR')))
    }, [state.todos, state.search])


    return (
        <>
            <Header />

            <h3> {count} </h3>

            <button className='bg-blue-200 rounded border p-2 ' onClick={() => setCount(count => count + 1)}>
                Artır
            </button>
            <hr />

            <h1>Todo App</h1>
            <input value={state.search} className='border rounded bg-slate-100' placeholder='todolarda ara' type="text" onChange={searchHandle} />
            {state.search}
            <hr />

            <AddTodo onChange={onChange} submitHandle={submitHandle} todo={state.todo} />

            <Todos todos={filteredTodos} />



        </>
    )
}

export default Reducers
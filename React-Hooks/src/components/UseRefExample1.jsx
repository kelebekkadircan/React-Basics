import { useRef, React } from 'react'

function UseRefExample1() {

    const inputRef = useRef()
    const paraRef = useRef()



    const onSubmit = e => {
        e.preventDefault()
        console.log(inputRef.current.value);
        inputRef.current.value = 'Hello'
        inputRef.current.style.backgroundColor = 'Red'
        paraRef.current.innerText = 'Goodbaay'
    }


    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' ref={inputRef} className='form-control mb-2' />
                <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
                <p ref={paraRef}> Hello</p>
            </form>


        </>

    )
}

export default UseRefExample1
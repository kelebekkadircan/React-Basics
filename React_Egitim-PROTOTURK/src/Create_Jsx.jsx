import React from 'react'




function Button(props) {
    return <button className="border rounded bg-indigo-300 p-2 hover:bg-fuchsia-400 transition" >{props.text}</button>
}


function Create_Jsx() {


    const todos = ['todo1', 'todo2', ' todo3'];
    const name = 'Kadoo'

    // const h1 = createElement('h1', null, 'KADİRCAN KELEBEK')

    // return createElement('main', {
    //   className: 'test',
    //   id: 'main'
    // }, h1)

    // const deneme = () => {
    //   alert('hello')
    // }

    const style = {
        color: 'blue',
        background: 'grey'
    }


    return (
        <>
            <div>Create_Jsx</div>
            <main id='main' className='test ' >
                <h1 style={style} className=' mb-3 text-center text-indigo-300 text-4xl'>Kadircan KELEBEK</h1>
                <label onClick={() => alert('ARROW İLE YAZILDIM')} htmlFor="search">Arama : </label>
                <input type="text" id='search' className='rounded border-2 border-solid' tabIndex='1' />
                <ul>
                    {`${name} KELEBEK---`}
                    {name.toUpperCase()}

                    {todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                        </li>
                    ))}
                </ul>

                <Button text="Merhaba buton" />


            </main>





        </>
    )
}

export default Create_Jsx
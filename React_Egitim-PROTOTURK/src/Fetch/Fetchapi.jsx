import React from 'react'
import { useEffect, useState } from "react";


function Fetchapi() {


    const addPost = (data) => {

        const headers = new Headers()

        // headers.append('Content-type', 'application/json')
        headers.append('Authorization', 'bearer 313131')

        const formData = new FormData()
        formData.append('userId', data.userId)
        formData.append('title', data.title)
        formData.append('body', data.body)


        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            //body: JSON.stringify(data),
            body: formData,
            headers
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }




    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                if (res.ok && res.status === 200) {
                    return res.json()
                }
            })
            .then(data => {
                setUsers(data)
            })
            .catch(err => console.log(err))

        addPost({
            userId: 1,
            title: 'Örnek Post',
            body: 'Post içeriği'
        })




    }, [])

    const submitHandle = (e) => {
        e.preventDefault();
        // const data = {
        //   name,
        //   avatar
        // }

        const formData = new FormData()

        formData.append('name', name)
        formData.append('avatar', avatar)

        console.log('submit edildi');
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formData
        })
    }


    const [users, setUsers] = useState(false)

    const [name, setName] = useState('Kadircan')

    const [avatar, setAvatar] = useState(false)





    return (
        <>
            <div>Fetchapi</div>



            <form onSubmit={submitHandle}>
                <input className=" m-3 rounded border-2 px-3 py-1 bg-slate-100" type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                <input type="file" name="avatar" onChange={e => setAvatar(e.target.files[0])} />
                <button type="submit" className="rounded border px-3 py-1 bg-blue-200" disabled={!name || !avatar}>Kaydet</button>
            </form>


            <h1>
                <ul>
                    {users && users.map(user => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))}
                </ul>

            </h1>


        </>

    )
}

export default Fetchapi
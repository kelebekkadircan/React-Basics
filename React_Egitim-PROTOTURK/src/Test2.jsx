import React from 'react'
import { useEffect, useState } from 'react'

// const [show, setShow] = useState(false)
// <button className="rounded border p-2 bg-slate-200" onClick={() => setShow(show => !show)}>
//         {show ? 'Gizle' : 'Göster'}
//       </button>
//       {show && <Test2 />}





function Test2() {

    const [postId, setPostId] = useState(1)
    const [post, setPost] = useState(false)


    useEffect(() => {
        console.log('Component ilk yüklendiğinde çalışır');
        return () => {
            console.log(' ilk yüklenen parantezli Component Destroyed  ');
        }

    }, [])

    useEffect(() => {
        // console.log('PostId değeri değişti', postId);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))

        let interval = setInterval(() => console.log('interval calıştı'), 1000)

        return () => {
            clearInterval(interval);

        }
    }, [postId])

    // useEffect(() => {
    //     console.log('Component render oldu');
    // })



    return (
        <>
            <h3 className='font-bold'> {postId} </h3>
            {post && JSON.stringify(post)}
            <button className=' rounded border p-1 bg-indigo-200' onClick={() => setPostId(postId => postId + 1)}>
                Artır
            </button>
            <hr />
            <div>Test2</div>

        </>
    )
}

export default Test2
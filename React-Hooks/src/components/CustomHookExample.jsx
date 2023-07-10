import React from 'react'
import useFetch from '../hooks/useFetch'

function CustomHookExample() {

    const { data, loading, error } = useFetch('http://jsonplaceholder.typicode.com/posts', {})


    if (loading) {
        return <h3>Loading</h3>
    }

    return (
        <>
            {data.map(post => (
                <h3 key={post.id}>{post.title}</h3>
            ))}
        </>
    )

}

export default CustomHookExample
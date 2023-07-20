import React, { useEffect } from 'react'
import { getPostDetail, getPosts, newPostJSON } from './Postserv'




function UsingFetch() {

    // useEffect(() => {
    //     newPostJSON({
    //         userId: 3,
    //         title: 'KADİRCAN KELEBEK',
    //         body: ' test '
    //     }).then(res => console.log(res))
    //     getPosts().then(res => console.log(res))
    //     getPostDetail(13).then(res => console.log(res))
    // })


    return (
        <>
            <div>UsingFetch</div>


        </>
    )
}

export default UsingFetch
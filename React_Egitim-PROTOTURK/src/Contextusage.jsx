import React from 'react'
import Provider from './Context/SiteContext'
import Providerr from './Context/AuthContext'
import Home from './Components/Home'




function Contextusage() {
    return (

        <>
            <div>Contextusage</div>
            <Provider >
                <Providerr>
                    <Home />

                </Providerr>
            </Provider>


        </>
    )
}

export default Contextusage
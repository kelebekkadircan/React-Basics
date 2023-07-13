import React from 'react'
import './dropdown.css'

function Dropdown({ data, setDiffchange }) {
    return (
        <>
            <div className='dropdown'>
                <select onChange={e => setDiffchange(e.target.value)} name="" id="" >
                    {
                        data.map((data, index) =>
                        (
                            <option key={index} value={data}>{data}</option>
                        ))
                    }

                </select>
            </div>

        </>
    )
}

export default Dropdown
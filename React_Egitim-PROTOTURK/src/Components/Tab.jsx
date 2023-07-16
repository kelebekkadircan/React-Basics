import React, { useEffect, useState } from 'react'



function Tab({ children, activeTab, setActiveTab }) {
    console.log({ children });


    const [active, setActive] = useState(activeTab)



    return (
        <>
            <nav className='space-x-4 ' >
                {children.map((tab, index) => (
                    <button onClick={() => setActiveTab(index)} className={activeTab === index ? 'bg-green-300 p-2' : 'bg-gray-200 p-2'} key={index} >{tab.props.title}</button>
                ))}
            </nav>
            <div> {children[activeTab]} </div>

        </>
    )
}

Tab.Panel = function ({ children }) {

    return (
        <div>{children}</div>
    )
}

export default Tab
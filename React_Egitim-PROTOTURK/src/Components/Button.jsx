import React from 'react'
import classNames from 'classnames'


function Button({ children, text, variant = 'default' }) {

    console.log({ text });

    return (
        <>

            <button className={classNames({
                ' h-10 flex items-center rounded borderp-3': true,
                ' bg-blue-300': variant === 'default',
                'bg-green-400': variant === 'success',
                'bg-red-400': variant === 'warning',
                'bg-yellow-300': variant === 'danger',
                'bg-purple-300': variant === 'mor',
            })}> {children}  {text} {variant}  </button >


        </>
    )
}

export default Button
import React from 'react'
import './Button.css'

const Button = ({
    align = '',
    onClick,
    text = '',
    variant = '',
}) => {
    const btnWrapper = 'btnWrapper'
    const btn = 'btn'

  return (
    <div className='Button'>
        <div className={` ${btnWrapper} ${align === 'left' ? 'flex-start' :  align === 'right' ? 'flex-end' : 'flex-center'}`}>
            <button
            onClick={(data) => onClick(data)}
            className={`${btn} ${
                variant === "light"
                ? 'btnLight'
                : 'btnDark'
            }`}>
            {text}
            </button>
        </div>
    </div>
  )
}

export default Button
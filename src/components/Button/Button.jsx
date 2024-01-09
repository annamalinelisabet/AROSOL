import React from 'react'
import './Button.css'

const Button = ({
    onClick,
    text = '',
    variant = '',
}) => {
    const btn = 'btn'

  return (
    <div className='Button'>
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
  )
}

export default Button
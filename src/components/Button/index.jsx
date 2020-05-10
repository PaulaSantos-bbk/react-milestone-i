import React from 'react'
import './Button.css'

const Button = ({
  children,
  disabled,
  onClick = () => null,
  text = 'click me badly!',
}) => (
  <button className='btn' onClick={onClick} disabled={disabled}>
    {children || text}
  </button>
)

export default Button

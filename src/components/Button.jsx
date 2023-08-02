import React from 'react'

const Button = ({ color , bgColor, size , text , borderRadius, }) => {
  return (
    <div>
      <button 
      type='button'
      style={{ color , backgroundColor: bgColor , borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      >
      {text}
      </button>
    </div>
  )
}

export default Button

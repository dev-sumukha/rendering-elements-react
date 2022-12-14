import React from 'react'

const Button = ({addComponent,text}) => {
  return (
    <button className='AddButton' onClick={addComponent}>{text}</button>
  )
}

export default Button
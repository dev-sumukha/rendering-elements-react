import React from 'react'

function Button({addList,name}) {
  return (
    <>
        <button onClick={addList}>{name}</button>
    </>
  )
}

export default Button
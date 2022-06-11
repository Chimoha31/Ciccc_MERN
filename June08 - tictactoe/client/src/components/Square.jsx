import React from 'react'

const Square = ({oneSquare, position, handleClick}) => {
  return (
    <div className={`square mark${oneSquare}`} onClick={handleClick}>
      
    </div>
  )
}

export default Square

import React from 'react';
import "./Square.css";

const Square = ({oneSquare, position, handleClick}) => {
  return (
    <div className={`square mark${oneSquare}`} onClick={handleClick}>
      
    </div>
  )
}

export default Square

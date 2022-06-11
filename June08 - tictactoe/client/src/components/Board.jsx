import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [boardSize, setBoardSize] = useState(new Array(9).fill(0));
  const [player, setPlayer] = useState(1);

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (position) => {
    let tempSize = [...boardSize];
    tempSize[position] = player;

    setPlayer(player === 1 ? 2 : 1)
    
    // click時に1か2かいちいち消えないようにする
    setBoardSize(tempSize);
    console.log(tempSize, player);
  };

  return (
    <div>
      {boardSize.map((oneSquare, index) => (
        <Square
          oneSquare={oneSquare}
          position={index}
          handleClick={() => handleClick(index)}
          key={index}
        />
      ))}
    </div>
  );
};

export default Board;

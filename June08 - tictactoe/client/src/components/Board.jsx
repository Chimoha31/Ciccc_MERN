import React, { useEffect, useState } from "react";
import Square from "./Square";

const Board = () => {
  const [boardSize, setBoardSize] = useState(new Array(9).fill(0));
  const [player, setPlayer] = useState(1);

  useEffect(() => {
    
  }, []);

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

  useEffect(() => {
    for (let item of winningCombos) {
      if (
        boardSize[item[0]] === 1 &&
        boardSize[item[1]] === 1 &&
        boardSize[item[2]] === 1
      ) {
        alert("Player 1 won the game");
      }
      if (
        boardSize[item[0]] === 2 &&
        boardSize[item[1]] === 2 &&
        boardSize[item[2]] === 2
      ) {
        alert("Player 2 won the game");
      }
    }
    // eslint-disable-next-line
  }, [boardSize]);

  const handleClick = (position) => {
    if (boardSize[position] === 0) {
      let tempSize = [...boardSize];
      tempSize[position] = player;

      setPlayer(player === 1 ? 2 : 1);

      // click時に1か2かいちいち消えないようにする
      setBoardSize(tempSize);
      console.log(tempSize, player);
    } else {
      // if elseにする事によって同じところをクリックしてもマークを変えないようにする
      alert("Click an empty cells")
    }
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

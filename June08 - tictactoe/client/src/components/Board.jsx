import React, { useEffect, useState } from "react";
import "./Board.css";
import { Button } from "react-bootstrap";
import Square from "./Square";
import PlayeWinner from "./PlayeWinner";
import CountDown from "./CountDown";
// import circle from '../image/circle.png';
// import cross from '../image/cross.png';

const Board = ({ username, roomNumber, socket }) => {
  const [boardSize, setBoardSize] = useState(new Array(9).fill(0));
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState("");
  const [playerWin, setPlayerWin] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const [showCountBtn, setShowCountBtn] = useState(false);
  const [opponentState, setOpponentState] = useState("");

  useEffect(() => {
    socket.on("receive_turn", (data) => {
      console.log(data);
      setBoardSize(data.boardSize);
      setPlayer(data.id);
    });

    return () => socket.off("receive_turn");
    // eslint-disable-next-line
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
        setPlayerWin(true);
      }
      if (
        boardSize[item[0]] === 2 &&
        boardSize[item[1]] === 2 &&
        boardSize[item[2]] === 2
      ) {
        setPlayerWin(true);
      }
    }
    // eslint-disable-next-line
  }, [boardSize]);

  const handleClick = async (position) => {
    if (boardSize[position] === 0) {
      let tempSize = [...boardSize];
      tempSize[position] = player;

      setPlayer(player === 1 ? 2 : 1);

      const playerBody = {
        username: username,
        room: roomNumber,
        id: player === 1 ? 2 : 1,
        boardSize: tempSize,
      };
      await socket.emit("change_of_turn", playerBody);

      setStartCount(false);
      setShowCountBtn(true);
      // click時に1か2かいちいち消えないようにする
      setBoardSize(tempSize);
      console.log(tempSize, player);
    } else {
      // if elseにする事によって同じところをクリックしてもマークを変えないようにする
      alert("Start again!");
    }
  };

  const handleRefresh = () => {
    setBoardSize(new Array(9).fill(0));
    handleClick();
    setOpponentState(false)
    setStartCount(false);

    const refresh = {
      opponentState: opponentState,
      room: roomNumber,
      startCount: startCount
    };
    socket.emit("start_again", refresh)
  };

  useEffect(() => {
    socket.on("restart_game", (data) => {
      console.log(data.opponentState)
      setOpponentState(data.opponentState);
      setStartCount(data.startCount);
    })
    // eslint-disable-next-line
  }, [])

  return (
    <div className="board_container">
      <div className="btn_container">
        <CountDown
          socket={socket}
          roomNumber={roomNumber}
          startCount={startCount}
          setStartCount={setStartCount}
          showCountBtn={showCountBtn}
          setShowCountBtn={setShowCountBtn}
          opponentState={opponentState}
          setOpponentState={setOpponentState}
          className="btn"
          />
         <Button variant="success" onClick={handleRefresh} className="btn">
            Refresh
          </Button>
      </div>
      {playerWin ? (
        <PlayeWinner winner={winner} />
      ) : (
        <div className="board">
          {boardSize.map((oneSquare, index) => (
            <Square
              oneSquare={oneSquare}
              position={index}
              handleClick={() => handleClick(index)}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Board;

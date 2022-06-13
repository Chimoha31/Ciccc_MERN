import React, { useEffect } from 'react';
import './CountDown.css'
import { Button } from 'react-bootstrap';
import Countdown from 'react-countdown';

const CountDown = ({socket, roomNumber, startCount, setStartCount, showCountBtn, setShowCountBtn, opponentState, setOpponentState}) => {
  const handleCountdown = async () => {
    setShowCountBtn(false);
    setOpponentState("Opponent is thinking...")
    const count = {
      startCount: startCount,
      room: roomNumber,
      opponentState: opponentState
    }
    await socket.emit("count_turn", count);
  }
  
  useEffect(() => {
    socket.on("receive_count", (data) => {
      console.log(data);
      setStartCount(true);
      setShowCountBtn(false);
      setOpponentState(false);
    })
    // eslint-disable-next-line
  }, []);



  return (
    <div>
      {startCount && <Countdown date={Date.now() + 10000} />}
      {showCountBtn && <Button variant="danger" onClick={handleCountdown}>CountDown</Button>}

      {!showCountBtn && <p className="opponent_state">{opponentState}</p>}
    </div>
  )
}

export default CountDown

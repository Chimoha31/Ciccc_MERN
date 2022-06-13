import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Countdown from 'react-countdown';

const CountDown = ({socket, roomNumber, startCount, setStartCount, showCountBtn, setShowCountBtn}) => {

  const handleCountdown = async () => {
    const count = {
      startCount: startCount,
      room: roomNumber
    }
    await socket.emit("count_turn", count);
  }
  
  useEffect(() => {
    socket.on("receive_count", (data) => {
      console.log(data);
      setStartCount(true);
      setShowCountBtn(false);
    })
    // eslint-disable-next-line
  }, []);



  return (
    <div>
      {startCount && <Countdown date={Date.now() + 10000} />}
      {showCountBtn && <Button variant="danger" onClick={handleCountdown}>CountDown</Button>}
    </div>
  )
}

export default CountDown

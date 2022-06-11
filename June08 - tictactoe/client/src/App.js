import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';


const App = () => {
  const [showGame, setShowGame] = useState(false);
  return (
    <div>
      <Form showGame={showGame} setShowGame={setShowGame} />
    </div>
  )
}

export default App


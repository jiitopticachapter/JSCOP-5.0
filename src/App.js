import React, { useState } from 'react';
import './App.css';
import "./index.css";
import Events from './routes/Events/Events';
import Home from './routes/Home/Home';
import Timeline from './routes/Timeline/Timeline';
import "./index.css"
// import { Route, Routes } from "react-router-dom";

function App() {

  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()
  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })
  return (
    <div>
      <div className="cursor" style={{ left: cursorX + "px", top: cursorY + "px" }}>

      </div>
      <Home />
      <Events />
      <Timeline />


    </div>
  );
}

export default App;

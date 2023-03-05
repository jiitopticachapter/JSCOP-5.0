import React, { useState } from 'react';
import './App.css';
import "./index.css";
import Events from './components/Events/Events';
import Home from './pages/Home/Home';
import Timeline from './components/Timeline/Timeline';
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

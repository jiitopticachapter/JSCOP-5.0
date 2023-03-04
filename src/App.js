import React from 'react';
import './App.css';
import "./index.css";
import Events from './routes/Events/Events';
import Timeline from './routes/Timeline/Timeline';
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Events />
      <Timeline />
    </div>
  );
}

export default App;

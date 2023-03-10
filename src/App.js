import './App.css';
import React from "react"

import Register from './Pages/Register/Register';
import EventDetails from './Pages/EventDetails/EventDetails';
import Home from './Pages/Home/Home';
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import Navbar from './Components/Navbar/Navbar';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/eventdetails' element={<EventDetails/>}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
          </Routes>
      </BrowserRouter>
    );
}
  
export default App;
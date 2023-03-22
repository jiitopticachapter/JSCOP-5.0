import './App.css';
import React from "react"
import Register from './pages/Register/Register';
import EventDetails from './pages/EventDetails/EventDetails';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'

import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import LandingPage from './components/LandingPage/LandingPage';

function App() {
    return (
      <BrowserRouter>
        <Navbar/>
        {/* <LandingPage/> */}
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/eventdetails/:id' element={<EventDetails/>}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
          </Routes>
          <Footer/>
      </BrowserRouter>
    );
}
  
export default App;

import { useState } from 'react'
import './App.css'
import UserProfile from './components/UserProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter';
import InpiutHandler from './components/InputHandler';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CardProfiler from './components/CardProfiler';

function App() {
   return(
    <>
      <BrowserRouter>
        <nav>
            <Link to="/">Card Profiler</Link> | <Link to="/counter">Counter</Link> | 
            <Link to="/inputhandler">Input Handler</Link>
        </nav>
        <Routes>
           <Route path='/' element={<CardProfiler />} ></Route>
            <Route path='/counter' element={<Counter />} ></Route>
             <Route path='/inputhandler' element={<InpiutHandler />} ></Route>
        </Routes>
    </BrowserRouter>
    </>
   )
}

export default App

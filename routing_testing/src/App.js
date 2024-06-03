import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import MainPage from './pages/MainPage'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>}>
      <Route index element={<div>No page is selected.</div> } />
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navigation'
import Home from './routes/home/home'
import './App.css'

import SearchBox from './components/search-box/search-box'
import CardList from './components/card-list/card-list'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App

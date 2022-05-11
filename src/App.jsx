import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navigation'
import Home from './routes/home/home'
import User from './routes/users/user'
import './App.css'

import SearchBox from './components/search-box/search-box'
import CardList from './components/card-list/card-list'

const About = () => {
  return (
    <h1>Esto es el component about</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />  
        <Route path='users/:userId' element={<User />} />
      </Route>    
    </Routes>
  )
}

export default App

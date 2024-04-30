import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Boomark from './pages/Bookmark'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="movies" element={<Movies/>}/>
          <Route path="series" element={<Series/>} />
          <Route path="bookmark" element={<Boomark/>} />
        </Route>
      </Routes>
    </BrowserRouter> 
  )
}

export default App

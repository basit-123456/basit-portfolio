import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Layout from './pages/Layouts/Layout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
// import Signup from './pages/Signup/Signup'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Services from './pages/Services/Services'
import Projects from './pages/projects/Projects'
// import Projects from './pages/Calculator/Calculator'





function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Layout />} path='/'/>
        <Route element={<Home />} path='/Home'/>
        <Route element={<About />} path='/About' />
        <Route element={<Contact />} path='/Contact' />
        <Route element={<Services />} path='/Services' />
        <Route element={<Projects />} path='/Projects' />
        <Route element={ <Login />} path='/LogIn'/>
        {/* <Route elemnt={ <Calculator />} path="/Calculator" /> */}
      </Routes>
      
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

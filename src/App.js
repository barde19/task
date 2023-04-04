import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import OurOffering from './OurOffering'
import OurTeam from './OurTeam'
import ContactUs from './ContactUs'
import Blogs from './Blogs'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='/OurOffering' element={<OurOffering />}>Our offering</Route>
          <Route path='/OurTeam' element={<OurTeam />}>Our Team</Route>
          <Route path='/ContactUs' element={<ContactUs />}>Contact Us</Route>
          <Route path='/Blogs' element={<Blogs />}>Blogs</Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
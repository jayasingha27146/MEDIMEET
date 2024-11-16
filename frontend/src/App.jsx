import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import Contact from './pages/contact'
import Doctors from './pages/Doctors'
import Login from './pages/login'
import Myappoinment from './pages/myappoinment'
import Myprofile from './pages/myprofile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Appointment from './pages/Appointment'



const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Doctors' element={<Doctors/>} />
        <Route path='/Doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myprofile' element={<Myprofile />} />
        <Route path='/myappoinment' element={<Myappoinment />} />
        <Route path='/Appointment/:docId' element={<Appointment />} />
        
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App
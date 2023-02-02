import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Orders from '../Components/Orders'

function Home() {
  return (
    <div>
        <Navbar/>
        <Orders/>
        <Footer/>
    </div>
  )
}

export default Home
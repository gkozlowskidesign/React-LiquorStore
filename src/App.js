import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Order from './components/Order'
import Contact from './components/Contact'



function App() {
  return (
    <div>
       <Navbar />
        <Hero />
        <About />
        <Order />
        <Contact />
    </div>
  );
}

export default App;
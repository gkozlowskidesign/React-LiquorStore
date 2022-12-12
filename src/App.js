import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Order from './components/Order'
import Contact from './components/Contact'
import Menu from './components/Menu'
import Beer from './components/Beer'
import Wine from './components/Wine'
import Liquor from './components/Liquor';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
          <Hero />
          <Order />
          <About />
          <Menu />
          <Contact />
          </Route>
          <Route  path="/wine">
          <Wine/> 
          </Route>
          <Route  path="/beer">
          <Beer/>
          </Route>
          <Route  path="/liquor">
          <Liquor/>
          </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
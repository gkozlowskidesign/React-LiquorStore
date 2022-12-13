import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// CTA Website Content 
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Order from './components/Order'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'

// Menu Website Content (Iframes)
import Beer from './components/Beer'
import Wine from './components/Wine'
import Liquor from './components/Liquor';
import Shopping from './components/Shopping';



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
          <Route  path="/shopping">
          <Hero />
          <Shopping /> 
          </Route>
          <Route  path="/wine">
          <Hero />
          <Order />
          <Wine /> 
          </Route>
          <Route  path="/beer">
          <Hero />
          <Order />      
          <Beer />
          </Route>
          <Route  path="/liquor">
          <Hero />
          <Order />      
          <Liquor />
          </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

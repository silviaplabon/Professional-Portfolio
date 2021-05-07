import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useContext, useState } from 'react';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import SinglePageShow from './components/SinglePageShow/SinglePageShow';
function App() {
 
  return (
 
      <Router>
        <Switch> 
           <Route exact path="/">
            <Home/>
           </Route>
          <Route  exact path="/about">
          <SinglePageShow state={false} content={'about'}></SinglePageShow>
          </Route >
          <Route  exact path="/blogs">
          <SinglePageShow state={false} content={'blogs'}></SinglePageShow>
          </Route >
          <Route  exact path="/contact">
           <SinglePageShow state={false} content={'contact'}></SinglePageShow>
          </Route >
          <Route  exact path="/projects">
            <SinglePageShow  state={false} content={'projects'}></SinglePageShow>
          </Route >
        </Switch>
      </Router>
  );
}

export default App;

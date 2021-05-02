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
function App() {
 
  return (
 
      <Router>
        <Switch> 
           <Route exact path="/">
            <Home/>
           </Route>
          <Route  exact path="/addService">
            {/* <AddService></AddService> */}
          </Route >
        
          <Route  exact path="/adminMaker">
            {/* <AdminMaker></AdminMaker> */}
          </Route>
  

      
    
        </Switch>
      </Router>
  );
}

export default App;

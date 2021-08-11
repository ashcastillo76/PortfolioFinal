import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./views/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Projects from "./views/Projects";
import Skills from "./views/Skills";
import Resume from "./views/Resume";
import Home from "./views/Home";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path ="/">
          <Home/>
        </Route>

        <Route path ="/about">
          <About/>
        </Route>

        <Route path ="/projects">
          <Projects/>
        </Route>

        <Route path ="/skills">
          <Skills/>
        </Route>

        <Route path ="/resume">
          <Resume/>
        </Route>

        <Route path ="/contact">
          <Contact/>
        </Route>
        
      </Switch>
      
    </Router>
    <Footer/>
    </div>
  );
}

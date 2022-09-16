import './App.css';
import React from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <div className="App" id='home'>
      <Navbar />
      <Home />
      <About />
      <div class="main-content">
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}


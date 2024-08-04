import {Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import './App.css';


const App=()=> {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Footer/>}/>
      </Routes>
    </div>
  );
}

export default App;

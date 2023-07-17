
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Download from './components/Download';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Kotlin from './components/Kotlin';
import Example from './components/Example';
import IntroToKotlin from './components/IntroToKotlin';
import Sys from './components/Sys';



function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="download" element={<Download/>}/>
        <Route path="kotlin" element={<Kotlin/>}/>
        <Route path="example" element={<Example/>}/>
        <Route path="introtokotlin" element={<IntroToKotlin/>}/>
        <Route path="sys-req" element={<Sys/>}/>


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

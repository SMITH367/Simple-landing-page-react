import React from 'react'
import './App.css';
import {Header} from './components/Header'
import {Hero} from './components/Hero'
import {SectionMain} from './components/SectionMain'
import {Aside} from './components/Aside'
import {Footer} from './components/Footer'

function App() {
  
  return (
    <div className="App">
      <div className="container">
        <h2 class="center">SOMOS MAKE LANDING PAGES</h2>
        <Header></Header>
        <Hero/>
        <SectionMain/>
        <Aside />
        <Footer/>

      
    

      </div>
     
    </div>
  );
}

export default App;

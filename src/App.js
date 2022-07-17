//This App.js file is the center of the application. The root component, or the wrapper component 
// that houses all of the other components. To effect any change on the application, we need to either modify this file or add components inside it.
import './App.css';
import React from 'react'

//importing components
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;

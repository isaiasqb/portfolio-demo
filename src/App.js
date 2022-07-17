//This App.js file is the center of the application. The root component, or the wrapper component 
// that houses all of the other components. To effect any change on the application, we need to either modify this file or add components inside it.
// import './App.css';
import React, { useState } from 'react';

//importing components
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';




function App() {

  //hook for converting app into an SPA
  const [contactSelected, setContactSelected] = useState(false);


  const [categories] = useState([
    {
      name: "productivity",
      description: "A few examples of recent apps that I've built, fully functional and guaranteed to boost your productivity.",
    },
    { name: "miscellaneous", 
    description: "A few examples of recent apps that have enjoyment and convenience as the main focus, fully functional and built form scratch" }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>

        {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}



      </main>
    </div>
  );
}

export default App;

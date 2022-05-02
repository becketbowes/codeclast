import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Contact></Contact>
      <About></About>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;

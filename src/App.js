import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  //send page render conditional to nav function
  const [currentContent, setCurrentContent] = useState('about');
  //media query
  const [isBig, setIsBig] = useState(window.matchMedia("(min-width: 1000px)").matches)
  useEffect(() => {
    window.matchMedia("(min-width:1000px)")
    .addEventListener('change', e => setIsBig( e.matches ));
  }, []);

  const renderContent = () => {
    if (currentContent === 'about') {
      return <About isBig={isBig} />;
    }
    if (currentContent === 'portfolio') {
      return <Portfolio isBig={isBig} />;
    }
    if (currentContent === 'resume') {
      return <Resume />;
    }
    if (currentContent === 'contact') {
      return <Contact />;
    }
  }

  const handleContentChange = (content) => setCurrentContent(content);

  return (
    <div>
      <Header currentContent={currentContent} handleContentChange={handleContentChange} />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;

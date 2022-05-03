import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [currentContent, setCurrentContent] = useState('portfolio');

  const renderContent = () => {
    if (currentContent === 'about') {
      return <About />;
    }
    if (currentContent === 'portfolio') {
      return <Portfolio />;
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
      <Nav currentContent={currentContent} handleContentChange={handleContentChange} />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;

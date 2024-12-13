import React from 'react';
import Header from './components/layout/Header/Header';
import Hero from './components/home/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
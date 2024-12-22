import React from 'react';

import { About, Blogs, Footer, Header, Skills, Testimonials, Works } from './container';
import { Navbar } from './components';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Blogs />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';

// Components
import Header from './components/header.jsx';
import Hero from './components/hero.jsx';
import About from './components/about.jsx';
import Skills from './components/skills.jsx';
import Resume from './components/resume.jsx';
import Projects from './components/projects.jsx';
import HireMe from './components/hireme.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
      <div>
          <Header />
          <Hero />
          <main id = "main">
              <About />
              <Skills />
              <Resume />
              <Projects />
              <HireMe />
              <Contact />
          </main>
          <Footer />
      </div>
    );
}

export default App;

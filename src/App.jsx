import React, { useState } from 'react';
import { resumeData } from './data/resumeData';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import AboutMe from './components/sections/AboutMe';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';

function App() {
  const [persona, setPersona] = useState('technical');

  const data = resumeData[persona];
  const sharedData = resumeData.shared;

  return (
    <div className="app-container">
      <Header persona={persona} setPersona={setPersona} contact={sharedData.contact} />

      <main>
        <Hero data={data.hero} contact={sharedData.contact} />
        <AboutMe data={data.about} education={sharedData.education} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Certifications certifications={sharedData.certifications} />
        <Achievements achievements={sharedData.achievements} />
        <Education education={sharedData.education} />
      </main>

      <Footer contact={sharedData.contact} />
    </div>
  );
}

export default App;

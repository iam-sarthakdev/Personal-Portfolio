import React from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import CompetitiveStatsSection from './components/CompetitiveStatsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import './index.css';

function App() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans antialiased overflow-x-clip">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <CompetitiveStatsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}

export default App;

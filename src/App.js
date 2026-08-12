import Navbar from './coponents/Navbar';
import Main from './coponents/Main';
import About from './coponents/About';
import Skills from './coponents/Skills';
import Projects from './coponents/Projects';
import Contact from './coponents/Contact';
import { useEffect, useState } from 'react';

function App() {
  const [title, settitle] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            settitle(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#000914] bg-radial-glow bg-grid-pattern min-h-screen select-none relative text-slate-100 font-sans">
      <div className='w-11/12 max-w-6xl mx-auto my-4 h-16 rounded-full bg-[#030f26]/80 backdrop-blur-xl border border-blue-500/20 shadow-lg shadow-blue-950/40 sticky top-4 z-50 transition-all duration-300 hover:border-blue-500/40'>
        <Navbar title={title} settitle={settitle}/>
      </div>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;


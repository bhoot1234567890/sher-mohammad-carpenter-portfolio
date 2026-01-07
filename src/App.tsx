import { Navigation } from './components/ui/Navigation';
import { Footer } from './components/ui/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Gallery } from './components/sections/Gallery';
import { Testimonials } from './components/sections/Testimonials';
import { Process } from './components/sections/Process';
import { Contact } from './components/sections/Contact';

import './components/ui/Navigation.css';
import './components/sections/Hero.css';
import './components/sections/About.css';
import './components/sections/Services.css';
import './components/sections/Gallery.css';
import './components/sections/Testimonials.css';
import './components/sections/Process.css';
import './components/sections/Contact.css';
import './components/ui/Footer.css';

function App() {
  return (
    <div className="app">
      <div className="grain-overlay" />

      <Navigation />

      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Location from './components/Location';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Location />
        <Gallery />
        <Contact />
      </main>
      <Footer />

      <Analytics />
    </div>
  );
}

export default App;

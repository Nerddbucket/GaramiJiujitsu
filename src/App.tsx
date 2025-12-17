import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CallToAction from './components/CallToAction';
import Programs from './components/Programs';
import Location from './components/Location';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import FreeTrial from './pages/FreeTrial';

function Home() {
  return (
    <>
      <Hero />
      <CallToAction />
      <Programs />
      <Location />
      <Contact />
      <Testimonials />
      <Gallery />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Banner />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/free-trial" element={<FreeTrial />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


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

function App() {
  return (
    <div className="min-h-screen">
      <Banner />
      <Navigation />
      <Hero />
      <CallToAction />
      <Programs />
      <Location />
      <Contact />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;




import './App.css'
import Services from './Services';
import About from './component/About';
import Blogs from './component/Blogs';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Hero from './component/Hero';

import Navbar from './component/Navbar';
import Partners from './component/Partners';
import Projects from './component/Projects';

function App() {
  

  return (
    <div className='bg-dark'>
      <Navbar />
      <Hero/>
      <About />
      <Services />
      <Projects />
      <Blogs />
      <Partners />
      <Contact />
      <div className='h-20'></div>
      <Footer />
    </div>
  )
}

export default App;

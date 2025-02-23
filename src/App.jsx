import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroContent from './components/Hero/HeroContent'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Studies from './components/Studies/Studies'
import Project from './components/Projects/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <HeroContent/>
      <About/>
      <Skills/>
      <Studies />
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App

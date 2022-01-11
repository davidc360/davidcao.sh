import './App.sass'
import Greeting from './Greeting'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  return (
      <div className="App">
          <Greeting />
          <About />
          <Projects />
          <Contact />
      </div>
  )
}

export default App;

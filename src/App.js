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
            {/* footer */}
            <div className="footer">
                Designed and developed by David Cao ❤️
            </div>
        </div>
  )
}

export default App;

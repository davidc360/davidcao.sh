import './App.sass'
import Greeting from './Greeting'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
    const path = window.location.pathname
    if (path === '/slash-to-search/') {
        window.open('https://chrome.google.com/webstore/detail/slash-to-search/ijckekobipioaegifkgdllplckmaojdj', '_self')
    }
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

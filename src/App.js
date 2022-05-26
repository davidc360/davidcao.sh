import './App.sass'
import Greeting from './Greeting'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import "react-image-gallery/styles/css/image-gallery.css";
import resume from './resume.pdf'

function App() {
    if (window.location.pathname === '/daisy') {
        window.open("https://daisyy.vercel.app/", "_self")
    }
    return (
        <div className="App">
            {
                <>
                    <Greeting showSubText={true}/>
                    <About />
                    <Projects />
                    <Contact />
                    {/* footer */}
                    <div className="footer">
                        Designed and developed by David Cao ❤️
                    </div>
                </>
            }
        </div>
  )
}

export default App;

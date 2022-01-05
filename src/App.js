import './App.sass'
import './Common.sass'
import Greeting from './Greeting'
import About from './About'
import Projects from './Projects'

function App() {
  return (
      <div className="App">
          <Greeting />
          <About />
          <Projects />
      </div>
  )
}

export default App;

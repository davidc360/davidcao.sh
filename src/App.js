import Axios from 'axios'
import './App.sass'
import Greeting from './Greeting'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import "react-image-gallery/styles/css/image-gallery.css";
import resume from './resume.pdf'
import fileDownload from 'js-file-download'

function App() {
    function downloadResume() {
        const filename = 'David_Cao_Resume.pdf'
        Axios.get(resume, {
            responseType: 'arraybuffer',
          }).then(res => {
            fileDownload(res.data, filename);
          })
    }
    return (
        <div className="App">
            {window.location.pathname === '/resume' ? 
                <>
                    <Greeting />
                    <div className="resumeHeader">
                        <a className="resumeHeaderLink button" href="/">Homepage</a>
                        <a className="resumeHeaderLink button" href={resume}>View Resume</a>
                        <a className="resumeHeaderLink button" href="https://www.dropbox.com/s/x3fmq1kilzjjlvx/David_Cao_Resume.pdf?dl=1" target="_blank">Download PDF</a>
                    </div>
                </>
                :
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

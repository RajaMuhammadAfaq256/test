

import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import { ArrowUp } from 'react-feather'
function App() {

    function topFunction() {
        console.log("hello")
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <div >
            <div id="preloader">
                <div id="status">
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                </div>
            </div>
            <Navbar />
            <Hero />
            <About />
            <Resume />
            <Education />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <div className="back-to-top btn btn-icon btn-soft-primary" id="floatingButton" onClick={() => topFunction()}>
                <ArrowUp className="icons" />
            </div>
        </div>
    );
}

export default App;

import React from 'react'
import { DarkModeToggle } from './DarkMode'

export default function Navbar() {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky" >
    <div className="container">
        <a className="logo" href="/">Santiago</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" 
            aria-label="Toggle navigation">
            <i className="mdi mdi-menu"></i>
        </button>

        <div className="collapse navbar-collapse navigation" id="navbarCollapse">
            <ul id="navbar-navlist" className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link active" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#resume">Resume</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects</a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
                <li className="nav-item">
                    <p className="nav-link" > 
                    <DarkModeToggle/>
                    
                    </p>
                </li>   
               
                
            </ul>

            <ul className="top-right text-end list-unstyled list-inline mb-0 mt-2 mt-sm-0 nav-social">
                <li className="list-inline-item me-2"><a target="_blank" href="https://www.linkedin.com/in/lopez-www/" rel='noreferrer'><i className="mdi mdi-linkedin"></i></a></li>
                <li className="list-inline-item me-2"><a target="_blank" href="https://github.com/theRod15" rel='noreferrer'><i className="mdi mdi-github-circle"></i></a></li>
            </ul>
            
        </div> 
    </div>
</nav>
  )
}

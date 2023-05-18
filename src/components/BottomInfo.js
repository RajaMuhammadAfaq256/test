import React from 'react'

export default function BottomInfo() {
  return (
    <footer className="footer bg-light">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 text-center" data-aos="fade-up">
                <p className="footer-logo  custom-text">Santiago Lopez</p>
                <p className="para-desc mx-auto mt-5 custom-text">Obviously I'm a full stack developer with much experience in front end part. <br/> Experienced with all stages of the development cycle for a lot of projects.</p>
                <ul className="list-unstyled mb-0 mt-4 social-icon">                            
                    <li className="list-inline-item me-1"><a target="_blank" href="https://github.com/theRod15" rel='noreferrer' className="rounded-circle"><i className="mdi mdi-github-circle"></i></a></li>
                    <li className="list-inline-item me-1"><a target="_blank" href="https://www.linkedin.com/in/lopez-www" rel='noreferrer' className="rounded-circle"><i className="mdi mdi-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
  )
}

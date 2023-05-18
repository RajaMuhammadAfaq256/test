import React from 'react'

export default function Resume() {
  return (
    <section className="section" id="resume">
    <div className="container">

        <div className="row justify-content-center align-items-center">
            <div className="col-lg-4">
                <div className="work-content mt-4" data-aos="fade-up">
                    <h2 className="text-capitalize">Work  Expreience</h2>
                    <p className="mb-0 text-light-muted">For over 8 years, I am experienced with all stages of the development cycle for dynamic web & mobile development.</p>
                </div>
            </div>

            <div className="col-lg-8 ">
                <div className="row">
                    <div className="main-timeline" data-aos="fade-up">
                        <div className="timeline mt-4">
                            <a href="/#" className="timeline-content">
                                <div className="timeline-icon text-primary">
                                    <img src="assets/images/clutch.jpg" alt='icon' className="fea icon-md"/>
                                </div>
                                <h3 className="title mb-0">Senior Full Stack Developer</h3>
                                <small className="company">Clutch Wallet</small>
                                <span className="badge skill-badge education-badge badge-light">Feb 2021 - Feb 2023</span>
                                <p className="description text-light-muted mt-2">
                                    Skills: React.js, Redux, Node, React Native, Firebase, Expo, Bootstrap, Tailwind CSS, Web3, NFT, Ethereum
                                </p>
                            </a>
                        </div>
                        <div className="timeline mt-4">
                            <a href="/#" className="timeline-content">
                                <div className="timeline-icon text-primary">
                                    <img src="assets/images/streebo.jpg" alt="icon-2" className="fea icon-md"/>
                                </div>
                                <h3 className="title mb-0">Senior Web Developer</h3>
                                <small className="company">Streebo</small>
                                <span className="badge skill-badge education-badge margin-20 badge-light">Sep 2018 - Jan 2021</span>
                                <p className="description text-light-muted mt-2">
                                    Skills: React, Redux, GatsbyJS, Contentful, Node, GraphQL, Firestore
                                </p>
                            </a>
                        </div>
                        <div className="timeline mt-4">
                            <a href="/#" className="timeline-content">
                                <div className="timeline-icon text-primary">
                                    <img src="assets/images/rocket.jpeg" alt='5' className="fea icon-md"/>
                                </div>
                                <h3 className="title mb-0">Full Stack Developer</h3>
                                <small className="company">Rocket Insights</small>
                                <span className="badge skill-badge education-badge badge-light">Nov 2016 - Jun 2018</span>
                                <p className="description text-light-muted mt-2">
                                    Skills: React, Next.js, Vue, Vuex, Vuetify, Microservice, WebSocket, TypeScript, Node, Express, PostgreSQL, MySQL
                                </p>
                            </a>
                        </div>
                        <div className="timeline mt-4">
                            <a href="/#" className="timeline-content">
                                <div className="timeline-icon text-primary">
                                    <img src="assets/images/activeProspect.jpg" alt='4' className="fea icon-md"/>
                                </div>
                                <h3 className="title mb-0">Front End Developer</h3>
                                <small className="company">ActiveProspect</small>
                                <span className="badge skill-badge education-badge margin-20 badge-light">Aug 2014 - Oct 2016</span>
                                <p className="description text-light-muted mt-2">
                                    Skills: HTML, CSS, Javascript, jQuery, AngularJS, Angular 2, Ionic, bigCommerce, PWA
                                </p>
                            </a>
                        </div>                                
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

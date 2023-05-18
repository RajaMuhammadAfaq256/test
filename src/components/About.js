import React from 'react'
import { TypeAnimation } from 'react-type-animation';
export default function About() {
    return (
        <section className="bg-light" id="aboutme">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card public-profile border-0 rounded shadow" style={{ zIndex: 1 }}>
                            <div className="card-body">
                                <div className="row align-items-center" data-aos="fade-up">
                                    <div className="col-lg-3 col-md-4 text-md-start">
                                        <div className="about-details key-feature bg-light">
                                            <div className="media-body content">
                                                <h6 className="title mb-2">Personal Details</h6>
                                                <div className="bor-bottom mt-2 mb-2"></div>
                                                <p className="text-muted mb-2 mt-3 font-14"><a href='/' className="text-black">Email: </a>lopez.www2012@gmail.com</p>
                                                <p className="text-muted mb-2 font-14"><a href='/' className="text-black">Address: </a>Alvarado, Texas</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-9 col-md-8">
                                        <div className="row align-items-end">
                                            <div className="col-md-12 text-md-start mt-4 mt-sm-0">
                                                <h4 className="heading me-2">I Am {' '}

                                                    <span className="element text-primary" data-elements="Web Developer, Mobile Developer, Web Designer"></span>
                                                    <TypeAnimation
                                                        sequence={[
                                                            'Web Developer', 
                                                            1000, 
                                                            'Mobile Developer',
                                                            1000, 
                                                            'Web Designer', 
                                                            1000,
                                                            
                                                        ]}
                                                        wrapper="span"
                                                        className="element text-primary"
                                                        cursor={true}
                                                        repeat={Infinity}
                                                        
                                                    />
                                                </h4>
                                                <p className="text-light-muted mt-2">I'm a senior web/mobile developer with team-leading experience building successful products from the ground up.<br />
                                                    In the past 8 years, I've worked with both startup and enterprise clients to develop reliable, cohesive, and well-accepted solutions by users.<br />
                                                    I'm passionate about tech, stocks and finance, cryptocurrencies, and blockchain.
                                                    <br /><br />
                                                    Expreience:<br />
                                                    - Web/Mobile development in React, React Native, Angular, Ionic, and Node.<br />
                                                    - Databases in DynamoDB, MySQL, GraphQL, Redis, MongoDB, Firebase.<br />
                                                    - Architecture with Amazon AWS (Lambda, EC2, S3, SES, Cloudfront, Route53 and others)<br />
                                                    - Payment integrations with Stripe, PayPal, and Coin payments(Bitpay and Coinbase)<br />
                                                    - Blockchain development including Ethereum, Web3.js, Solidity, and NFT Marketplace<br />
                                                    - Languages: JavaScript, TypeScript, HTML, CSS, Solidity<br />
                                                    - Frameworks and Libraries: React.js, Redux, Node.js, Express, Angular, Vue, Next.js, Gatsby.js, Bootstrap, Material Design, Tailwind CSS<br />
                                                    - Mobile: Ionic, React Native<br /><br />
                                                    Since March 2023, I have been working as a full time freelancer and looking for remote contracts.<br />
                                                </p>
                                                <img src="assets/images/signature.png" height="35" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

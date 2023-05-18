import React from 'react'
import { Download } from 'react-feather';
export default function Hero() {
  return (
    <div className="hero-area position-relative bg-half-120 pb-0"  id="home" style={{backgroundImage:`url(assets/images/home/home-shape.png)`}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-7 col-md-7 align-items-center">
                <div className="title-heading mt-4 py--50" data-aos="fade-up">
                    <div className="alert alert-transparent alert-pills shadow" role="alert">                                
                        <span className="content">Looking for a Senior Full Stack Developer!</span>
                    </div>
                    <h1 className="heading text-black">Here I'm Santiago Lopez</h1>
                    <p className="pera-title text-light-muted">Senior React | Angular | Vue | React Native | Node Developer</p>
                    <div className="hero-btn mt-4 pt-2">
                        <a target='_blank' href='/Resume_Santi.pdf' className="btn btn-outline-primary rounded text-white mb-2">Download Resume<Download  className='fea icon-sm'/> </a>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0" data-aos="fade-up">
                <div className="home-image"  style={{height:'500px'}}>
                    <img src="assets/images/home/home.png" alt="" className="img-fluid mx-auto position-relative"/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

import React from 'react'
import { educationHistory } from './Utils.js/Constant'

export default function Education() {
    return (
        <section className="section fan-fact" style={{ backgroundImage: 'url(assets/images/bg-pattern.png)' }} id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="container-title text-center mb-4 pb-2" data-aos="fade-up">
                            <div className="titles">
                                <h2 className="title text-capitalize mb-4" style={{
                                    color:'black'
                                }}>Education</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        educationHistory?.map((obj, index) => {
                            return (
                                <div className="col-lg-6 col-md-6 col-12 mt-4 pt-2" key={index}>
                                    <div className="feature-widget text-left rounded" data-aos="fade-up">
                                        <div className="services-icon text-primary mb-3">
                                            <img src={obj.imagePath} alt={obj.universityName} width="100%" height="100%" />
                                        </div>
                                        <div className="services-texts">
                                            <h3 className="title mb-3">{obj.universityName}</h3>
                                            <p className="text-light-muted mb-4">{obj.degree}</p>
                                            <p className="text-primary">{obj.duration}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

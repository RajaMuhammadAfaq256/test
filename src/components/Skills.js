import React from 'react'
import { skillList, skillSet } from './Utils.js/Constant'

export default function Skills() {
    return (
        <section className="cta-full" id="skills">
            <div className="container">
                <div className="row position-relative">
                    <div>
                        <div className="cta-full-img-box">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center mb-3">
                                    <div className="container-title" data-aos="fade-up">
                                        <div className="titles">
                                            <h4 className="title title-line text-capitalize mb-4">Work Expertise</h4>
                                        </div>
                                        <p className="text-light-muted mx-auto width-max mb-0">
                                            {
                                                skillList?.map((item, key) => {
                                                    return skillList?.length - 1 === key ? `${item}` : `${item}, `
                                                })
                                            }
                                        </p>


                                    </div>
                                </div>
                            </div>

                            <div className="row align-items-center">
                                {
                                    skillSet?.map((skill, i) => {
                                        return (
                                            <div className="col-lg-2 col-6 mt-4 pt-2" key={`${i}-skill`}>
                                                <div className="card explore-feature border-0 text-center bg-white p-3" data-aos="fade-up">
                                                    <div className="card-body p-0">
                                                        <div className="skill-icon rounded-circle shadow-lg d-inline-block">
                                                            <img src={skill} alt="" className="img-fluid mx-auto" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

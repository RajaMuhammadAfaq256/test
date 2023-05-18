import React from 'react'
import { projectsList } from './Utils.js/Constant'

export default function Projects() {
    return (
        <section className="section bg-light" id="projects">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="container-title text-center mb-4 pb-2">
                            <div className="titles">
                                <h2 className="title text-capitalize mb-4">My Work & Portfolio</h2>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        projectsList?.map((item, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={`${index}-project`}>
                                    <div className="card border-0 rounded">
                                        <div className="work-container work-modern  position-relative d-block overflow-hidden">   <div className="card-body p-0">
                                            <img src={item.imgPath} className="img-fluid" alt={item.title} />
                                           
                                        </div>
                                        </div>
                                     
                                        <div className="p-3" >
                                            <span className="mb-0 "><h6 target="_blank" href="https://clutchwallet.xyz/" className="title text-capitalize " >{item.title}</h6></span>
                                            {/* <p target="_blank" href="https://clutchwallet.xyz/" className=" text-capitalize mb-0 " >{item.description}</p> */}
                                            <div className="content">
                                                <h6 className="text-black tag mb-0 mt-2">
                                                <div className='pt_skill'>
                                                    {
                                                        item.techStack?.map((skill, i) => {
                                                            return (
                                                                
                                                                <span className="pt_skill_item" key={i}>{skill}</span>
                                                                
                                                            )
                                                        })
                                                    }
                                                    </div>
                                                </h6>
                                            </div>
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

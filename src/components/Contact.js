import React,{useRef} from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const validationSchema = Yup.object().shape({
        user_email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
            user_name: Yup.string()
            .required('Name is required'),
        subject: Yup.string()
            .required('Subject is required'),
        message: Yup.string()
            .required('Message is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState: { errors } } = useForm(formOptions);
    const onSubmit = () => {
        emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            alert('message sent successfully...');
            window.location.reload()
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    
    return (
        <>
            <section  className="section pb-0" id="contact">
                <div  className="container">
                    <div  className="row justify-content-center">
                        <div  className="col-12 text-center">
                            <div  className="container-title text-center mb-4 pb-2">
                                <div  className="titles">
                                    <h2  className="title text-capitalize mb-4">Contact Me</h2>
                                    <p  className="pera-title para-desc-600 text-light-muted mb-0 mx-auto">
                                        Obviously I'm a full stack developer with much experience in front end part.<br/>
                                        Experienced with all stages of the development cycle for a lot of projects.</p>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div  className="row">
                        <div  className="col-md-4 mt-4 pt-2">
                            <div  className="contact-detail text-center">
                                <div  className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  className="feather feather-phone fea icon-md"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div  className="content mt-4">
                                    <h5  className="title">Phone</h5>
                                    <p  className="text-light-muted">Promising development turmoil inclusive education transformative community</p>
                                    <a href="tel:+152534-468-854"  className="text-primary">+152 534-468-854</a>
                                </div>
                            </div>
                        </div>

                        <div  className="col-md-4 mt-4 pt-2">
                            <div  className="contact-detail text-center">
                                <div  className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  className="feather feather-mail fea icon-md"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div  className="content mt-4">
                                    <h5  className="title">Email</h5>
                                    <p  className="text-light-muted">Promising development turmoil inclusive education transformative community</p>
                                    <a href="mailto:contact@example.com"  className="text-primary">contact@example.com</a>
                                </div>
                            </div>
                        </div>

                        <div  className="col-md-4 mt-4 pt-2">
                            <div  className="contact-detail text-center">
                                <div  className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  className="feather feather-map-pin fea icon-md"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div  className="content mt-4">
                                    <h5  className="title">Location</h5>
                                    <p  className="text-light-muted">C/54 Northwest Freeway, Suite 558, <br />Houston, USA 485</p>
                                    <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"  className="map-popup-view text-primary">View on Google map</a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
            <section  className="section pt-5">
                <div  className="container">
                    <div  className="row justify-content-center">
                        <div  className="col-lg-12">
                            <div  className="custom-form mb-sm-30">
                                <form name="myForm" onSubmit={handleSubmit(onSubmit)} ref={form}>
                                    <p id="error-msg"></p>
                                    <div id="simple-msg"></div>
                                    <div  className="row">
                                        <div  className="col-lg-6">
                                            <div  className="row">
                                                <div  className="col-lg-12 col-md-6">
                                                    <div  className="form-group">
                                                        <input name="user_name" id="user_name" type="text"  className="form-control border rounded" placeholder="Name :" {...register("user_name", { required: true })} />
                                                        {errors.user_name && <span className='alert '>{errors?.user_name?.message}</span>}
                                                    </div>
                                                </div>
                                                <div  className="col-lg-12 col-md-6">
                                                    <div  className="form-group">
                                                        <input name="user_email" id="user_email" type="email"  className="form-control border rounded" placeholder="Your email :" {...register("user_email", { required: true })} />
                                                        {errors.user_email && <span className='alert '>{errors?.user_email?.message}</span>}

                                                    </div>
                                                </div>
                                                <div  className="col-lg-12">
                                                    <div  className="form-group">
                                                        <input name="subject" id="subject"  className="form-control border rounded" placeholder="Your subject :" {...register("subject", { required: true })} />
                                                        {errors.subject && <span className='alert '>{errors?.subject?.message}</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div  className="col-lg-6">
                                            <div  className="form-group">
                                                <textarea {...register("message", { required: true })} name="message" id="message" rows="4"  className="form-control border rounded" placeholder="Your Message :"></textarea>
                                                {errors.message && <span className='alert '>{errors?.message?.message}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="row">
                                        <div  className="col-sm-12 text-end">
                                            <input type="submit" id="submit" name="send"  className="submitBnt btn btn btn-primary rounded" value="Send Message" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import email from '../../Images/mailz.png'

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cze5bzw', 'template_qwmnefw', form.current, '1oaWkvFZ8m30Cdavv')
      .then((result) => {
          console.log(result.text);
          // console.log('email send')
          toast.success('Your Message Send')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section className="px-12 mt-20 mb-20">
        <div className="heading-container">
        <h1 className="screen-heading font-bold text-[32px]">Contact Me</h1>
        <span className="screen-sub-heading">Lets Keep In Touch</span>
        <div className="heading-seperator">
          <div className="seperator-line"></div>
          <div className="seperator-blob">
            <div></div>
          </div>
        </div>
        </div>
      <div className="hero lg:max-h-screen bg-[#28243c] rounded-[20px] shadow-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white p-5">Get In Touch!</h1>
            <h3 className=" opacity-40 text-[18px] text-[#fff]">Send Your Email Here!</h3>
            <img className="opacity-40 rounded-xl" src={email} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form ref={form} onSubmit={sendEmail}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  className=" input input-bordered h-32"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#28243c] hover:bg-slate-500">Send</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactMe;

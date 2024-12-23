import React, { useState } from 'react';


import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';


function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }



  return (
    < >
      <h2 className="head-text">  throw a message my way! </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:linda.ochwada@gmx.de" className="p-text">Email Me</a>
        </div>
       {/*  <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel:+49" className="p-text">+49 ---</a>
        </div> */}
      </div>

      {!isFormSubmitted ?
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type='text' placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className='app__flex'>
            <input className='p-text' type='email' placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>

            {loading ? "Sending" : "Sent Message"}
          </button>
        </div>
        : <div>
          <h3 className='head-text'>
          Thanks for getting in touch with me!
          </h3>
        </div>}
    </>
  )
}

// export default Footer
export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  "app__whitebg"
);
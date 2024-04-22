import styles from "./ContactForm.module.css";
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { MdOutlinePerson } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { TiMail } from "react-icons/ti";
import { FiBook } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import Container from '@mui/material/Container';


const generateCaptcha = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    subject: '',
    message: '',
    captcha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to server using API
    fetch('your-api-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Handle success response from server if needed
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle error response from server if needed
    });
  };
// jquery


  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChanged = (e) => {
    setInputValue(e.target.value);
    setIsValid(false);
  };

  const handleSubmited = (e) => {
    e.preventDefault();
    if (inputValue.toLowerCase() === captcha.toLowerCase()) {
      setIsValid(true);
    } else {
      setIsValid(false);
      setCaptcha(generateCaptcha());
      setInputValue('');
    }
  };
  return (
    <React.Fragment>
      <Container className={styles.container} >
        <div className={styles.formContainer}>
          <h1 className={styles.head}>Get In Touch</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.mainInputContainer}>
              <div className={styles.firstContainer}>
                <div className={styles.nameContainer}>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className={styles.name}/>
                  <MdOutlinePerson className={styles.nameIcon}/>
                </div>
                <div className={styles.numberContainer}>
                  <input type="text" name="number" value={formData.number} onChange={handleChange} placeholder="Your Number" className={styles.number}/>
                  <BiPhone className={styles.numberIcon}/>
                </div>
              </div>
              <div className={styles.secondContainer}>
                <div className={styles.emailContainer}>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" className={styles.email}/>
                  <TiMail className={styles.mailIcon}/>
                </div>
                <div className={styles.subjectContainer}>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className={styles.subject}/>
                  <FiBook className={styles.subjectIcon}/>
                </div>
              </div>
            </div>
          <div className={styles.messageContainer}>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className={styles.message}/>
            <BiMessageDetail className={styles.messageIcon}/>
          </div>
          <div className={styles.capchtaContainer}>
          <div className={styles.captcha}>
            <div className={styles.captchaBox}>{captcha}</div><div>Captcha</div>
          </div>
            <input type="text" name="captcha" value={formData.captcha} onChange={handleChange} placeholder="Enter captcha" id="captcha" className={styles.enterCaptcha}/>
          </div>
            <div className={styles.btnContainer}>
              <Button variant="contained" type="submit" onClick={handleSubmit} className={styles.submitButton}>Submit</Button>
            </div>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default ContactForm;

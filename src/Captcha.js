import React, { useState } from 'react';

const generateCaptcha = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const CaptchaForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setIsValid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.toLowerCase() === captcha.toLowerCase()) {
      setIsValid(true);
      // Here you can proceed with your form submission logic
    } else {
      setIsValid(false);
      setCaptcha(generateCaptcha());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="captcha">Please Enter the CAPTCHA:</label>
        <br />
        <span>{captcha}</span>
        <input
          type="text"
          id="captcha"
          name="captcha"
          value={inputValue}
          onChange={handleChange}
        />
        {isValid ? (
          <span style={{ color: 'green' }}>Captcha is correct!</span>
        ) : (
          <span style={{ color: 'red' }}>Captcha is incorrect. Please try again.</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CaptchaForm;

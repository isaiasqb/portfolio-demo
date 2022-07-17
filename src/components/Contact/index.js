import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';



function ContactForm() {
  //hook to manage the form data
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  const { name, email, message } = formState

  //error state hook
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    //validating email
    if (e.target.name === 'email') {
    const isValid = validateEmail(e.target.value);
    console.log(isValid)
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
    //validating other fields
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`)
      } else {
        setErrorMessage('');
      }
    }
    console.log('errorMessage', errorMessage);

    //using spread operator to prevent overriding the other two values that were not selected
    if (!errorMessage) {
    setFormState({...formState, [e.target.name]: e.target.value})
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  console.log(formState);

  return(
    <section>
      <h1>Let's Collaborate!</h1>
      <form id="contact-form">
        
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5"  defaultValue={message} onBlur={handleChange}/>
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
        </div>

        <button type="submit" onSubmit={handleSubmit}>Submit</button>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

      </form>
    </section>
  );
}


export default ContactForm;
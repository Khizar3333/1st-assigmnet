"use client"
import React, { useState } from 'react'
import styles from "../contact.module.css";
const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // e.preventDefault();
    // Handle form submission logic here
    // For example, you can send the form data to an API endpoint
    console.log('Form submitted:', { name, email, message });
    // Reset the form after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label className={styles.label} htmlFor="name">Name</label>
        <input className={styles.input}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="email">Email</label>
        <input className={styles.input}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.divtext}>
        <label className={styles.label} htmlFor="message">Message</label>
        <textarea className={styles.textarea}
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <button className={styles.button} type="submit">Submit</button>
    </form>
  );
};

  


export default Contact
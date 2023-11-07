import React from 'react';

const formContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const formStyle = {
  background: '#ffffff',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  width: '300px', // Adjust the width as needed
};

const labelStyle = {
  marginBottom: '5px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

export default function ContactUs() {
  return (
    <div style={formContainerStyle}>
      <div style={formStyle}>
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label style={labelStyle} htmlFor="name">Full Name</label>
          <input style={inputStyle} name="name" placeholder="Enter full name..." type="text" />
          <label style={labelStyle} htmlFor="email">Email</label>
          <input style={inputStyle} name="email" placeholder="Enter email..." type="email" />
          <label style={labelStyle} htmlFor="message">Message</label>
          <textarea style={textareaStyle} rows="6" placeholder="Enter message..." name="message" required></textarea>
          <button style={buttonStyle} type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

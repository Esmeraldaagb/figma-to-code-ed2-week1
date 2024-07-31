import React from 'react';
import { Link } from 'react-router-dom'; 

const Contact = () => {
  return (
    <div>
        <h2>Contact</h2>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: '#333',
    color: '#fff'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem'
  },
  navItem: {
    textTransform: 'uppercase'
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  }
};

export default Contact;

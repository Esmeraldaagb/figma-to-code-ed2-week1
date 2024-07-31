import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../image/logo.jpg';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <div style={{ position: 'relative' }}>
      <Nav defaultActiveKey="/home" style={{ display: 'flex', margin: 19, position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'flex-start', flex: '0 1 auto' }}>
          <Image 
            src={logo} 
            rounded 
            style={{ marginLeft: 100, marginRight: 400 }}
          />
        </div>

        <Nav.Item>
          <Nav.Link href="/home" style={{ marginRight: 40, textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link style={{ marginRight: 40, textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>Top Sales</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link style={{ marginRight: 40, textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>Collection</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link style={{ marginRight: 40, textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>Our Blog</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link style={{ marginRight: 40, textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>About Us</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link style={{ marginLeft: 180, textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>Sign Up</Nav.Link>
        </Nav.Item>

        <div style={{ backgroundColor: 'black', border: '1px solid black', padding: 12, borderRadius: '40px', display: 'inline-block', marginTop: -10, marginLeft: 40 }}>
          <Nav.Item>
            <Nav.Link style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
              Connect Wallet
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
     
      
      {/* <div style={{
        position: 'absolute',
        top: '150%',
        left: '50%',
        width: '100%',
        height: '100%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
      }}>

        <div style={{
          position: 'absolute',
          top: 0,
          left: '5%',
          width: '1px',
          height: '100%',
          backgroundColor: '#E8E9EA',
          transform: 'translateX(-50%)',
      
        }}/>

        <div style={{
          position: 'absolute',
          left: 5,
          top: '50%',
          width: '100%',
          height: '2px',
          backgroundColor: '#E8E9EA',
          transform: 'translateY(50%)',
        }}/>
      </div> */}

    </div>
  );
}

export default NavBar;

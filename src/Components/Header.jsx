import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

    
    function Header() {
      return (
        <Navbar expand="lg" className="" style={{background:'black'}}>
        {/* <img style={{height:'80px',width:'80px'}} src=""alt="" /> */}
        <Navbar.Brand href="/" className='text-light ms-3'>Education</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-5" >
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>  
                      <h6 className='fw-bold me-4'>Home</h6>
                      </Link>
                    <Link to={'/'} style={{textDecoration:'none',color:'white'}}>  
                      <h6 className='fw-bold me-4'>Service</h6>
                      </Link>
                        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
                            <h6 className='fw-bold me-4'>About</h6>
                            </Link>
                       <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
                         <h6 className='fw-bold me-4'>Login</h6>
                         </Link>

          </Nav>
        </Navbar.Collapse>
    </Navbar>
      )
    }
    
    export default Header

    
    
    
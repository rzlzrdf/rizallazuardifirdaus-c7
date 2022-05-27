import React from 'react'
import { Navbar, Container, Nav, Col, Row } from 'react-bootstrap'
import style from '../../styles/FooterBar.module.css'
import { GoVerified } from "react-icons/go";

const FooterBar = () => {
  return (
      
    <Navbar  expand="lg" variant='light' className={' '+ style.footer } >
        <Container>
        <h6 className='text-light my-auto fw-light'>Challenge 7</h6>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav className={'ms-auto gap-1'}>
                <Nav.Item className={'my-auto text-light fw-light'} href="#">Developed by Rizal Lazuardi Firdaus <GoVerified className='my-auto' /></Nav.Item>
                {/* <Nav.Item className={'my-auto text-white'} href="#">Frontend Javascript 2/></Nav.Item> */}
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default FooterBar
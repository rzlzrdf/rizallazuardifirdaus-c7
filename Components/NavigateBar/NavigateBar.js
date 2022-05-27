import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import Link from 'next/link'
import style from '../../styles/NavigateBar.module.css'


import { GiWheat } from 'react-icons/gi';


const NavigateBar = () => {
  return (
    <div className='sticky-lg-top shadow shadow-sm'>
        <Navbar variant='dark' expand="lg" className={style.nav + ' bg-grandient'}>
          <Container>
            {/* <Navbar.Brand href="/"><GiWheat className={style.logo + ''}/></Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto gap-2">
              <Link href="/"><Nav.Link href='/'>Home</Nav.Link></Link>
                <Link href="/input"><Nav.Link href="/input">Input</Nav.Link></Link>
                <Link href="/chart"><Nav.Link href="/chart">Chart</Nav.Link></Link>
                <Link href="/download"><Nav.Link href="/download">Download</Nav.Link></Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default NavigateBar
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbarr = () => {
  return (
    <>
    <Navbar className='navbar'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
            {/* <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/about'>About</Link></Nav.Link>
            <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      
      
    </>
  )
}

export default Navbarr

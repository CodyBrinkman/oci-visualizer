import React, {Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap'

class Navigation extends Component {


  render() {

    return (
        <Navbar bg='light' variant='light' expand='lg'>
          <Navbar.Brand><img
              alt=""
              src={require('../images/oci_logo.png')}
              width="60"
              height="40"
              className="d-inline-block align-top"
            />{' '}</Navbar.Brand>
            <Nav className='mr-auto'>
              <Nav.Link href='/' eventKey='architecture'>Architecture</Nav.Link>
              <Nav.Link href='/identity' eventKey='identity'>Identity</Nav.Link>
              <Nav.Link href='/budgets' eventKey='budgets'>Budgets</Nav.Link>
              <Nav.Link href='/announcements' eventKey='announcements'>Announcements</Nav.Link>
              <Nav.Link href='/summary' eventKey='summary'>Summary</Nav.Link>
            </Nav>
        </Navbar>

    )

  }
}

export default Navigation

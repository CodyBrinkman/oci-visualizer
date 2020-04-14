import React, {Component} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

class Header extends Component {


  render() {

    return (
      <Jumbotron fluid>
        <Container>
          <h1>{this.props.title}</h1>
          <br/>
          <h4>Tenancy: {this.props.tenancy}</h4>
          {
            this.props.isArch ? (
              <h4>Compartment: {this.props.compartment}</h4>
            ) : <div></div>
          }
        </Container>
      </Jumbotron>

    )

  }
}

export default Header

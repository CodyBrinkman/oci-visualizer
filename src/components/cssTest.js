import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class CssTest extends Component {

  render() {

    let absoluteWrapper = {
      position: 'absolute',
      left: '0',
      right: '0'
    }

    let test2 = {
      width: '75%',
      height: '100px',
      border: 'solid 1px red',
      margin: 'auto',
    }


    return (

      <div>
        <div style={absoluteWrapper}>
           <Container>
            <Row className='justify-content-md-center' md='auto' style={{minHeight: '500px'}}>
              <Col md={{span: 'true', offset: 0}} style={{border: '1px solid', minWidth: '200px'}}>
                1 of 3
              </Col>
              <Col md={{span: 'true', offset: 1}}  style={{border: '1px solid', minWidth: '200px'}}>
                2 of 3
              </Col>
              <Col md={{span: 'true', offset: 1}} style={{border: '1px solid', minWidth: '200px'}}>
                3 of 3
              </Col>
            </Row>
           </Container>
         </div>

        <div style={test2}>
        </div>

       </div>
   )

  }

}

export default CssTest

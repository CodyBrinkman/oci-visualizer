import React, {Component} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class Total extends Component {

  render() {

    //console.log('nat', this.props.data)

    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.id}>
          {this.props.total.type}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.id}>
          <Card.Body>
            {
                Object.entries(this.props.total).map(([key, value], id) => {
                  return <div key={id}><b>{key}: </b>{value.toString()}</div>
                })
            }
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )

  }

}

export default Total

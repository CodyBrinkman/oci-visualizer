import React, {Component} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class DynamicGroup extends Component {

  render() {

    //console.log('nat', this.props.data)

    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.id}>
          {this.props.dg.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.id}>
          <Card.Body>
            <div><b>id: </b>{this.props.dg.id}</div>
            <div><b>description: </b>{this.props.dg.description}</div>
            <div><b>Matching Rule: </b>{this.props.dg.matching_rule}</div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )

  }

}

export default DynamicGroup

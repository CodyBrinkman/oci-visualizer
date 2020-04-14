import React, {Component} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class Group extends Component {

  render() {

    //console.log('nat', this.props.data)

    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.id}>
          {this.props.group.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.id}>
          <Card.Body>
            <div><b>id: </b>{this.props.group.id}</div>
            <div><b>users: </b>{this.props.group.users}</div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )

  }

}

export default Group

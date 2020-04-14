import React, {Component} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class Provider extends Component {

  render() {

    //console.log('nat', this.props.data)

    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.id}>
          {this.props.provider.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.id}>
          <Card.Body>
            {
                Object.entries(this.props.provider).map(([key, value], id) => {
                  return (
                    typeof value === 'object' ?
                    (<div key={id}>
                      <b>Group Maps:</b>
                      <ul>
                      {
                      value.map((map, id) => {
                        return <li key={id}>{map}</li>
                      })
                      }
                      </ul>
                      </div>)
                     : (<div key={id}><b>{key}</b>: {value.toString()}</div>)
                  )
                })
            }
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )

  }

}

export default Provider

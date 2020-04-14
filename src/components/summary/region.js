import React, {Component} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class Region extends Component {

  render() {

    //console.log('nat', this.props.region.summary)

    return (
      <div>
        {
          this.props.region.summary ?
          this.props.region.summary.map((el, id) => {
            return (
              <Card key={id}>
                <Accordion.Toggle as={Card.Header} eventKey={id}>
                  {el.type}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={id}>
                  <Card.Body>
                    {
                        Object.entries(el).map(([key, value], id) => {
                          return <div key={id}><b>{key}: </b>{value.toString()}</div>
                        })
                    }
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            )

          }) : <div>None</div>
        }
      </div>
    )

  }

}

export default Region

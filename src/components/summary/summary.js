import React, {Component} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Tab from 'react-bootstrap/Tab'
import {Nav} from 'react-bootstrap'
import Total from './total'
import Region from './region'
import Header from '../header'

class Summary extends Component {

  render() {

    //console.log('sum', this.props.data[0].summary)

    return (
      <div>
        <Header title='Summary' tenancy={this.props.tenancy} />
        <Tab.Container defaultActiveKey='total'>
            <Nav variant='pills'>
              <Nav.Item>
                <Nav.Link eventKey='total'>Total</Nav.Link>
              </Nav.Item>
              {
                this.props.data[0].summary.data.map((region, id) => {
                  return (
                    <Nav.Item key={id}>
                      <Nav.Link eventKey={region.region}>{region.region}</Nav.Link>
                    </Nav.Item>
                  )
                })
              }
            </Nav>
          <Tab.Content>
            <Tab.Pane eventKey='total'>
              <Accordion>
                {
                  this.props.data[0].summary.total.map((el, id) => {
                    return <Total key={id} total={el} id={id} />
                  })
                }
              </Accordion>
            </Tab.Pane>
              {
                this.props.data[0].summary.data.map((region, id) => {
                  return (
                    <Tab.Pane eventKey={region.region} key={id}>
                    <br/>
                    <h2>Compartment: {region.compartment_name}</h2>
                      <Accordion>
                        <Region region={region}/>
                      </Accordion>
                    </Tab.Pane>
                  )
                })
              }
          </Tab.Content>
        </Tab.Container>
      </div>
    )

  }

}

export default Summary

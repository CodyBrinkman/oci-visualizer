import React, {Component} from 'react'
//import ListGroup from 'react-bootstrap/ListGroup'
//import TabContainer from 'react-bootstrap/TabContainer'
import {Nav} from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import Group from './group'
import User from './user'
import DynamicGroup from './dynamicGroup'
import CostTrackingTag from './costTrackingTag'
import Provider from './provider'
import Accordion from 'react-bootstrap/Accordion'
import Header from '../header'

class Identity extends Component {

  render() {

    //console.log('data', this.props.data[0].data)

    return (
      <div>
        <Header title='Identity' tenancy={this.props.data[0].data.tenancy.name} />
        <Tab.Container defaultActiveKey='groups'>
            <Nav variant='pills'>
              <Nav.Item>
                <Nav.Link eventKey='groups'>Groups</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='users'>Users</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='dynamic_groups'>Dynamic Groups</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='policies'>Policies</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='providers'>Providers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='cost_tracking_tags'>Cost Tracking Tags</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey='groups'>
              <Accordion>
                {
                  this.props.data[0].data.groups.map((group, id) => {
                    return <Group key={id} group={group} id={id}/>
                  })
                }
              </Accordion>
              </Tab.Pane>
              <Tab.Pane eventKey='users'>
              <Accordion>
                {
                  this.props.data[0].data.users.map((user, id) => {
                    return <User key={id} user={user} id={id}/>
                  })
                }
                </Accordion>
              </Tab.Pane>
              <Tab.Pane eventKey='dynamic_groups'>
                <Accordion>
                {
                  this.props.data[0].data.dynamic_groups.map((dg, id) => {
                    return <DynamicGroup key={id} dg={dg} id={id}/>
                  })
                }
                </Accordion>
              </Tab.Pane>
              <Tab.Pane eventKey='policies'>
                None
              </Tab.Pane>
              <Tab.Pane eventKey='providers'>
                <Accordion>
                {
                  this.props.data[0].data.providers.map((provider, id) => {
                    return <Provider key={id} provider={provider} id={id}/>
                  })
                }
                </Accordion>
              </Tab.Pane>
              <Tab.Pane eventKey='cost_tracking_tags'>
                <Accordion>
                {
                  this.props.data[0].data.cost_tracking_tags.map((costTag, id) => {
                    return <CostTrackingTag key={id} costTag={costTag} id={id}/>
                  })
                }
                </Accordion>
              </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
      </div>
    )

  }
}

export default Identity

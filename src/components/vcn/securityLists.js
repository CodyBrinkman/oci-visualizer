import React, {Component} from 'react'
import {Popover, OverlayTrigger} from 'react-bootstrap'
import FigureDisplay from '../figureDisplay'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class SecurityLists extends Component {

  addOne = (input) => {
    return input+1
  }

  popover = (info, name) => {
    //console.log("info", info)
    return (<Popover id="popover-basic" style={{maxWidth: '100%'}}>
      <Popover.Title as="h3" style={{background: 'black', color: 'white'}}>{name}</Popover.Title>
      <Popover.Content style={{background: 'lightgrey'}}>
        {
          Object.entries(info).map(([key,value], id) => {
            return (
                typeof value === 'object' ?
                (<div key={id}></div>)
                 : (<div key={id}><b>{key}</b>: {value.toString()}</div>)
            )
          })
        }
        <b>sec_lists:</b>
        {
          info.sec_rules.map((sr, id) => {
            return (
              <Accordion key={id}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey={id}>
                    {this.addOne(id)}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={id}>
                    <Card.Body>
                      {
                          Object.entries(sr).map(([key, value], id) => {
                            return <div key={id}><b>{key}: </b>{value.toString()}</div>
                          })
                      }
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            )
          })
        }
      </Popover.Content>
    </Popover>)
  }

  render() {

    //console.log('sl', this.props.sl)

    const securityList = this.props.securityLists.filter((sl=>sl.name===this.props.sl))[0]
    //console.log('list', securityList)


    return (
        <OverlayTrigger trigger='click' placement='left' overlay={this.popover(securityList, 'Security List')}>
          <div>
            <FigureDisplay image={'securitylists.png'} caption={this.props.sl} />
          </div>
        </OverlayTrigger>
    )

  }

}

export default SecurityLists

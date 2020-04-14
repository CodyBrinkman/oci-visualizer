import React, {Component} from 'react'
import {Popover, OverlayTrigger} from 'react-bootstrap'
import FigureDisplay from '../figureDisplay'

class DhcpOption extends Component {

  popover = (info, name) => {
    //console.log("info", info)
    return (<Popover id="popover-basic" style={{maxWidth: '100%'}}>
      <Popover.Title as="h3" style={{background: 'black', color: 'white'}}>{name}</Popover.Title>
      <Popover.Content style={{background: 'lightgrey'}}>
        {
          Object.entries(info).map(([key,value], id) => {
            return (
                typeof value === 'object' ?
                (<div key={id}>
                  <b>options</b>:
                  {
                    value.map((opt, id2) => {
                      return <li key={id2}>{opt}</li>
                    })
                  }
                </div>)
                 : (<div key={id}><b>{key}</b>: {value.toString()}</div>)
            )
          })
        }
      </Popover.Content>
    </Popover>)
  }

  render() {

    //console.log('dhcp_option', this.props.data)

    return (
      <div>
        {
          this.props.data.map((dhcp, id) => {
            return (
              <div key={id}>
                <OverlayTrigger trigger='click' placement='left' overlay={this.popover(dhcp, 'DHCP Option')}>
                <div>
                  <FigureDisplay image={'dhcp.png'} caption={dhcp.name} />
                </div>
                </OverlayTrigger>
            </div>
            )
          })
        }
      </div>
    )

  }

}

export default DhcpOption

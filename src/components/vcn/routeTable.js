import React, {Component} from 'react'
import {Popover, OverlayTrigger} from 'react-bootstrap'
import FigureDisplay from '../figureDisplay'


class RouteTable extends Component {

  add1 = (num) => {
    return num + 1
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
                (<div key={id}>
                  <b>route rules</b>:
                  {
                    value.map((rr, id2) => {
                      return (<div key={id2}>
                        {this.add1(id2)}
                            <li><b>network entity id</b>: {rr.network_entity_id}</li>
                            <li><b>destination</b>: {rr.destination}</li>
                            <li><b>desc</b>: {rr.desc}</li>
                        </div>)
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

    //console.log('route_table', this.props.data)

    return (
      <div>
        {
          this.props.data.map((rt, id) => {
            return (
              <div key={id}>
                <OverlayTrigger trigger='click' placement='left' overlay={this.popover(rt, 'Route Table')}>
                  <div>
                    <FigureDisplay image={'routetables.png'} caption={rt.name} />
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

export default RouteTable

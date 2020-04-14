import React, {Component} from 'react'
import {Popover, OverlayTrigger} from 'react-bootstrap'


class DRGAttached extends Component {

  popover = (info, name) => {
    //console.log("info", info)
    return (<Popover id="popover-basic" style={{maxWidth: '100%'}}>
      <Popover.Title as="h3" style={{background: 'black', color: 'white'}}>{name}</Popover.Title>
      <Popover.Content style={{background: 'lightgrey'}}>
        {
          Object.entries(info).map(([key,value], id) => {
            return (
                typeof value === 'object' ? (<div key={id}></div>) : (<div key={id}><b>{key}</b>: {value.toString()}</div>)
            )
          })
        }
      </Popover.Content>
    </Popover>)
  }

  render() {

    //console.log('drg_attached', this.props.data)

    return (
      <div>
        {
          this.props.data.map((drg, id) => {
            return (
              <div key={id}>
                <OverlayTrigger trigger='click' placement='right' overlay={this.popover(drg, 'Dynamic Routing Gateway (DRG)')}>
                  <img src={require('../../images/drg.png')} alt='none'/>
                </OverlayTrigger>
                {drg.name}
            </div>
            )
          })
        }
      </div>
    )

  }

}

export default DRGAttached

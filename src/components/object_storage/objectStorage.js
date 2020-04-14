import React, {Component} from 'react'
import {Popover, OverlayTrigger} from 'react-bootstrap'
import FigureDisplay from '../figureDisplay'

class ObjectStorage extends Component {

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

    return (

      <div style={{paddingLeft: '10px'}}>
        <OverlayTrigger trigger='click' placement='right' overlay={this.popover(this.props.data, 'Object Storage')}>
          <div>
            <FigureDisplay image={'object_storage.png'} caption={this.props.data.name} />
          </div>
        </OverlayTrigger>
      </div>

    )

  }

}

export default ObjectStorage

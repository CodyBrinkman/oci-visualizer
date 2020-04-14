import React, {Component} from 'react'
import {Popover, OverlayTrigger} from 'react-bootstrap'
import FigureDisplay from '../figureDisplay'

class SGW extends Component {

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

    //console.log('sgw', this.props.data)

    return (
      <div>
        {
          this.props.data.map((sgw, id) => {
            return (
              <div key={id}>
                <OverlayTrigger trigger='click' placement='right' overlay={this.popover(sgw, 'Service Gateway')}>
                  <div>
                    <FigureDisplay image={'sgw.png'} caption={sgw.name} />
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

export default SGW

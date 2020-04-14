import React, {Component} from 'react'
//import Instance from './instance'
import Image from './image'
import BootNotAttached from './bootNotAttached'
import {Popover, OverlayTrigger} from 'react-bootstrap'

class Compute extends Component {

  popover = (info) => {
    //console.log("info", info)
    return (<Popover id="popover-basic" style={{maxWidth: '100%'}}>
      <Popover.Title as="h3" style={{background: 'black', color: 'white'}}>{info.desc}</Popover.Title>
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

    //console.log("compute", this.props.data)

    return (
      <div>
      {/*
        <div>
          <b>Instances</b>
          <ul>
            {this.props.data.instances ? (
              this.props.data.instances.map(function(instance, i) {
                return <Instance key={i} data={instance} />
              })
            ) : (<div>No Instances</div>)
            }
          </ul>
        </div>
        */}
        <div>
            {this.props.data.images ? (
              this.props.data.images.map((image, id) => {
                return (
                <div key={id}>
                  <OverlayTrigger trigger='click' placement='right' overlay={this.popover(image)}>
                    <div><Image data={image} /></div>
                  </OverlayTrigger>
                </div>
              )
              })
            ) : (<div></div>)
            }
        </div>
        <div>
            {this.props.data.boot_not_attached ? (
              this.props.data.boot_not_attached.map((bna, id) => {
                return (
                  <div key={id}>
                    <OverlayTrigger trigger='click' placement='right' overlay={this.popover(bna)}>
                      <div><BootNotAttached data={bna} /></div>
                    </OverlayTrigger>
                  </div>
                )
              })
            ) : (<div></div>)
            }
        </div>
      </div>
    )

  }

}

export default Compute

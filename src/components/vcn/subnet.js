import React, {Component} from 'react'
import {Popover, OverlayTrigger} from 'react-bootstrap'
import Instance from '../compute/instance'
import DbSystem from '../database/dbSystem'
import SecurityLists from './securityLists'

class Subnet extends Component {

  getAD = (instance) => {
    let index = this.props.ADs.findIndex(ad => ad.name===instance.availability_domain)
    switch(index) {
      case 1:
        return 'center'
      case 2:
        return 'right'
      default:
        return 'left'
    }
  }

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

    //console.log('subnet', this.props.data)
    //console.log('subnet', this.props.routeTables)

    //const instances = this.props.compute.instances.filter(in=>in.)
    let tab = {
      border: '1px dotted red',
      minHeight: '50px'
    }

    return (
      <div>
          <OverlayTrigger trigger='click' overlay={this.popover(this.props.data, 'Subnet')}>
            <div align='right'>
              <img src={require('../../images/vcn-icon.png')} alt='none' width='50' height='55'/>
              {this.props.data.name} {this.props.data.cidr_block}
            </div>
          </OverlayTrigger>
        <div style={tab}>
              {
                typeof this.props.compute!=='undefined' && typeof this.props.compute.instances !== 'undefined' ? (
                <div>
                {
                this.props.compute.instances.map((instance,i) => {
                  return (
                    <div key={i}>
                      {
                        instance.vnic.map((vnic, id) => {
                        return vnic.details.subnet_id === this.props.data.id ?
                          (
                            <div key={id} style={{maxWidth: '60px', paddingLeft: '10px'}}>
                              <OverlayTrigger trigger='click' placement='right' overlay={this.popover(instance, 'Instance')}>
                                <div align={this.getAD(instance)}><Instance data={instance} /></div>
                              </OverlayTrigger>
                            </div>
                          )
                          : <div key={id}></div>
                        })
                      }
                    </div>
                  )
                })}
                  <div>
                    {
                      this.props.database.db_system ? (
                      this.props.database.db_system.map((db, id) => {
                        return db.data_subnet_id === this.props.data.id ? (
                          <div key={id} align={this.getAD(db)}><DbSystem data={db} /></div>
                        ) : <div key={id}></div>
                      })
                    ) : (<div></div>)
                    }
                  </div>
                </div>
              ) : (<div></div>)
              }
        </div>
        <div align='right'>
            {
              this.props.data.security_list.map((sl, id) => {
                return (
                  <div key={id} style={{maxWidth: '80px'}}>
                    <SecurityLists sl={sl} securityLists={this.props.securityLists} />
                  </div>
                )
              })
            }
        </div>
      </div>
    )

  }

}

export default Subnet

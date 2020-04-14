import React, {Component} from 'react'
import IGW from './igw'
import SGW from './sgw'
import NAT from './nat'
import DRGAttached from './drgAttached'
import LocalPeering from './localPeering'
import Subnet from './subnet'
//import SecurityLists from './securityLists'
import SecurityGroups from './securityGroups'
import RouteTable from './routeTable'
import DhcpOption from './dhcpOption'
import Table from 'react-bootstrap/Table'
import {Popover, OverlayTrigger} from 'react-bootstrap'

class VCN extends Component {

  checkArrHasData = (arr) => {
    return !(Array.isArray(arr) && arr.length === 0)
  }

  numCols = () => {
    return 3
  }

  popover = (info, name) => {
    //console.log("info", info)
    return (<Popover id="popover-basic" placement='left' style={{maxWidth: '100%'}}>
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

    //console.log('vcn', this.props.data)

    let securityLists = this.props.data.data.security_lists

    let wrapper = {
      margin: 'auto',
      width: '98%',
      maxWidth: '98%',
      border: '1px dotted',
    }

    let left = {
      float: 'left',
      width: '10%',
      display: 'inline-block',
      boxSizing: 'border-box',
      paddingLeft: '5px',
      paddingRight: '5px'
    }

    let right = {
      float: 'right',
      width: '10%',
      display: 'inline-block',
      boxSizing: 'border-box',
      paddingLeft: '5px',
      paddingRight: '5px'
    }

    let middle = {
      width: '80%',
      display: 'inline-block',
      boxSizing: 'border-box'
    }

    return (
      <div>
        <div align='right' style={{fontSize: "22px", padding: '10px'}}>
        <OverlayTrigger trigger='click' overlay={this.popover(this.props.data, 'Virtual Cloud Network (VCN)')}>
          <div>
            <img src={require('../../images/vcn-icon.png')} alt='none'/>{this.props.data.display_name} {this.props.data.cidr_block}
          </div>
        </OverlayTrigger>
        </div>
        <div style={wrapper}>
            <div style={left}>
            <br/>
            {
              this.checkArrHasData(this.props.data.data.drg_attached) ? (
                <DRGAttached data={this.props.data.data.drg_attached} />
              ) : (<span></span>)
            }
            <br/>
            {
              this.checkArrHasData(this.props.data.data.igw) ? (
                <IGW data={this.props.data.data.igw} />
              ) : (<span></span>)
            }
            <br/>
            {
              this.checkArrHasData(this.props.data.data.sgw) ? (
                <SGW data={this.props.data.data.sgw} />
              ) : (<span></span>)
            }
            </div>
            <fieldset style={middle}>
              <Table bordered hover>
                <thead>
                  <tr>
                    {
                      this.props.ADs.map(function(ad, i) {
                        return <th key={i}>{ad.name}</th>
                      })
                    }
                  </tr>
                </thead>
                <tbody>
                {
                  this.props.data.data.subnets.map((subnet, i) => {
                    return (
                      <tr key={i}>
                        <td colSpan={this.numCols()}>
                          <Subnet ADs={this.props.ADs} data={subnet} compute={this.props.compute} database={this.props.database} securityLists={securityLists}/>
                        </td>
                      </tr>
                    )
                  })
                }
                </tbody>
              </Table>
              {/*
              <div>
                <b>Internet Gateways</b>
                <ul>
                  {
                    this.props.data.data.igw.map(function(igw, i) {
                      return <IGW key={i} data={igw} />
                    })
                  }
                </ul>
              </div>
              */}
              {/*
              <div>
                <b>Service Gateways</b>
                <ul>
                  {
                    this.props.data.data.sgw.map(function(sgw, i) {
                      return <SGW key={i} data={sgw} />
                    })
                  }
                </ul>
              </div>
              */}
              <div>
                <ul>
                  {
                    this.props.data.data.nat.map(function(nat, i) {
                      return <NAT key={i} data={nat} />
                    })
                  }
                </ul>
              </div>
            {/*
              <div>
                <b>DRG Attached</b>
                <ul>
                  {
                    this.props.data.data.drg_attached.map(function(drg, i) {
                      return <DRGAttached key={i} data={drg} />
                    })
                  }
                </ul>
              </div>
              */}
              <div>
                <ul>
                  {
                    this.props.data.data.local_peering.map(function(lp, i) {
                      return <LocalPeering key={i} data={lp} />
                    })
                  }
                </ul>
              </div>
              {/*
              <div>
                <b>Subnets</b>
                  {
                    this.props.data.data.subnets.map(function(subnet, i) {
                      return <Subnet key={i} data={subnet} compute={this.props.compute}/>
                    }, this)
                  }
              </div>
              */}
              {/*
              <div>
                <b>Security Lists</b>
                <ul>
                  {
                    this.props.data.data.security_lists.map(function(sl, i) {
                      return <SecurityLists key={i} data={sl} />
                    })
                  }
                </ul>
              </div>
              */}
              <div>
                <ul>
                  {
                    this.props.data.data.security_groups.map(function(sg, i) {
                      return <SecurityGroups key={i} data={sg} />
                    })
                  }
                </ul>
              </div>
              <br/>
            </fieldset>
            <div style={right}>
              <div>
              <br/>
                {
                  this.checkArrHasData(this.props.data.data.route_tables) ? (
                    <RouteTable data={this.props.data.data.route_tables} />
                  ) : (<span></span>)
                }
              </div>
              <br />
              <div>
                  {
                    this.checkArrHasData(this.props.data.data.dhcp_options) ? (
                      <DhcpOption data={this.props.data.data.dhcp_options} />
                    ) : (<span></span>)
                  }
              </div>
            </div>
        </div>
      </div>
    )

  }

}

export default VCN

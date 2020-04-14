import React, {Component} from 'react'
import Region from './region'
import Tab from 'react-bootstrap/Tab'
import {Nav} from 'react-bootstrap'
import Header from '../components/header'

class First extends Component {

  render() {

    //console.log("all data", this.props.data)

    //Could also pass AD in as a prop from first
    const identityData = this.props.data.filter(item=>item.type==='identity')[0].data
    //const ADs = this.props.data.filter(item=>item.type==='identity')[0].data.availability_domains
    const ADs = identityData.availability_domains

    const regionArr = this.props.data.filter(item=>item.type==='region')

    let defaultRegion = 'us-phoenix-1'

    return (

      <div>
        <Header title='Architecture' tenancy={identityData.tenancy.name} isArch={'true'} compartment={identityData.compartments[0].name}/>
        <Tab.Container defaultActiveKey={defaultRegion}>
          <Nav variant='pills'>
            {
              regionArr.map((region, id) => {
                return (
                  <Nav.Item key={id}>
                    <Nav.Link eventKey={region.region}>{region.region}</Nav.Link>
                  </Nav.Item>
                )
              })
            }
          </Nav>
          <Tab.Content>
            {
              regionArr.map((region, id) => {
                return (
                  <Tab.Pane style={{paddingLeft: '10px', paddingRight: '10px'}} eventKey={region.region} key={id}>
                    <Region key={id} data={region} ADs={ADs} />
                  </Tab.Pane>
                )
              })
            }
          </Tab.Content>
        </Tab.Container>
      </div>
    )

  }

}

export default First

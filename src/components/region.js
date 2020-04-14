import React, {Component} from 'react'
import VCN from './vcn/vcn'
import ObjectStorage from './object_storage/objectStorage'

class Region extends Component {

  checkExists = (arr) => {
    return arr ? (arr) : ('')
  }

  render() {

    //console.log(this.props.data.region + " data", this.props.data)

    const myADs = this.props.ADs.filter(ad=>ad.region_name===this.props.data.region)

    let field = {
      border: '5px solid'
    }

    return (
      <div>
        <div align='right' style={{fontSize: '30px'}}><b>Region: {this.props.data.region}</b></div>
        <fieldset style={field}>
          {/*<legend align={'right'} style={{fontSize: "30px"}}><b>Region: {this.props.data.region}</b></legend>*/}
          <br/>
          {this.props.data.data[0].network ? (
            this.props.data.data[0].network.vcn.map((vcn, i) => {
              return <VCN key={i} data={vcn} ADs={myADs} compute={this.checkExists(this.props.data.data[0].compute)} database={this.checkExists(this.props.data.data[0].database)}/>
            })
          ) : (<div>No Network</div>)
          }
          {/*
          <br/>
          <h2><b>Compute:</b></h2>
          {this.props.data.data[0].compute ? (
            <Compute data={this.props.data.data[0].compute} />
          ) : (<div>No Compute</div>)
          }
          */}
          {/*
          <br/>
          <h2><b>Database:</b></h2>
          {this.props.data.data[0].database ? (
            <Database data={this.props.data.data[0].database} />
          ) : (<div>No Database</div>)
          }
          <br/>
          */}
          <div style={{display: 'flex'}}>
            {this.props.data.data[0].object_storage ? (
              this.props.data.data[0].object_storage.map(function(oj, i) {
                return <ObjectStorage key={i} data={oj} />
              })
            ) : (<div></div>)
            }
            </div>
          <br/>
        </fieldset>
        <br/>
      </div>
    )

  }

}

export default Region

import React, {Component} from 'react'

class LocalPeering extends Component {

  render() {

    //console.log('local_peering', this.props.data)

    return (
      <li>{this.props.data.name}</li>
    )

  }

}

export default LocalPeering

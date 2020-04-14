import React, {Component} from 'react'

class NAT extends Component {

  render() {

    //console.log('nat', this.props.data)

    return (
      <li>{this.props.data.name}</li>
    )

  }

}

export default NAT

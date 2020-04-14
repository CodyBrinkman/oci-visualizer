import React, {Component} from 'react'

class SecurityGroups extends Component {

  render() {

    //console.log('security_groups', this.props.data)

    return (
      <li>{this.props.data.name}</li>
    )

  }

}

export default SecurityGroups

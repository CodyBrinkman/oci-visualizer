import React, {Component} from 'react'
import FigureDisplay from '../figureDisplay'

class Instance extends Component {

  render() {

    return (
        <FigureDisplay image={'vm.png'} caption={this.props.data.name} />
    )

  }

}

export default Instance

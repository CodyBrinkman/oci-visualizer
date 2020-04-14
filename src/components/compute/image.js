import React, {Component} from 'react'

class Image extends Component {

  render() {

    return (
      <div>
        <img src={require('../../images/image.png')} alt='none' width='60' heigh='60'/>
        {this.props.data.desc}
      </div>
    )

  }

}

export default Image

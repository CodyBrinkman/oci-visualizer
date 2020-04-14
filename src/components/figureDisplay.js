import React, {Component} from 'react'
import Figure from 'react-bootstrap/Figure'

class FigureDisplay extends Component {

  render() {

    return (
        <Figure>
          <Figure.Image
            src={require('../images/' + this.props.image)}
            alt='none'
            width='60px'
            height='60px'/>
            <Figure.Caption>
              {this.props.caption}
            </Figure.Caption>
        </Figure>

    )

  }

}

export default FigureDisplay

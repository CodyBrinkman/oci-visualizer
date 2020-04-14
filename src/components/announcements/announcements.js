import React, {Component} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Announcement from './announcement'
import Header from '../header'

class Announcements extends Component {

  render() {

    return (
      <div>
        <Header title='Announcements' tenancy={this.props.tenancy} />
        <Accordion>
        {
          this.props.data[0].data.map((a, id) => {
            return <Announcement key={id} a={a} id={id} />
          })
        }
        </Accordion>
      </div>
    )

  }

}

export default Announcements

import React, {Component} from 'react'
import DbSystem from './dbSystem'

class Database extends Component {

  render() {

    //console.log("database", this.props.data)

    return (

      <div>
        <b>DB Systems</b>
        <ul>
          {this.props.data.db_system ? (
            this.props.data.db_system.map(function(db, i) {
              return <DbSystem key={i} data={db} />
            })
          ) : (<li>No DB System</li>)
          }
        </ul>
      </div>

    )

  }

}

export default Database

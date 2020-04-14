import React, {Component} from 'react'
import Header from '../header'

class Budgets extends Component {

  render() {

    return (
      <div>
      <Header title='Budgets' tenancy={this.props.tenancy} />
      No Budgets
      </div>
    )

  }

}

export default Budgets

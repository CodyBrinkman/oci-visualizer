import React, {Component} from 'react';
import './App.css';
import Data from './data/Apple_Compartment_All_Resources.json'
import Compartment from './components/compartment'
import Identity from './components/identity/identity'
import Budgets from './components/budgets/budgets'
import Announcements from './components/announcements/announcements'
import Summary from './components/summary/summary'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Navigation from './components/navigation'
import CssTest from './components/cssTest'

class App extends Component {

  render() {

    console.log('all data', Data)

    let tenancy = Data.filter(item=>item.type==='identity')[0].data.tenancy.name

    return (
      <div>
      <Navigation />
        <Router>
          <div>
            <Route exact path='/' render={() => <Compartment data={Data}/>} />
            <Route path='/identity' render={() => <Identity data={Data.filter(item=>item.type==='identity')}/>} />
            <Route path='/budgets' render={() => <Budgets data={Data.filter(item=>item.type==='budgets')} tenancy={tenancy}/>} />
            <Route path='/announcements' render={() => <Announcements data={Data.filter(item=>item.type==='announcement')} tenancy={tenancy} />} />
            <Route path='/summary' render={() => <Summary data={Data.filter(el=>el.summary)} tenancy={tenancy}/>} />
            <Route path='/test' render={() => <CssTest />} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;

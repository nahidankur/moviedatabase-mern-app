import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AddMovie from './components/AddMovie'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import UpdateMovie from './components/UpdateMovie'


const App = ()=>{
    return(
<Router>
  <Navbar />
  <br/>
  <div className='container'>
    <Route path='/' exact component={Dashboard} />
    <Route path='/update/:id' component={UpdateMovie} />
    <Route path='/add' component={AddMovie} />
  </div>
</Router>
    )
}
export default App
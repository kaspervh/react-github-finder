import React, {useState, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'

import './App.css';

function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])
  const [alert, setAlert] = useState(null)


  const searchUsers = async (text) =>{
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    setUsers(res.data.items)
  }

  const searchUser = async (text) =>{
    const res = await axios.get(`https://api.github.com/users/${text}`);
    setUser(res.data.items)
  }
  
  const clearUsers = () => {
    setUsers([])
  }

  const callAlert = (msg, type) => {
    setAlert({alert: {msg: msg, type: type}})
    setTimeout(() => { 
      setAlert(null)
    }, 5000)
  }

  return (
    <Router>
      <div className="App">
        <Navbar title='Github finder' icon='fab fa-github'/>

        <div className="container">
          <Alert alert={alert} /> 
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={users.length > 0 ? true : false} alert={callAlert}/>
                <Users users={users}/>
              </Fragment>
            )}/>
            <Route excact path='/about' component={About} />
            <Route exact path='/user/:login' render={props => (
              <Fragment>
                <User {...props} searchUser={searchUser} user={user}/>
              </Fragment>
            )}/>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;

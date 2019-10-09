import React, { Component } from 'react';
import './App.css';
// , Redirect 
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
// import tokenService from '../../utils/tokenService';
import NavBar from '../../Components/NavBar/NavBar';
import FormAction from '../../Components/Form/Form';
import ScoreBoard from '../../Components/ScoreBoard/ScoreBoard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      activity: []
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  updateActions = (act , idx) => {
    this.setState(
      {
        activity:[...act]
      });
      console.log(idx);
    return fetch(`/api/updateAction/${idx}`, {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(act)
    }).then(res=>{res.json()})
  }

render() {
  return (
    <div>
      <h1>Bargain</h1>
      <Switch>
        <Route exact path='/' render={() =>
          <>
            <NavBar 
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
            {this.state.user ? 
            <><ScoreBoard />
            <FormAction 
            user = {this.state.user}
            updateActions = {this.updateActions}
            />
            </> 
            : <h1>Log In</h1>}
          </>
          }/>
        <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        
      </Switch>
        
    </div>
  );
}
}



export default App;

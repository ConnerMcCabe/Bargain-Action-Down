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
      activity: [],
      total: 0
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  updateActions = async (act , idx) => {
    await this.setState(
      {
        activity:[...act]
      });
      await this.SetTotal();
      return fetch(`/api/updateAction/${idx}`, {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(act)
    }).then(res=>{res.json()})
  }
  
  SetTotal() {
    var tots = 0
    this.state.activity.map(act => {
      var newscore = act.score.replace('$', '')
      newscore = parseInt(newscore)
      if(newscore)
    {
      tots += newscore;
    }
    })
      this.setState({
        total: tots
      })
  }


render() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() =>
          <>
            <NavBar 
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
            {this.state.user ? 
            <main>
              <FormAction 
                user = {this.state.user}
                updateActions = {this.updateActions}
              />
            <ScoreBoard 
              total={this.state.total}
            />
            </main> 
            :
            <h1>Log In to Start</h1>}
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

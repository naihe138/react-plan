import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider, connect } from 'react-redux';
import store from './redux/store.js'
import logo from './logo.svg'
import Plan from './components/plan.js'
import Home from './components/home.js'
import Popup from './components/pupop.js'
import TestRouter from './components/testrouter.js'
import Detail from './components/detail.js'
import './App.css'
import './components/comment.css'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       <Provider store={store}>
        <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2 className='App-title'>Welcome to React Plan</h2>
            </div>
            <div>
              <Router history = {history}>
                 <div className="contentBox">
                    <ul className="nav">
                      <li><Link to="/">首页</Link></li>
                      <li><Link to="/plan">计划表</Link></li>
                      <li><Link to="/test">二级路由</Link></li>
                    </ul>
                    <div className="content"> 
                      <Route exact path="/" component={Home}/>
                      <Route path="/plan" component={Plan}/>
                      <Route path="/test" component={TestRouter}/>
                      <Route path="/detail/:id" component={Detail}/>
                    </div>
                </div>
              </Router>
            </div>
            <Popup/>
        </div>
      </Provider>
    );
  }
}

export default App




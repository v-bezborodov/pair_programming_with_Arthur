import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../../logo.svg";



export default class MainPage extends React.Component {

  render() {
    return (
      <>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/app1">Get to the main App</Link>
        </header>
      </>
    )
  }
}

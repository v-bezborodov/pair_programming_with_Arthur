import React from 'react'
import {Route, Switch} from 'react-router-dom'
import MainPage from "../../page/main";
import HomePage from "../../page/home";

export default class MainComponent extends React.Component {

    render() {
        return (
            <div className="main">
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/home" exact component={HomePage}/>
                </Switch>
            </div>
        )
    }
}

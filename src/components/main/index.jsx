import React from 'react'
import {Route, Switch} from 'react-router-dom'
import MainPage from "../../page/main";
import HomePage from "../../page/home";
import HomePage2 from "../../page/home2";
import HomePage3 from "../../page/home3";

export default class MainComponent extends React.Component {

    render() {
        return (
            <div className="main">
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/app1" exact component={HomePage}/>
                    <Route path="/app2" exact component={HomePage2}/>
                    <Route path="/app3" exact component={HomePage3}/>
                </Switch>
            </div>
        )
    }
}

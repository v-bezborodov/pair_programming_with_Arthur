import React from 'react';

import {
    BrowserRouter as Router,
} from "react-router-dom";

import './App.css';
import MainComponent from "../src/components/main";

function App() {
    return (
        <div className="App">
            <Router>
                <MainComponent/>
            </Router>
        </div>
    );
}

export default App;

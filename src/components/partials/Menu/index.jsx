import React from 'react'
import {Link} from 'react-router-dom'


export default class Menu extends React.Component {

    render() {
        return (
            <>
                <div className="menu">
                    <Link to="/">/</Link>
                    <Link to="/app1">App1</Link>
                    <Link to="/app2">App2</Link>
                    <Link to="/app3">App3</Link>
                </div>
            </>
        )
    }
}

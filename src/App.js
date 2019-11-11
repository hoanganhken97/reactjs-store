import React, {Component} from "react";
import logo from './logo.svg';
import "./App.css";

import {
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';

import Home from "./components/Home";
import About from './components/About';
import Detail from './components/Detail';
import Messages from './components/Messages';

class App extends Component {
    render() {
        return (
            // <div >
            <div className="row">

                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <nav class="navbar navbar-default navbar-static-top" role="navigation">
                    <a class="navbar-brand" href="/">Home</a>
                    <ul class="nav navbar-nav">
                        <li class="active">
                            <a href="/messages">Messages</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                </nav>
                <div className="App-intro">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/messages" component={Messages}/>
                        <Route path="/about" component={About}/>
                        <Route path="/detail/:id" component={Detail}/>
                        <Redirect to="/"/>
                    </Switch>
                </div>
                {/*<Home/>*/}

            </div>
        );
    }
}

export default App;

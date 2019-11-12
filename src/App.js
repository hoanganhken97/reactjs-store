import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

import {Route, Link, Switch, Redirect} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Detail from "./components/Detail";
import Messages from "./components/Messages";
import Features from "./components/features/Features"
import Shop from "./components/Shop/Shop";

class App extends Component {
    render() {
        return (
            // <div >
            <div>
                {/* <header className="App-header">
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
                </nav> */}


                <header>
                    <div className="container-menu-desktop">
                        <div className="top-bar">
                            <div className="content-topbar flex-sb-m h-full container">
                                <div className="left-top-bar">
                                    Free shipping for standard order over $100
                                </div>

                                <div className="right-top-bar flex-w h-full">
                                    <a href="#" className="flex-c-m trans-04 p-lr-25">
                                        Help & FAQs
                                    </a>

                                    <a href="#" className="flex-c-m trans-04 p-lr-25">
                                        My Account
                                    </a>

                                    <a href="#" className="flex-c-m trans-04 p-lr-25">
                                        EN
                                    </a>

                                    <a href="#" className="flex-c-m trans-04 p-lr-25">
                                        USD
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="wrap-menu-desktop">
                            <nav className="limiter-menu-desktop container">

                                {/* <a href="#" class="logo">
						<img src="images/icons/logo-01.png" alt="IMG-LOGO">
					</a> */}

                                <div className="menu-desktop">
                                    <ul className="main-menu">
                                        <li className="active-menu">
                                            <a href="index.html">Home</a>
                                            <ul className="sub-menu">
                                                <li><a href="index.html">Homepage 1</a></li>
                                                <li><a href="home-02.html">Homepage 2</a></li>
                                                <li><a href="home-03.html">Homepage 3</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="/shop">Shop</a>
                                        </li>

                                        <li className="label1" data-label1="hot">
                                            <a href="/features">Features</a>
                                        </li>

                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>

                                        <li>
                                            <a href="about.html">About</a>
                                        </li>

                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="wrap-icon-header flex-w flex-r-m">
                                    <div
                                        className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                        <i className="zmdi zmdi-search"></i>
                                    </div>

                                    <div
                                        className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                                        data-notify="2">
                                        <i className="zmdi zmdi-shopping-cart"></i>
                                    </div>

                                    <a href="#"
                                       className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                                       data-notify="0">
                                        <i className="zmdi zmdi-favorite-outline"></i>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                <div className="App-intro">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/shop" component={Shop}/>
                        <Route path="/messages" component={Messages}/>
                        <Route path="/features" component={Features}/>
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

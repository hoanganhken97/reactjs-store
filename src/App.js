import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

import {Route, Link, Switch, Redirect} from "react-router-dom";

import Home from "./components/home/Home";
import About from "./components/About";
import Detail from "./components/Detail";
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
                    <div class="container-menu-desktop">
                        <div class="top-bar">
                            <div class="content-topbar flex-sb-m h-full container">
                                <div class="left-top-bar">
                                    Free shipping for standard order over $100
                                </div>

                                <div class="right-top-bar flex-w h-full">
                                    <a href="#" class="flex-c-m trans-04 p-lr-25">
                                        Help & FAQs
                                    </a>

                                    <a href="#" class="flex-c-m trans-04 p-lr-25">
                                        My Account
                                    </a>

                                    <a href="#" class="flex-c-m trans-04 p-lr-25">
                                        EN
                                    </a>

                                    <a href="#" class="flex-c-m trans-04 p-lr-25">
                                        USD
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="wrap-menu-desktop">
                            <nav class="limiter-menu-desktop container">

                                {/* <a href="#" class="logo">
						<img src="images/icons/logo-01.png" alt="IMG-LOGO">
					</a> */}

                                <div class="menu-desktop">
                                    <ul class="main-menu">
                                        <li class="active-menu">
                                            <a href="index.html">Home</a>
                                            <ul class="sub-menu">
                                                <li><a href="index.html">Homepage 1</a></li>
                                                <li><a href="home-02.html">Homepage 2</a></li>
                                                <li><a href="home-03.html">Homepage 3</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="/shop">Shop</a>
                                        </li>

                                        <li class="label1" data-label1="hot">
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

                                <div class="wrap-icon-header flex-w flex-r-m">
                                    <div
                                        class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                        <i class="zmdi zmdi-search"></i>
                                    </div>

                                    <div
                                        class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                                        data-notify="2">
                                        <i class="zmdi zmdi-shopping-cart"></i>
                                    </div>

                                    <a href="#"
                                       class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                                       data-notify="0">
                                        <i class="zmdi zmdi-favorite-outline"></i>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                <div className="App-intro">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/shop" component={Shop}/>
                        <Route path="/features" component={Features}/>
                        <Route path="/detail/:id" component={Detail}/>
                        <Redirect to="/"/>
                    </Switch>
                </div>
                {/*<Home/>*/}
                <footer className="bg3 p-t-75 p-b-32">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3 p-b-50">
                                <h4 className="stext-301 cl0 p-b-30">
                                    Categories
                                </h4>

                                <ul>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Women
                                        </a>
                                    </li>

                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Men
                                        </a>
                                    </li>

                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Shoes
                                        </a>
                                    </li>

                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Watches
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-sm-6 col-lg-3 p-b-50">
                                <h4 className="stext-301 cl0 p-b-30">
                                    Help
                                </h4>

                                <ul>
                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Track Order
                                        </a>
                                    </li>

                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Returns
                                        </a>
                                    </li>

                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            Shipping
                                        </a>
                                    </li>

                                    <li className="p-b-10">
                                        <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                                            FAQs
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-sm-6 col-lg-3 p-b-50">
                                <h4 className="stext-301 cl0 p-b-30">
                                    GET IN TOUCH
                                </h4>

                                <p className="stext-107 cl7 size-201">
                                    Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018
                                    or call us on (+1)
                                    96 716 6879
                                </p>

                                <div className="p-t-27">
                                    <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                        <i className="fa fa-facebook"></i>
                                    </a>

                                    <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                        <i className="fa fa-instagram"></i>
                                    </a>

                                    <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                        <i className="fa fa-pinterest-p"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3 p-b-50">
                                <h4 className="stext-301 cl0 p-b-30">
                                    Newsletter
                                </h4>

                                <form>
                                    <div className="wrap-input1 w-full p-b-4">
                                        <input className="input1 bg-none plh1 stext-107 cl7" type="text" name="email"
                                               placeholder="email@example.com"/>
                                        <div className="focus-input1 trans-04"></div>
                                    </div>


                                    <div className="p-t-18">
                                        <button
                                            className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="p-t-40">
                            <div className="flex-c-m flex-w p-b-18">
                                <a href="#" className="m-all-1">
                                    <img src="../../images/icons/icon-pay-01.png" alt="ICON-PAY"/>
                                </a>

                                <a href="#" className="m-all-1">
                                    <img src="../../images/icons/icon-pay-02.png" alt="ICON-PAY"/>
                                </a>

                                <a href="#" className="m-all-1">
                                    <img src="../../images/icons/icon-pay-03.png" alt="ICON-PAY"/>
                                </a>

                                <a href="#" className="m-all-1">
                                    <img src="../../images/icons/icon-pay-04.png" alt="ICON-PAY"/>
                                </a>

                                <a href="#" className="m-all-1">
                                    <img src="../../images/icons/icon-pay-05.png" alt="ICON-PAY"/>
                                </a>
                            </div>

                            <p className="stext-107 cl6 txt-center">

                                Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script>
                                All rights reserved | This template is made with <i className="fa fa-heart-o"
                                                                                    aria-hidden="true"></i> by <a
                                href="https://colorlib.com" target="_blank">Colorlib</a>

                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Link, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Detail from "./components/Detail";
import Messages from "./components/Messages";
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
								<a href="shoping-cart.html">Features</a>
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
						<div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
							<i class="zmdi zmdi-search"></i>
						</div>

						<div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="2">
							<i class="zmdi zmdi-shopping-cart"></i>
						</div>

						<a href="#" class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0">
							<i class="zmdi zmdi-favorite-outline"></i>
						</a>
					</div>
				</nav>
			</div>
		</div>
        </header>
        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/about" component={About} />
			  <Route path="/shop" component={Shop} />
            <Route path="/detail/:id" component={Detail} />
            <Redirect to="/" />
          </Switch>
        </div>
        {/*<Home/>*/}
      </div>
    );
  }
}

export default App;

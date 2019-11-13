import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Link, Switch, Redirect } from "react-router-dom";

import Home from "./components/home/Home";
import Detail from "./components/Detail";
import Features from "./components/features/Features";
import Shop from "./components/Shop/Shop";
import BlogDetail from "./components/blog/BlogDetail";
import Blog from "./components/blog/Blog";
import Messages from "./components/Messages";
import Contact from "./components/contact/Contact";
import { connect } from "react-redux";
import { getDataCart } from "./redux/action/cartAction";
import About from "./components/About";
import Footer from "./components/footer/index";
import Header from "./components/header/index";
import { ClipLoader, GridLoader } from "react-spinners";
class App extends Component {
  componentDidMount() {
    this.props.getDataCart();
  }
  render() {
    const { cart, isLoading } = this.props;
    // console.log('cartRouter: ' + JSON.stringify(cart));
    return (
      <div>
        {/* <div>
          <ClipLoader
            sizeUnit={"px"}
            size={150}
            color={"#123abc"}
            loading={isLoading}
          />
        </div> */}
        <Header />
        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/blog" component={Blog} />
            <Route path="/features" component={Features} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/blogdetail" component={BlogDetail} />
            <Redirect to="/" />
          </Switch>
        </div>
        {/*<Home/>*/}
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducers,
    isLoading: state.productReducers.isLoading
  };
}

export default connect(mapStateToProps, { getDataCart })(App);

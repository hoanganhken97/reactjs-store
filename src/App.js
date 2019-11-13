import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

import {Route, Link, Switch, Redirect} from "react-router-dom";

import Home from "./components/home/Home";
import Detail from "./components/Detail";
import Features from "./components/features/Features"
import Shop from "./components/Shop/Shop";
import BlogDetail from "./components/blog/BlogDetail";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import {connect} from "react-redux";
import {getDataCart} from './redux/action/cartAction';
import About from './components/about/About';
import ListCategory from "./components/listCategory/ListCategory";
import Footer from './components/footer/index';
import Header from './components/header/index';
import Login from './components/login/Login'

class App extends Component {
    componentDidMount() {
        this.props.getDataCart();
    }

    render() {
        const {cart} = this.props;
        // console.log('cartRouter: ' + JSON.stringify(cart));
        return (

            <div>
                <Header/>
                <div className="App-intro">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/shop" component={Shop}/>
                        <Route path="/blog" component={Blog}/>
                        <Route path="/blogdetail" component={BlogDetail}/>
                        <Route path="/features" component={Features}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/detail/:id" component={Detail}/>
                        <Route path="/category/:title" component={ListCategory}/>
                        <Redirect to="/"/>

                    </Switch>
                </div>
                <div className="btn-back-to-top" id="myBtn">
		<span className="symbol-btn-back-to-top">
			<i className="zmdi zmdi-chevron-up"></i>
		</span>
                </div>
                {/*<Home/>*/}
                <Footer/>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducers,
    };
}

export default connect(mapStateToProps, {getDataCart})(App);

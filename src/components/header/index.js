import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataCart } from "../../redux/action/cartAction";
import { Link } from 'react-router-dom'
class Header extends Component {
  render() {
    const { cart } = this.props;
    console.log("cartHeader : " + JSON.stringify(cart.carts));
    return (
      <div>
        <header>
          <div className="container-menu-desktop">
            <div className="wrap-menu-desktop">
              <nav className="limiter-menu-desktop container">
                <div className="menu-desktop">
                  <ul className="main-menu">
                    <li className="active-menu">
                      <Link to="/">Home</Link>
                    </li>

                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>

                    <li className="label1" data-label1="hot">
                      <Link to="/features">Features</Link>
                    </li>

                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>

                    <li>
                      <Link to="/about">About</Link>
                    </li>

                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="wrap-icon-header flex-w flex-r-m">
                  <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                    <i className="zmdi zmdi-search"></i>
                  </div>

                  <div
                    className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                    data-notify={cart.carts.length}
                  >
                    <i className="zmdi zmdi-shopping-cart"></i>
                  </div>

                  <a
                    href="#"
                    className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                    data-notify="0"
                  >
                    <i className="zmdi zmdi-favorite-outline"></i>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducers
  };
}

export default connect(mapStateToProps, { getDataCart })(Header);

import React, {Component} from "react";
import firebase from "../../utils/firebaseConfig";
import "./ShopCss.css"
import {Link} from "react-router-dom";

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.firebase = firebase.database();
        this.state = {
            dataSource: []
        };
    }

    componentDidMount() {
        this.firebase.ref("product").on("value", dataSnapshot => {
            this.setState({
                isLoading: false,
                dataSource: Object.values(dataSnapshot.val()),
                refreshing: false
            });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="flex-w flex-sb-m p-b-52">
                    <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
                            All Products
                        </button>

                        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
                            Women
                        </button>

                        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".men">
                            Men
                        </button>

                        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".bag">
                            Bag
                        </button>

                        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".shoes">
                            Shoes
                        </button>

                        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".watches">
                            Watches
                        </button>
                    </div>

                    <div className="flex-w flex-c-m m-tb-10">
                        <div
                            className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                            <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                            <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                            Filter
                        </div>

                        <div
                            className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                            <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                            <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                            Search
                        </div>
                    </div>
                </div>
                <div class="row">
                    {this.state.dataSource.map(item => {
                        return (
                            <div className="col-md-3 col-sm-6">
                                <div className="product-grid">
                                    <div className="product-image">
                                        {/*<a href="#">*/}
                                        <img className="pic-1"
                                             src={item.image[0]}/>
                                        <ul className="social">
                                            <div className="view-quick">
                                            <p>Quick View</p>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="product-content">
                                        <h4 className="title"><Link to={`/detail/${item.id}`}>{item.title}</Link></h4>
                                        <h4 className="pri">$ {item.price}</h4>
                                    </div>
                                    <a className="view-icon">
                                        <i className="zmdi zmdi-favorite-outline"></i>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex-c-m flex-w w-full p-t-45">
                    <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
                        Load More
                    </a>
                </div>
            </div>
        );
    }
}


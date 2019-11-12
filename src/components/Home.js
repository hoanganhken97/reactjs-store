import React, {Component} from "react";
import firebase from "../utils/firebaseConfig";
import {Link} from 'react-router-dom';

export default class Home extends Component {
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
        console.log("data:" + JSON.stringify(this.state.dataSource));
        return (
            // <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            //   <div className="panel panel-info">
            //     <div className="panel-heading">
            //       <h3 className="panel-title">ReactJS</h3>
            //     </div>
            //     <div className="panel-body">
            //       <ul className="list-group">
            //         <li className="list-group-item">Item 1</li>
            //         <li className="list-group-item">Item 2</li>
            //         <li className="list-group-item">Item 3</li>
            //       </ul>
            //     </div>
            //   </div>
            // </div>
            <div>
                {this.state.dataSource.map(data => {
                    return (
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div>
                                <Link to={`/detail/${data.id}`}>
                                    <ul className="list-group">
                                        <img src={data.image[0]} className="App-logo" alt="logo"/>
                                        <h3>{data.title}</h3>
                                    </ul>
                                </Link>
                            </div>
                        </div>
                    )
                })}
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
                                    <img src="../images/icons/icon-pay-01.png" alt="ICON-PAY"/>
                                </a>

                                <a href="#" className="m-all-1">
                                    <img src="../images/icons/icon-pay-02.png" alt="ICON-PAY"/>
                                </a>

                                <a href="#" className="m-all-1">
                                    <img src="../images/icons/icon-pay-03.png" alt="ICON-PAY"/>
                                </a>

                                <a href="#" className="m-all-1">
                                    <img src="../images/icons/icon-pay-04.png" alt="ICON-PAY"/>
                                </a>

                                <a href="#" className="m-all-1">
                                    <img src="../images/icons/icon-pay-05.png" alt="ICON-PAY"/>
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

import React, {Component} from "react";
import firebase from "../utils/firebaseConfig";

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.firebase = firebase.database();
        this.state = {
            dataSource: [],
            check: 0,
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

    setItem(item) {
        this.setState({
            check: item.id,
        })
    }

    render() {
        var pid = this.props.match.params.id;
        console.log("data:" + JSON.stringify(this.state.dataSource[0]));
        return (
            <div className="container">
                {/*{this.state.dataSource.map(function (item, index) {*/}
                {/*    return (*/}
                {/*        <div key={index}>*/}
                {/*            {*/}
                {/*                this.state.check == index ?*/}
                {/*                    <div onClick={this.setItem(item)}>*/}
                {/*                        <img src={item.image[0]}/>*/}
                {/*                    </div> :*/}
                {/*                    <div onClick={this.setItem(item)}>*/}
                {/*                        <img src={item.image[0]}/>*/}
                {/*                    </div>*/}
                {/*            }*/}
                {/*        </div>)*/}
                {/*}.bind(this))*/}
                {/*}*/}
                {this.state.dataSource.map(data => {
                    if (data.id == pid) {
                        return (
                            <div>
                                <div className="container">
                                    <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                                        <a href="/home" className="stext-109 cl8 hov-cl1 trans-04">
                                            Home
                                            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                                        </a>
                                        <span className="stext-109 cl4">{data.title}</span>
                                    </div>
                                </div>

                                <div style={{marginTop: 50}}>
                                    <div className="row">
                                        <div className="col-md-6 col-lg-7 p-b-30">
                                            <div className="p-l-25 p-r-30 p-lr-0-lg">
                                                <div className="wrap-slick3 flex-sb flex-w">
                                                    <div className="wrap-slick3-dots">
                                                        <img src={data.image[0]} alt="IMG-PRODUCT" style={{
                                                            width: 100,
                                                            backgroundColor: '#e2ddd9',
                                                            padding: 10
                                                        }}/>
                                                        <img src={data.image[0]} alt="IMG-PRODUCT" style={{
                                                            width: 100,
                                                            marginTop: 10,
                                                            backgroundColor: '#e2ddd9',
                                                            padding: 10
                                                        }}/>
                                                        <img src={data.image[0]} alt="IMG-PRODUCT" style={{
                                                            width: 100,
                                                            marginTop: 10,
                                                            backgroundColor: '#e2ddd9',
                                                            padding: 10
                                                        }}/>
                                                    </div>
                                                    {/*<div className="wrap-slick3-arrows flex-sb-m flex-w" style={{backgroundColor:'silver'}}/>*/}
                                                    <div className="slick3 gallery-lb">
                                                        <div className="item-slick3" data-thumb={data.image[0]}>
                                                            <div className="wrap-pic-w pos-relative">
                                                                <div style={{
                                                                    backgroundColor: '#e2ddd9',
                                                                    padding: 50,
                                                                    marginLeft: 10
                                                                }}>
                                                                    <img src={data.image[0]} alt="IMG-PRODUCT"/>
                                                                    <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                                                       href={data.image[0]}>
                                                                        <i className="fa fa-expand"/>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-5 p-b-30">
                                            <div className="p-r-50 p-t-5 p-lr-0-lg">
                                                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                                    {data.title}
                                                </h4>
                                                <span className="mtext-106 cl2">${data.price}</span>

                                                <p className="stext-102 cl3 p-t-23">
                                                    {data.product_description}
                                                </p>

                                                <div className="p-t-33">
                                                    <div className="flex-w flex-r-m p-b-10">
                                                        <div className="size-203 flex-c-m respon6">
                                                            Size
                                                        </div>

                                                        <div className="size-204 respon6-next">
                                                            <div className="rs1-select2 bor8 bg0">
                                                                <select className="js-select2" name="time">
                                                                    <option>Choose an option</option>
                                                                    <option>{data.size[0]}</option>
                                                                    <option>{data.size[1]}</option>
                                                                    <option>{data.size[2]}</option>
                                                                    <option>{data.size[3]}</option>
                                                                </select>
                                                                <div className="dropDownSelect2"></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex-w flex-r-m p-b-10">
                                                        <div className="size-203 flex-c-m respon6">
                                                            Color
                                                        </div>

                                                        <div className="size-204 respon6-next">
                                                            <div className="rs1-select2 bor8 bg0">
                                                                <select className="js-select2" name="time">
                                                                    <option>Choose an option</option>
                                                                    <option>{data.color[0]}</option>
                                                                    <option>{data.color[1]}</option>
                                                                    <option>{data.color[2]}</option>
                                                                    <option>{data.color[3]}</option>
                                                                </select>
                                                                <div className="dropDownSelect2"></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex-w flex-r-m p-b-10">
                                                        <div className="size-204 flex-w flex-m respon6-next">
                                                            <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                                <div
                                                                    className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                                    <i className="fs-16 zmdi zmdi-minus"></i>
                                                                </div>

                                                                <input className="mtext-104 cl3 txt-center num-product"
                                                                       type="number"
                                                                       name="num-product" value="1"/>

                                                                <div
                                                                    className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                                    <i className="fs-16 zmdi zmdi-plus"></i>
                                                                </div>
                                                            </div>

                                                            <button
                                                                className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                                Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                                                    <div className="flex-m bor9 p-r-10 m-r-11">
                                                        <a href="#"
                                                           className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                                                           data-tooltip="Add to Wishlist">
                                                            <i className="zmdi zmdi-favorite"></i>
                                                        </a>
                                                    </div>

                                                    <a href="#"
                                                       className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                                       data-tooltip="Facebook">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>

                                                    <a href="#"
                                                       className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                                       data-tooltip="Twitter">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>

                                                    <a href="#"
                                                       className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                                       data-tooltip="Google Plus">
                                                        <i className="fa fa-google-plus"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    } else {
                        return '';
                    }

                })}

            </div>
        );
    }
}


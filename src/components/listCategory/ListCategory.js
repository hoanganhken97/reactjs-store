import React, {Component} from "react";
import firebase from "../../utils/firebaseConfig";
import {connect} from "react-redux";
import {ListdataProduct} from "../../redux/action/productAction";
import {Link} from "react-router-dom";
import './styles.css'

class ListCategory extends Component {
    constructor(props) {
        super(props);
        this.firebase = firebase.database();
        this.state = {
            dataSource: [],
            check: 0,
            quantity: 1
        };
    }

    decreaseQuantity = () => {
        if (this.state.quantity <= 1) {
            return;
        } else {
            this.setState({
                quantity: this.state.quantity - 1
            });
        }
    };

    increaseQuantitiy = () => {
        this.setState({
            quantity: this.state.quantity - 1 + 2
        });
    };

    componentDidMount() {
        this.firebase.ref("product").on("value", dataSnapshot => {
            this.setState({
                isLoading: false,
                dataSource: Object.values(dataSnapshot.val()),
                refreshing: false
            });
        });
        // const category = this.props.match.params.title;
        // let data = this.props.data;
        // // let dataSource = data.filter(e => {
        // //     return e.category === category;
        // // });
        // this.setState({
        //     dataSource,
        //     isLoading: false,
        // });
    }

    setItem(item) {
        this.setState({
            check: item.id
        });
    }

    addCart = data => {
        this.props.addToCart(data, this.state.quantity);
        // console.log("add: " + JSON.stringify(data,));
    };

    render() {
        const {data} = this.props
        var ptitle = this.props.match.params.title;
        console.log("pTitle:" + JSON.stringify(ptitle));
        console.log("data listCategory:" + JSON.stringify(this.state.dataSource));
        return (
            <div className="container">
                <div className='row'>
                    {this.state.dataSource.map(data => {
                        if (data.category === ptitle) {
                            return (
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                    <Link to={`/detail/${data.id}`}>
                                        <ul className="list-group">
                                            <div className="imgListCate">
                                                <img src={data.image[0]} className="App-logo"/>
                                            </div>
                                            <p>{data.title}</p>
                                        </ul>
                                    </Link>
                                </div>

                            );
                        } else {
                            return "";
                        }
                    })}
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch, state) {
    return {
        data: state.productReducers,
    };
}

export default connect(mapDispatchToProps, { ListdataProduct})(ListCategory);

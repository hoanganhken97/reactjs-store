import React, {Component} from "react";
import firebase from "../../utils/firebaseConfig";
import "./shopCss.css"

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
                <div class="row">
                    {this.state.dataSource.map(item => {
                        return (
                            <div className="col-md-3 col-sm-6">
                                <div className="product-grid">
                                    <div className="product-image">
                                        {/*<a href="#">*/}
                                        <img className="pic-1"
                                             src={item.image[0]}/>
                                        {/*</a>*/}
                                        {/*<ul className="social">*/}
                                        {/*</ul>*/}
                                    </div>
                                    <div className="product-content">
                                        <h4 className="title"><a href="#">{item.title}</a></h4>
                                        <h4 className="title">$ {item.price}</h4>
                                    </div>
                                    <a className="view-icon">
                                        <i className="zmdi zmdi-favorite-outline"></i>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}


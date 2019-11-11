import React, {Component} from "react";
import firebase from "../utils/firebaseConfig";

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
        var pid=this.props.match.params.id;
        console.log("data:" + JSON.stringify(this.state.dataSource[0]));
        return (
            <div className="container">
                {this.state.dataSource.map(data=>{
                    if (data.id == pid){
                        return(
                            <div className="card">
                                <div className="container-fliud">
                                    <div className="wrapper row">
                                        <div className="preview col-md-6">

                                            <div className="preview-pic tab-content">
                                                <div className="tab-pane active" id="pic-1"><img
                                                    src={data.image[0]}/></div>
                                                <div className="tab-pane" id="pic-2"><img src={data.image[0]}/>
                                                </div>
                                                <div className="tab-pane" id="pic-3"><img src={data.image[0]}/>
                                                </div>
                                                <div className="tab-pane" id="pic-4"><img src={data.image[0]}/>
                                                </div>
                                                <div className="tab-pane" id="pic-5"><img src={data.image[0]}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details col-md-6">
                                            <h3 className="product-title">men's shoes fashion</h3>
                                            <div className="rating">
                                                <div className="stars">
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <span className="review-no">41 reviews</span>
                                            </div>
                                            <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu
                                                laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu
                                                delectus posuere.</p>
                                            <h4 className="price">current price: <span>$180</span></h4>
                                            <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87
                                                votes)</strong></p>
                                            <h5 className="sizes">sizes:
                                                <span className="size" data-toggle="tooltip" title="small">s</span>
                                                <span className="size" data-toggle="tooltip" title="medium">m</span>
                                                <span className="size" data-toggle="tooltip" title="large">l</span>
                                                <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                                            </h5>
                                            <h5 className="colors">colors:
                                                <span className="color orange not-available" data-toggle="tooltip"
                                                      title="Not In store"></span>
                                                <span className="color green"></span>
                                                <span className="color blue"></span>
                                            </h5>
                                            <div className="action">
                                                <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                                                <button className="like btn btn-default" type="button"><span
                                                    className="fa fa-heart"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    }else {
                        return '';
                    }

                })}

            </div>
        );
    }
}


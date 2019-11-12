import React, {Component} from "react";
import firebase from "../../utils/firebaseConfig";
import {Link} from 'react-router-dom';
import './Home.css';
import {connect} from "react-redux";
import {Category, ListdataProduct} from "../../redux/action/productAction";
import Slideshow from '../slider/Slider';
import img1 from '../../images/slide-01.jpg';
import img2 from '../../images/slide-02.jpg';
import img3 from '../../images/slide-03.jpg';
import Shop from "../Shop/Shop";


const collection = [
    {src: img1,name:"Men Collection 2018",caption:'New arrivals'},
    {src: img2,name:"Women Collection 2018",caption:'NEW SEASON'},
    {src: img3,name:"Men New-Season",caption:'Jackets & Coats'},

];

class Home extends Component {
    constructor(props) {
        super(props);
        this.firebase = firebase.database();
        this.state = {
            dataSource: []
        };
    }

    componentDidMount() {
        this.props.ListdataProduct();
        this.props.Category();
        this.firebase.ref("product").on("value", dataSnapshot => {
            this.setState({
                isLoading: false,
                dataSource: Object.values(dataSnapshot.val()),
                refreshing: false
            });
        });
    }

    render() {
        const {data, category} = this.props;
        console.log("cate:" + JSON.stringify(category));
        return (
            <div>
                <div className="App">
                    <Slideshow
                        input={collection}
                        ratio={`3:1.5`}
                        mode={`automatic`}
                        timeout={`3000`}
                    />
                </div>
                <div className="body">
                    <div className="row">
                        {category.map(data => {
                            return (
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <div className="category">
                                        <Link to={'/shop'}>
                                            <ul className="list-group">
                                                <img src={data.image} className="App-logo" alt="logo"/>
                                                <p>{data.title}</p>
                                            </ul>
                                        </Link>
                                    </div>
                                </div>

                            );
                        })}
                    </div>

                    <div className="viewProduct">
                        <h2>PRODUCT OVERVIEW</h2>
                    </div>

                    <Shop/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    data: state.productReducers.product,
    category: state.productReducers.category
});
export default connect(
    mapStateToProps, {ListdataProduct, Category})(Home);

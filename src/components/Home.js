import React, { Component } from "react";
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
            <div >
              <Link to={`/detail/${data.id}`} >
            <ul className="list-group">
            <img src={data.image[0]} className="App-logo" alt="logo" />
            <h3>{data.title}</h3>
            </ul>
              </Link>
            </div>
          </div>
          )
        })}
      </div>
    );
  }
}

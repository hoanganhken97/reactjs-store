import React, {Component} from "react";
import "./style.css";

export default class Login extends Component {


    render() {
        return (
            <div className="containerall">
                <div className="container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card">
                            <div className="card-header">
                                <h3>Sign In</h3>
                                <div className="d-flex justify-content-end social_icon">
                                <span className="backgr"><i style={{fontSize: 35, color: '#fff'}}
                                                            className="fa fa-facebook"/></span>
                                    <span className="backgr2"><i style={{fontSize: 35, color: '#fff'}}
                                                                 className="fa fa-google-plus"/></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-tex"><i
                                            style={{fontSize: 25, color: '#fff'}}
                                            className="fa fa-user"/></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="username"/>

                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-tex">
                                            <i style={{fontSize: 25, color: '#fff'}} className="fa fa-key"/></span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="password"/>
                                    </div>
                                    <div className="row align-items-center remember">
                                        <input type="checkbox"/>
                                        <div>Remember Me</div>
                                    </div>
                                    <div className="form-group" style={{backgroundColor: '#8DC9D1'}}>
                                        <input type="submit" value="Login" className="btn float-right login_btn"/>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center links">
                                    Don't have an account?<a href="#">Sign Up</a>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <a href="#">Forgot your password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

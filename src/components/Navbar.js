import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        const imageStyle = { width: 500 }

        return (
            <div>
                <div className="container">
                    <header className="navbar">
                        <div className="columns">
                            <div className="column">
                                <section className="navbar-section">
                                    <div className="navbar-brand">
                                        <img style={imageStyle} className="img-responsive" src="logo.png" alt="The Learing Curve" /></div>
                                </section>
                            </div>
                        </div>
                    <div className="container">
                            <div className="columns">
                                    <div className="column col-4-mr-auto">
                                        {loggedIn ? (
                                            <section className="navbar-section">
                                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                                    <span className="text-secondary">logout</span></Link>
                                            </section>
                                        ) : (
                                                <section className="navbar-section">
                                                    <Link to="/" className="btn btn-link text-secondary">
                                                        <span className="text-secondary">home</span>
                                                    </Link>
                                                    <Link to="/login" className="btn btn-link text-secondary">
                                                        <span className="text-secondary">login</span>
                                                    </Link>
                                                    <Link to="/signup" className="btn btn-link">
                                                        <span className="text-secondary">sign up</span>
                                                    </Link>
                                                    <Link to="/profile" className="btn btn-link">
                                                        <span className="text-secondary">profile</span>
                                                    </Link>
                                                    <Link to="/logout" className="btn btn-link">
                                                        <span className="text-secondary">logout</span>
                                                    </Link>
                                                </section>
                                            )}
                                    </div>
                                <div className="column-mr-auto">
                                    <section className="navbar-section">
                                        <div className='input-group input-inline'>
                                            <input className="form-input" type="text" placeholder="search" />
                                            <button className="btn btn-primary input-group-btn"><i class="icon icon-search"></i></button>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        
        );

    }
}

export default Navbar
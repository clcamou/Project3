import React, { Component } from 'react';
//decodes the object (user)
import jwt_decode from 'jwt-decode';

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      school_id: '',
      errors: {}
    }
  };
  
  componentDidMount() {
    //take the login token from local storage to decode the information from the database
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    //decode the token to get the information from the database
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      username: decoded.username, 
      school_id: decoded.school_id
    });
  };

  render() {
    return (
        <div>
        <h4>Profile</h4>
            <h1 className="text-center">PROFILE</h1>
          </div>
    )
}}

export default Profile;
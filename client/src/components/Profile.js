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
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  };
};

export default Profile;
import React, { Component } from 'react';


class Profile extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <div className="Container">
          <h4>Profile</h4>
          <h1 className="display-3">Profile</h1>
          <p className="lead">Summary</p>
          <figure className="avatar avatar-xl">
            <img scr="imag/avatar-1.png" alt="..."></img>
          </figure>
        </div>
        
      </div>
    )
  }
}



export default Profile;
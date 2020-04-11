import React, { Component } from 'react'

class Home extends Component {
    
    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <img style={imageStyle} src="logo.png" alt = "The Learing Curve"/>
                <p>It's good to be home</p>
            </div>
        )

    }
}

export default Home
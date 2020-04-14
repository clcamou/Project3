import React, { Component } from 'react'

class Home extends Component {

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column col-6">
                        <div className="panel">
                            <div className="panel-header">
                                <div className="panel-title h5">
                                    Announcements
                            </div>
                                <div className="panel-nav">

                                </div>
                                <div className="panel-body"></div>
                                <div className="footer">
                                    <button class="btn btn-primary">Post</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="column col-6">
                        <div className="panel">
                            <div className="panel-header">
                                <div className="panel-title h5"> Lessons
                            </div>
                                <div className="panel-nav">

                                </div>
                                <div className="panel-body"></div>
                                <div className="footer">
                                    <button class="btn btn-primary">Enter
                            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column col-6">
                        <div className="panel">
                            <div className="panel-header">
                                <div className="panel-title h5">
                                    Quizzes
                            </div>
                                <div className="panel-nav">

                                </div>
                                <div className="panel-body"></div>
                                <div className="footer">
                                    <button class="btn btn-primary">Enter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column col-6">
                        <div className="panel">
                            <div className="panel-header">
                                <div className="panel-title h5">
                                    Resources
                            </div>
                                <div className="panel-nav">

                                </div>
                                <div className="panel-body"></div>
                                <div className="footer">
                                    <button class="btn btn-primary">Enter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
import React, { Component } from 'react';


class Home extends Component {
    render() {
        return (
            <div>
                Home
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Home;
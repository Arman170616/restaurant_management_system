import React, { Component } from 'react';
import Loading from './Loading';

class Home extends Component {

    render() {
        document.title = "pyarena cookies";
        return (
            <div>
                <Loading />
            </div>
        );
    }
}

export default Home;
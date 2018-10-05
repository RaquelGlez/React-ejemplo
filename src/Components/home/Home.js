import React, { Component} from 'react';
import Navbar from './Navbar'
import Logout from '../login/Logout';

import './Home.css';

class Home extends Component {
    // constructor (props) {
    //     super(props);
        
    // }

  

    render() {
        return (
            <div className="col-md-6">
                <div> <Navbar /></div>
                <h1>You are home</h1>
                <Logout />
            </div>
        )
    }
}


export default Home;
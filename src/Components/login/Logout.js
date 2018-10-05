import React, { Component } from 'react';
import credentials from '../../configuration/Firebase';


class Logout extends Component {
    logout(){
        credentials.auth().signOut();
    }

    render() {
      return (
        <div className="col-md-6">
         <button onClick={this.logout}>Salir</button>
        </div>

    );
  }
}
  export default Logout;
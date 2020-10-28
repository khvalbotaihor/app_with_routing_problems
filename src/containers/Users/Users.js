import React, { Component } from 'react';
import {Route} from "react-router-dom";

class Users extends Component {
    render () {
        return (
            <div>
                <Route path="/users" />
                <Route render={()=> <h1>The Users Page</h1> }  />
            </div>
        );
    }
}

export default Users;
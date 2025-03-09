import { Component, Fragment, useState, useEffect } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
    constructor() {
        super();
        this.state = {
            filteredUsers: [], // let's simulate that we will be getting the users from a server
            searchTerm: ''
        };
    }

    componentDidMount() {
        // Send http request
        this.setState({ filteredUsers: DUMMY_USERS });
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousState.searchTerm !== this.state.searchTerm) {
            this.setState({filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm))});
        }
    }

    searchChangeHandler(event) {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <Users users={this.state.filteredUsers} />
            </Fragment>
        );
    }
}

export default UserFinder;
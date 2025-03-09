import { Component, Fragment, useState, useEffect } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context'; // In class based components, you can listen to only one context

class UserFinder extends Component {
    static contextType = UsersContext
    constructor() {
        super();
        this.state = {
            filteredUsers: [], // let's simulate that we will be getting the users from a server
            searchTerm: ''
        };
    }

    componentDidMount() {
        // Send http request
        this.setState({ filteredUsers: this.context.users });
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousState.searchTerm !== this.state.searchTerm) {
            this.setState({filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))});
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
import { Component, useState } from 'react';
import User from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
    }
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; NOT HOW YOU CHANGE STATE
    this.setState((currentState) => {
      return { showUsers: !currentState.showUsers} // State is merged in class based components, not replaced! All other values of the state will be kept
    })
  }
  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;

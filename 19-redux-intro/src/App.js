import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header.js';
import Counter from './components/Counter.js';
import Auth from './components/Auth.js';
import UserProfile from './components/UserProfile.js';


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
      <Header />
      <Counter />
      { !isAuth && <Auth /> }
      { isAuth && <UserProfile /> }
    </Fragment>
  );
}

export default App;

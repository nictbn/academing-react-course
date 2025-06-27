import { Fragment } from 'react';

import Header from './components/Header.js';
import Counter from './components/Counter.js';
import Auth from './components/Auth.js';


function App() {
  return (
    <Fragment>
      <Header />
      <Counter />
      <Auth />
    </Fragment>
  );
}

export default App;

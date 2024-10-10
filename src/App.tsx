import React from 'react';
import './App.css';


//import Scss
import './assets/scss/themes.scss';

//imoprt Route
import Route from './Routes';

import fakeBackend from "./helpers/AuthType/fakeBackend";
fakeBackend();

function App() {
  return (
    <React.Fragment>
      <Route />
    </React.Fragment>
  );
}

export default App;

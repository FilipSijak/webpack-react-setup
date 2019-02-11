import React from 'react';
import FormContainer from './components/FormContainer';

import 'normalize.css';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import styles from "./app.sass"  // Css-module styles
import test from "./test.sass"   // Css-module styles
import test2 from "./test2.scss"   // Css-module styles

const App = () => (
  <div className='App'>
    <FormContainer/>
    <div>
      <h1>Form container</h1>
    </div>
  </div>
);

export default App;

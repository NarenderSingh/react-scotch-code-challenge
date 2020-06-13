import React from 'react';
import { render } from 'react-dom';
import One from './src/components/One';
import Two from './src/components/Two';
import Three from './src/components/Three';
import Four from './src/components/Four';
import Five from './src/components/Five';

import './src/style.css';

interface IAppProps {}

const App = (props: IAppProps) => {
  const content = (
    <div className="App">
      <h1>Welcome to the Scotch Code Challenge!</h1>
      <div className="container">
        <One />
        <Two />
        <Three />
        <Four />
        <Five />
      </div>
    </div>
  )

  return content;
}

render(<App />, document.getElementById('root'));

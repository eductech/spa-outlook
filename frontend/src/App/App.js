import React, { Component } from 'react';
import './App.css';

import Menu from './Menu/Menu';
import WorkArea from './WorkArea/WorkArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <WorkArea />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './Dashboard.css';

import Menu from './WorkArea/WorkArea';
import WorkArea from './Menu/Menu';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <WorkArea />
        <Menu />
      </div>
    );
  }
}

export default Dashboard;
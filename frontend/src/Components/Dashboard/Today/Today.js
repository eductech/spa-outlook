import React, { Component } from 'react';

import './Today.css';

export default class Today extends Component {
  render() {
    return (
      <div className="Today">
        { this.props.children }
      </div>
    )
  }
}

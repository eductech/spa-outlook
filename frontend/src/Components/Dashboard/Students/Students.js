import React, { Component } from 'react';

import './Students.css';

export default class Students extends Component {
  render() {
    return (
      <div className="Students">
        { this.props.children }
      </div>
    )
  }
}

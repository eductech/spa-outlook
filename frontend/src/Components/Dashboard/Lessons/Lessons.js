import React, { Component } from 'react';

import './Lessons.css';

export default class Lessons extends Component {
  render() {
    return (
      <div className="Lessons">
        { this.props.children }
      </div>
    )
  }
}

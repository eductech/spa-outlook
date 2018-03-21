import React, { Component } from 'react';
import './Calendar.css';

export default class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
        { this.props.children }
      </div>
    )
  }
}

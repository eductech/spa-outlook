import React, { Component } from 'react';

import Calendar from '../Calendar/Calendar';
import Today from '../Today/Today';
import Lessons from '../Lessons/Lessons';
import Students from '../Students/Students';

import './WorkArea.css';

export default class WorkArea extends Component {
  render() {
    return (
      <div className="WorkArea">
        { this.props.children }
        <Calendar />
        <Today />
        <Lessons />
        <Students />
      </div>
    )
  }
}

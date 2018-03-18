import React, { Component } from 'react';
import './App.css';

class Students extends Component {
  render() {
    return (
      <div className="Students">

      </div>
    );
  }
}

class Lessons extends Component {
  render() {
    return (
      <div className="Lessons">

      </div>
    );
  }
}

class Today extends Component {
    render() {
      return (
        <div className="Today">
  
        </div>
      );
    }
}

class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">

      </div>
    );
  }
}

class WorkArea extends Component {
  render() {
    return (
      <div className="WorkArea">
        <Calendar />
        <Today />
        <Lessons />
        <Students />
      </div>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
      
      </div>
    );
  }
}

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

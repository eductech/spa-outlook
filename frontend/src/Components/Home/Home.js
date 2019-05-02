import React, { Component } from 'react';
import './Home.css';
import { Link }  from 'react-router-dom';

class Home extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="home">
        <div className="home__content">
          <h1>#1 app for mining bitcoin</h1>
          <p>This application allows you to create dynamic schedule of classes and maintain a list of students.<br/>
          Perfect choice for the teacher and home tutor.<br/>And of course it's FREE</p>
          {/* <Link className="btn btn-primary btn-lg btn-block" to='/dashboard'>Log In / Sigh Up</Link> */}
          {
            !isAuthenticated() && (
              <button className="btn btn-primary btn-lg btn-block" onClick={this.login.bind(this)}>
                Log In / Sigh Up
              </button>
            )
          }
          {
            isAuthenticated() && (
              <Link className="btn btn-primary btn-lg btn-block" to='/dashboard'>
                GoTo Dashboard
              </Link>
            )
          }
        </div>
        {
          isAuthenticated() && (
            <button className="btn btn-primary btn-lg home__logout-btn" onClick={this.logout.bind(this)}>
              Log Out
            </button>
          )
        }
      </div>
    );
  }
}

export default Home;
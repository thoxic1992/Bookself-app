import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <h1 className="navbar-brand">Bookself app</h1>
          <small className="text-light">Google Books Search App</small>
        </nav>
      </header>
    );
  }
}

export { Header };

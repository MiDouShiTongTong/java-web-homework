import React, { Component } from 'react';
// router 组件
import Router from './router';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main className="app-container">
        <Router/>
      </main>
    );
  }
}

export default App;

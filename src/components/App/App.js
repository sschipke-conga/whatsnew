import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import SearchForm from '../SearchForm/SearchForm'
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'
import entertainment from '../../data/entertainment'
import health from '../../data/health'
import science from '../../data/science'
import technology from '../../data/technology'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <div className="app">
        <Menu />
        <SearchForm />
        <NewsContainer articles={this.state.local}/>
      </div>
    );
  }
}

export default App;

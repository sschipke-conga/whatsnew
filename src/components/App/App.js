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
      local, entertainment, health, science, technology
    }
    this.state.current = local;
    console.log(this.state)
  }

  handleButton = event => {
    console.log(event.target)
    this.setState({current:this.state[event.target.name]})
  }

  render () {
    return (
      <div className="app">
        <Menu handleButton={this.handleButton}/>
        <SearchForm />
        <NewsContainer articles={this.state.current}/>
      </div>
    );
  }
}

export default App;

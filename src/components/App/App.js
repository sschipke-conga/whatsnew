import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';

class App extends Component {
  constructor() {
    super();
    this.local=local;
    this.health=health;
    this.science=science;
    this.technology=technology;
    this.entertainment=entertainment;
    this.state = {
      current: local
    }
  }

  handleButton = event => {
    this.setState({current:this[event.target.name]})
  }

  searchStories= (term) => {
    let stories= [...local, ...health, ...technology, ...science, ...health]
    this.setState({ current: (stories.filter(story => story.headline.toLowerCase().includes(term.toLowerCase()) || story.description.toLowerCase().includes(term.toLowerCase())))})
  }

  render () {
    return (
      <div className="app">
        <Menu handleButton={this.handleButton}/>
        <SearchForm searchStories={this.searchStories}/>
        <NewsContainer articles={this.state.current}/>
      </div>
    );
  }
}

export default App;

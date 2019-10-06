import React, {Component} from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      search:''
    }
  }

  handleChange = (e) => {
    console.log(e.target)
    this.setState({[e.target.name]: e.target.value })
    if(e.which === 13) {
      this.handleSubmit()
    }
  }

  handleSubmit = (e) => {
    if (e.which === 13 || e.type === 'click') {
    this.props.searchStories(this.state.search)
    this.setState({search:''})
    }
  }

  render() {
  return (
  <header>
    <input onChange={this.handleChange} onKeyPress={this.handleSubmit} type="text" placeholder="Search articles" name="search" value={this.state.search}/>
    <button type="button" onClick={this.handleSubmit}>Search</button>
  </header>
  )
  }
}


export default SearchForm;
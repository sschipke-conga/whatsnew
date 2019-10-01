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
    this.setState({[e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    this.props.searchStories(this.state.search)
    this.setState({search:''})
  }

  render() {
  return (
  <header>
    <input onChange={this.handleChange} type="text" placeholder="Search articles" name="search" value={this.state.search}/>
    <button type="button" onClick={this.handleSubmit}>Search</button>
  </header>
  )
  }
}


export default SearchForm;
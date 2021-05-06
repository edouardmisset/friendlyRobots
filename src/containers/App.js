import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      SearchField: '',
    };
  }

  onSearchChange = event => {
    this.setState({ SearchField: event.target.value });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
      .catch(error => console.error(error));
  }

  render() {
    const { robots, SearchField } = this.state;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(SearchField.toLowerCase())
    );
    return robots.length ? (
      <div className='tc'>
        <h1 className='f1'>Friendly Robots</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    ) : (
      <h1 className='tc'>Loading...</h1>
    );
  }
}

export default App;

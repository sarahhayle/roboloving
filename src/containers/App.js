import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Modal from '../components/Modal';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: '',
      modalVisible: true,
      bgBlur: true
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value })
  }

  toggleModal = event => {
    this.setState({ 
      modalVisible: !this.state.modalVisible,
      bgBlur: !this.state.bgBlur
    })
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
      <h1 className='tc f1'>Loading</h1> :
      (
        <div className='tc'>
          <Modal visible={this.state.modalVisible} toggle={this.toggleModal} />
          <h1 className = 'f1'>RoboLoving</h1>
          <div className={`tc ${this.state.bgBlur ? 'dn' : ''}`}>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
          </div>
        </div>
      );
  }
}

export default App;
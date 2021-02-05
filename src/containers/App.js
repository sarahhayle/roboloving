import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Modal from '../components/Modal';
import Deck from '../components/Deck';
import { robots } from '../components/robots'
import './App.css';
import '../components/Deck.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      // robots: [],
      searchField: '',
      modalVisible: true,
      hideBg: true
    }
    this.ref = React.createRef();
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({ robots: users }))
  // }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value })
  }

  toggleModal = event => {
    this.setState({ 
      modalVisible: !this.state.modalVisible,
      hideBg: !this.state.hideBg
    })
  }

  render() {
    const { searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return searchField ? 
        robot.name.toLowerCase().includes(searchField.toLowerCase())
      : null;
    })

    return (
        <div className='tc'>
          <h1 className='f1'>RoboLoving</h1>
          <Modal visible={this.state.modalVisible} toggle={this.toggleModal} />
          {!this.state.hideBg ?
          <>
            <Scroll>
              <Deck/>
            </Scroll>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList className='scroll' robots={filteredRobots} />
          </>
          : null}
        </div>
    );
  }
}

export default App;
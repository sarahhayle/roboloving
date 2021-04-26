import React, { useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Modal from '../components/Modal';
import Deck from '../components/Deck';
import ErrorBoundary from '../components/ErrorBoundary';
import { robots } from '../components/robots';
import './App.css';
import '../components/Deck.css';

function App() {
  // const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [modal, toggleModal] = useState(true);
  const [content, toggleContent] = useState(true);

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({ robots: users }))
  // }

  const onSearchChange = event => {
    setSearchField(event.target.value);
  }

  const goToHome = () => {
    toggleModal(!modal);
    toggleContent(!content);
  }

  const filteredRobots =
    robots.filter(robot => {
    return searchField ? 
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    : null;
  })

  return (
    <div className='tc'>
      <h1 className='f1'>RoboLoving</h1>
      <ErrorBoundary>
        <Modal visible={modal} toggle={goToHome} />
        {!content ?
        <>
          <Scroll>
            <Deck/>
          </Scroll>
          <SearchBox searchChange={onSearchChange}/>
          <CardList className='scroll' robots={filteredRobots} />
        </>
        : null}
      </ErrorBoundary>
    </div>
  );
}

export default App;

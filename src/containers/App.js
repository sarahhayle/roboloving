import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Modal from '../components/Modal';
import ErrorBoundary from '../components/ErrorBoundary';
import NavBar from '../components/NavBar/NavBar'
import GlobalFonts from '../fonts/fonts';
import '../components/Deck.css';
import Home from '../components/Home';
import Matches from '../components/Matches';
import { robots as robos } from '../components/robots';

function App() {
  const [searchField, setSearchField] = useState('');
  const [modal, toggleModal] = useState(true);
  const [content, toggleContent] = useState(false);
  const [swipeableRobos, setSwipeableRobos] = useState([]);
  const [chosenRobos, setChosenRobos] = useState([]);

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
    setSwipeableRobos(robos);
  }

  const filteredRobos =
    chosenRobos.filter(robo => {
    return searchField ? 
      robo.name.toLowerCase().includes(searchField.toLowerCase())
    : chosenRobos;
  })

  return (
      <div className='tc'>
        <ErrorBoundary>
          <GlobalFonts />
          <Modal visible={modal} toggle={goToHome} />
          {content ?
            <>
              <Router>
                <NavBar />
                  <Route path="/matches">
                    <Matches robos={filteredRobos} searchChange={onSearchChange} />
                  </Route>
                  <Route path="/" exact>
                    <Home
                      swipeableRobos={swipeableRobos}
                      setSwipeableRobos={setSwipeableRobos}
                      chosenRobos={chosenRobos}
                      setChosenRobos={setChosenRobos}
                    />
                  </Route>
              </Router>
            </>
          : null }
        </ErrorBoundary>
      </div>
  );
}

export default App;

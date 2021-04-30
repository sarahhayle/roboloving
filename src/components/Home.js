import Scroll from '../components/Scroll';
import Deck from '../components/Deck';

const Home = ({
  swipeableRobos,
  setSwipeableRobos,
  setChosenRobos,
  chosenRobos
}) => {
 return (
  <Scroll>
    <Deck
      swipeableRobos={swipeableRobos}
      setSwipeableRobos={setSwipeableRobos}
      setChosenRobos={setChosenRobos}
      chosenRobos={chosenRobos}
    />
  </Scroll>
 ) 
}

export default Home;

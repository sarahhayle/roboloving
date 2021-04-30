import CardList from "./CardList"
import SearchBox from "./SearchBox"

const Matches = ({ robos, searchChange }) => {
  return (
    <div>
      <SearchBox searchChange={searchChange} />
      <CardList robos={robos} />
    </div>
  )
}

export default Matches;

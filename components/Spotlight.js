import SearchResultCard from "./SearchResult";
import data from '../data/gibson.json';

const divStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Spotlight = () => (
  <div style={divStyle}>
    <h2>{`Spotlight Artist of the Week: William Gibson`}</h2>
    {data.map(book => (
      < SearchResultCard 
        key={book.id}
        volume = {book.volumeInfo}
      />
    ))}
  </div>
)

export default Spotlight;
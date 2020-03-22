import SearchResultCard from "./SearchResultCard";
import data from '../data/gibson.json';

const divStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}

const headerStyle = {
  fontFamily: 'Garamond',
  color: 'dark grey',
  fontSize: '24px',
  textAlign:'center'
}

const Spotlight = () => (
  <div style={divStyle}>
    <h2 style={headerStyle}>Spotlight Artist of the Week: <span className="font-weight-bolder">William Gibson</span></h2>
    {data.map(book => (
      < SearchResultCard 
        key={book.id}
        volume = {book.volumeInfo}
      />
    ))}
  </div>
)

export default Spotlight;
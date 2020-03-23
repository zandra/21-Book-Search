import SearchResultCard from "./SearchResultCard";
import data from '../data/gibson.json';

const Spotlight = () => (
  <div className="spotlight">
    <h2>Spotlight Artist of the Week: <span className="font-weight-bolder">William Gibson</span></h2>
    {data.map(book => (
      < SearchResultCard 
        key={book.id}
        title={book.volumeInfo.title}
        authors={book.volumeInfo.authors}
        description={book.volumeInfo.description}
        publisher={book.volumeInfo.publisher}
        publishedDate={book.volumeInfo.publishedDate}
        pageCount={book.volumeInfo.pageCount}
        image={book.volumeInfo.imageLinks.thumbnail}
      />
    ))}

    <style jsx>
      {`
        .spotlight {
          margin: 20px;
          padding: 20px;
          border: 1px solid #DDD;
        }
        h2 {
          font-family: 'Garamond';
          color: 'dark grey';
          font-size: 24px;
          text-align: center;
        }
      `}
    </style>
  </div>
)

export default Spotlight;
import Layout from '../components/MyLayout';
import Hero from '../components/Hero';
import SearchInput from '../components/SearchInput';
import SearchResultCard from '../components/SearchResultCard';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_KEY } = publicRuntimeConfig;

const Search = (props) => (
  <Layout>
    <SearchInput 
    />
    {props.books.map(book => (
      < SearchResultCard 
      key={book.id}
      id={book.id}
      title={book.volumeInfo.title}
      authors={book.volumeInfo.authors}
      description={book.volumeInfo.description ? book.volumeInfo.description : ""}
      publisher={book.volumeInfo.publisher ? book.volumeInfo.publisher : ""}
      publishedDate={book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : ""}
      pageCount={book.volumeInfo.pageCount ? book.volumeInfo.pageCount : ""}
      image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://via.placeholder.com/128x193"}
    />
  ))}
  </Layout>
);

Search.getInitialProps = async function() {
  let search = "harry potter";
  const res = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`);
  const data = await res.json();

  return {
    books: data.items
  }

}

export default Search;
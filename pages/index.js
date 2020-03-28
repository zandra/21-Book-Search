import { useState, useRef } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import Layout from '../components/MyLayout'
import Spotlight from "../components/Spotlight";
import SearchResultCard from '../components/SearchResultCard'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig();
const { API_KEY } = publicRuntimeConfig;

const Index = (props) => {
  const [results, setResults] = useState();
  
  const fetchSearchResults = async(search) => {
    const res = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`);
    const data = await res.json();
    setResults(data.items)
    } 
    
    // Holds the user input from search input
    const inputRef = useRef();
  
    const onSubmit = () => {
      fetchSearchResults(inputRef.current.value)
    }
  return (
    <Layout title="Google Books Search">
      <InputGroup className="mb-3 mr-sm-2">
        <InputGroup.Prepend>
          <InputGroup.Text id="googlbookSearch">Google Books</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          onSubmit={() => onSubmit()}
          aria-label="Search Input"
          aria-describedby="googlbook-search-input"
          placeholder="Search"
          ref={inputRef}
        />
        <Button variant="primary" type="submit" onClick={()=> onSubmit()}>Search</Button>
      </InputGroup>

      {results ? results.map(book => (
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
      )) : <Spotlight />}
    </Layout>
  );
 }
export default Index;
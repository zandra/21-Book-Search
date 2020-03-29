import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import Layout from '../components/MyLayout'
import Spotlight from "../components/Spotlight";
import SearchResultCard from '../components/SearchResultCard'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import quotes from "../data/quotes.json";

const quote = quotes[Math.floor(Math.random() * quotes.length)];

const { publicRuntimeConfig } = getConfig();
const { API_KEY } = publicRuntimeConfig;

export default function Index(props) {
  const [results, setResults] = useState();
  // Holds the user input from search input
  const inputRef = useRef();

const fetchSearchResults = async(search) => {
  const res = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`);
  const data = await res.json();
  setResults(data)
} 

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearchResults(inputRef.current.value)
  }
    
  return (
    <Layout title="Google Book Search" quoteText={quote.text} quoteAuthor={quote.author} >
      <InputGroup className="mb-3 mr-sm-2">
        <InputGroup.Prepend>
          <InputGroup.Text>Google Books</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Search Input"
          aria-describedby="googlbook-search-input"
          placeholder="Search"
          ref={inputRef}
        />
        <Button variant="primary" className="ml-1" type="submit" onClick={()=> handleSubmit(event)}>Search</Button>
      </InputGroup>

      {results && results.length > 1 ? results.map(book => (
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
      )) : <Spotlight author="William Gibson"/>}
    </Layout>
  );
 };
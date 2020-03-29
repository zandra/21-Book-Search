import Layout from '../components/MyLayout';
import BookCard from "../components/BookCard";
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr';
import quotes from "../data/quotes.json";

const quote = quotes[Math.floor(Math.random() * quotes.length)];

const fetcher = url => fetch(url).then(r => r.json())

 const Saved = props => {
  const { data, error } = useSWR( '/api/books', fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
  return (
    <Layout title="My Bookshelf" quoteText={quote.text} quoteAuthor={quote.author} >
      {data ? data.map(book =>
      <BookCard 
        volume={book}
      />
      ) : "You have no saved books"}
    </Layout>
  )
};

export default Saved;
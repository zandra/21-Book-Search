import Layout from '../components/MyLayout';
import BookCard from "../components/BookCard";
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr';

const fetcher = url => fetch(url).then(r => r.json())

 const Saved = props => {
  const { data, error } = useSWR( '/api/books', fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data)
  return (
    <Layout title="My Bookshelf">
      {data ? data.map(book =>
      <BookCard 
        volume={book}
      />
      ) : "You have no saved books"}
    </Layout>
  )
};

export default Saved;
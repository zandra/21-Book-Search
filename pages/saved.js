import Layout from '../components/MyLayout';
import BookCard from "../components/BookCard";
import useSWR from 'swr';
import json from '../data/books.json'

 const Saved = props => {
  const { data, error } = useSWR( "/api/books", fetch);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data)
    
  return (
    <Layout title="My Bookshelf">
      {json ? json.map(book =>
      <BookCard 
        volume={book}
      />
      ) : "You have no saved books"}
    </Layout>
  )
};

export default Saved;
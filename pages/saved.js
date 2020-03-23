import Layout from '../components/MyLayout';
import BookCard from "../components/BookCard";
import useSWR from 'swr';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

export default function Saved() {
  const { data, error } = useSWR( "/api/books", fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data);
  return (
    <Layout>
      { data.map(book =>
      <BookCard 
        volume={book}
      />
      )}
    </Layout>
  )
}
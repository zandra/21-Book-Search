import Layout from '../components/MyLayout';
import BookCard from "../components/BookCard";
import useSWR from 'swr';


export default function Saved() {
  const { data, error } = useSWR( "/api/books", fetch);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data);
  return (
    <Layout>
      {/* { data.map(book =>
      <BookCard 
        volume={book}
      />
      )} */}
      {JSON.stringify(data)}
    </Layout>
  )
}
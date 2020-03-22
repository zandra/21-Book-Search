import Layout from '../components/MyLayout';
import BookCard from "../components/BookCard";
import data from '../data/gibson.json';

export default function Saved() {
  return (
    <Layout>
      <p>{"  "}</p>
      {data.map(b => 
        <BookCard 
          key={b.id}
          volume={b.volumeInfo}
        />
      )}
    </Layout>
  )
}
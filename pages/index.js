import Layout from '../components/MyLayout';
import BookCard from "../components/BookCard";
import data from '../data/gibson.json';

export default function Index() {
  return (
    <Layout>
      {data.map(b => 
        <BookCard 
          key={b.id}
          volume={b.volumeInfo}
        />
      )}
    </Layout>
  );
}
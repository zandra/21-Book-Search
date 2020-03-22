import Layout from '../components/MyLayout';
import BookCard from "../components/BookCard";
import books from "../data/books.json"; 


export default function Saved() {
  return (
    <Layout>
      { books.map(book =>
      <BookCard 
        volume={book}
      />
      )}
    </Layout>
  )
}
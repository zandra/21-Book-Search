import BookCard from "../components/BookCard";
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import data from '../data/gibson.json';

export default function Saved() {
  return (
    <Container>
      <Link href="/"><a>Home</a></Link>
      <p>{"  "}</p>
      {data.map(b => 
        <BookCard 
          key={b.id}
          volume={b.volumeInfo}
        />
      )}
    </Container>
  )
}
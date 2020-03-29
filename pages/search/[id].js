import { Fragment } from 'react'
import Layout from '../../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { Col, Row, Image } from 'react-bootstrap'

const styles = {
  container: {
    border: '1px solid black',
  },
  image: {
    border: '1px solid black',
    maxWidth: 400,
    maxHeight: 500,
  }
}

const Book = ({ book }) => (
<Layout title="Book Details">
    <Row>
      <Col className="col image-container" style={styles.image}>
        <Image src={book.volumeInfo.imageLinks.large}  alt={book.volumeInfo.title} fluid />
      </Col>
      <Col className="col details">
        <Link href='/'><a>Back to Results</a></Link>
        <ul>
          <li>{book.volumeInfo.title}</li>
          <li>{book.volumeInfo.authors}</li>
          <li>{book.volumeInfo.description}</li>
          <li>{book.volumeInfo.industryIdentifiers[0].type} {book.volumeInfo.industryIdentifiers[0].identifier}</li>
          <li>{book.volumeInfo.industryIdentifiers[1].type} {book.volumeInfo.industryIdentifiers[1].identifier}</li>
          <li>{book.volumeInfo.publisher}</li>
          <li>{book.volumeInfo.publishedDate}</li>
        </ul>
      </Col>
    </Row>
  </Layout>
);
export async function getServerSideProps(context) {
  const { id } = context.query
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  const book = await res.json()
  
    // Pass data to the page via props
    return { props: { book } }
  }
export default Book;
import { Fragment } from 'react'
import Link from 'next/link'
import Card from 'react-bootstrap/Card'

const styles = {
  card: {
  maxHeight: 200,
  margin: 5,
  overflow: "auto",
  }
}

const SearchResultCard = (props) => (
  <Fragment>
    <Card className="flex-row" style={styles.card}>
        <Card.Img variant="left" src={props.image}  alt={props.title} />
      <Card.Body>
        <Card.Title>              
          {props.title}  
            <Card.Subtitle className="mb-2 text-muted">
              {props.authors}
            </Card.Subtitle>
        </Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text className="d-flex justify-content-between align-items-baseline mt-3">
          <small className="text-muted">{props.publisher} {props.publishedDate} ({props.pageCount} pages) id:{props.id}</small>
          <Link href="/search/[id]" as={`/search/${props.id}`}>
            <a className="ml-5 font-italic">See More</a>
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  </Fragment>
  );

export default SearchResultCard;